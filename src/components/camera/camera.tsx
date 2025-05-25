"use client";

import { useCallback, useRef, useState } from "react";
import Webcam from "react-webcam";
import { CameraActions, OnTakedMediaProps } from "./camera-actions";
import { CameraPreview, CameraPreviewHandle } from "./camera-preview";

type FacingModeTypes = "user" | "environment";

export function Camera() {
  const cameraRef = useRef<Webcam>(null);
  const cameraPreviewRef = useRef<CameraPreviewHandle>(null);
  const [facingMode, setFacingMode] = useState<FacingModeTypes>("environment");
  const [switchingCamera, setIsSwitchingCamera] = useState(true);
  const [zoomLevel, setZoomLevel] = useState(1);

  const capture = useCallback(() => {
    const imageSrc = cameraRef.current?.getScreenshot();
  }, [cameraRef]);

  const switchCamera = () => {
    // const screensShot = cameraRef.current?.getScreenshot();
    setIsSwitchingCamera(true);
    setFacingMode((prev) => (prev === "user" ? "environment" : "user"));
  };

  const isFront = facingMode === "user";

  const onTakedMedia = (props: OnTakedMediaProps) => {
    cameraPreviewRef.current?.show(props);
  };

  return (
    <div className="h-dvh w-dvw overflow-hidden bg-black flex flex-col">
      <div className="relative bg-red-300 w-full flex mx-auto aspect-9/16 h-full">
        <Webcam
          style={{ visibility: switchingCamera ? "hidden" : "visible" }}
          ref={cameraRef}
          forceScreenshotSourceSize
          videoConstraints={{
            facingMode,
            width: { ideal: 1920 },
            height: { ideal: 1080 },
          }}
          mirrored={isFront}
          className="object-contain"
          onUserMedia={() => setIsSwitchingCamera(false)}
          onUserMediaError={console.error}
        />
        <input
          type="range"
          min="1"
          max="5"
          step="0.1"
          value={zoomLevel}
          onChange={(e) => setZoomLevel(parseFloat(e.target.value))}
        />
        <CameraActions
          cameraRef={cameraRef}
          // onOpenGallery={() => {}}
          onSwitch={switchCamera}
          onTakedMedia={onTakedMedia}
        />
        <CameraPreview ref={cameraPreviewRef} />
      </div>
    </div>
  );
}
