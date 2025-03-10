// components/Camera/Camera.tsx
"use client";

import { useEffect, useRef, useState } from "react";
import CameraControls from "./camera-controls";
import MediaGallery from "./media-gallery";
import CameraSettings from "./camera-settings";
import ErrorBoundary from "./error-boundary";
import Loader from "./loader";
import { MediaItem } from "./types";
import { useToast } from "@/hooks/use-toast";

export default function Camera() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const mediaRecorderRef = useRef<MediaRecorder | null>(null);
  const [stream, setStream] = useState<MediaStream | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [mediaType, setMediaType] = useState<"photo" | "video">("photo");
  const [recordedChunks, setRecordedChunks] = useState<Blob[]>([]);
  const [mediaList, setMediaList] = useState<MediaItem[]>([]);
  const [cameraState, setCameraState] = useState({
    facingMode: "environment",
    zoom: 1,
    flash: false,
    resolution: "1920x1080",
  });
  const [devices, setDevices] = useState<MediaDeviceInfo[]>([]);
  const { showToast } = useToast();

  // Get media devices
  useEffect(() => {
    const getDevices = async () => {
      try {
        const devices = await navigator.mediaDevices.enumerateDevices();
        setDevices(devices.filter((device) => device.kind === "videoinput"));
      } catch (error) {
        console.error(error);
        // showToast("Error accessing devices", "error");
      }
    };
    getDevices();
  }, []);

  // Start camera with current settings
  const startCamera = async () => {
    try {
      setIsLoading(true);
      const [width, height] = cameraState.resolution.split("x").map(Number);

      const constraints: MediaStreamConstraints = {
        video: {
          facingMode: cameraState.facingMode,
          width: { ideal: width },
          height: { ideal: height },
          advanced: [{ zoom: cameraState.zoom }],
        },
        audio: mediaType === "video",
      };

      const mediaStream = await navigator.mediaDevices.getUserMedia(
        constraints
      );

      // Enable flash if supported
      if (cameraState.flash) {
        const track = mediaStream.getVideoTracks()[0];
        await track.applyConstraints({ advanced: [{ torch: true }] });
      }

      if (videoRef.current) {
        videoRef.current.srcObject = mediaStream;
      }

      setStream(mediaStream);
      setIsLoading(false);
    } catch (error) {
      console.error(error);
      showToast("Error accessing camera", "error");
      setIsLoading(false);
    }
  };

  // Stop camera
  const stopCamera = () => {
    stream?.getTracks().forEach((track) => track.stop());
    setStream(null);
  };

  // Take photo
  const takePhoto = () => {
    const canvas = document.createElement("canvas");
    const video = videoRef.current;

    if (!video) return;

    canvas.width = video.videoWidth;
    canvas.height = video.videoHeight;
    canvas.getContext("2d")?.drawImage(video, 0, 0);

    canvas.toBlob((blob) => {
      if (blob) {
        const url = URL.createObjectURL(blob);
        const newMedia: MediaItem = {
          url,
          type: "photo",
          timestamp: new Date().toISOString(),
        };
        setMediaList((prev) => [newMedia, ...prev]);
        showToast("Photo captured", "success");
      }
    }, "image/png");
  };

  // Video recording handlers
  const startRecording = () => {
    if (stream) {
      mediaRecorderRef.current = new MediaRecorder(stream);
      mediaRecorderRef.current.ondataavailable = handleDataAvailable;
      mediaRecorderRef.current.start();
      showToast("Recording started", "info");
    }
  };

  const stopRecording = () => {
    mediaRecorderRef.current?.stop();
    showToast("Recording stopped", "info");
  };

  const handleDataAvailable = (e: BlobEvent) => {
    if (e.data.size > 0) {
      setRecordedChunks((prev) => [...prev, e.data]);
    }
  };

  // Save recorded video
  useEffect(() => {
    if (recordedChunks.length > 0) {
      const blob = new Blob(recordedChunks, { type: "video/webm" });
      const url = URL.createObjectURL(blob);
      const newMedia: MediaItem = {
        url,
        type: "video",
        timestamp: new Date().toISOString(),
      };
      setMediaList((prev) => [newMedia, ...prev]);
      setRecordedChunks([]);
    }
  }, [recordedChunks]);

  // Camera controls
  const flipCamera = () => {
    setCameraState((prev) => ({
      ...prev,
      facingMode: prev.facingMode === "user" ? "environment" : "user",
    }));
    stopCamera();
    startCamera();
  };

  const handleZoom = (zoomLevel: number) => {
    setCameraState((prev) => ({
      ...prev,
      zoom: Math.min(Math.max(zoomLevel, 1), 5),
    }));
    applyZoom(zoomLevel);
  };

  const applyZoom = async (zoomLevel: number) => {
    const track = stream?.getVideoTracks()[0];
    if (track) {
      await track.applyConstraints({
        advanced: [{ zoom: zoomLevel }],
      });
    }
  };

  // Cleanup
  useEffect(() => {
    return () => {
      stopCamera();
      mediaList.forEach((media) => URL.revokeObjectURL(media.url));
    };
  }, []);

  return (
    <ErrorBoundary>
      <div className="relative min-h-screen bg-gray-100">
        <div className="max-w-4xl mx-auto p-4">
          <h1 className="text-3xl font-bold text-center mb-8">Camera PWA</h1>

          <CameraSettings
            cameraState={cameraState}
            devices={devices}
            setCameraState={setCameraState}
            onZoom={handleZoom}
            onFlip={flipCamera}
          />

          <div className="relative aspect-video bg-black rounded-lg overflow-hidden">
            {isLoading && <Loader />}
            <video
              ref={videoRef}
              autoPlay
              playsInline
              className="w-full h-full object-contain"
            />

            <CameraControls
              stream={stream}
              mediaType={mediaType}
              setMediaType={setMediaType}
              startCamera={startCamera}
              stopCamera={stopCamera}
              takePhoto={takePhoto}
              startRecording={startRecording}
              stopRecording={stopRecording}
              hasFlash={cameraState.flash}
            />
          </div>

          <MediaGallery mediaList={mediaList} setMediaList={setMediaList} />
        </div>
      </div>
    </ErrorBoundary>
  );
}
