"use client";

import { useCameraPermission } from "@/hooks/use-camera-permission";
import { CameraWebcam } from "./camera-webcam";
import {
  CameraDenied,
  CameraLoading,
  CameraPrompt,
  CameraUnsupported,
} from "./camera-permissions";

export function Camera() {
  const { permission, requestCamera } = useCameraPermission();

  if (!permission) return <CameraLoading />;

  if (permission === "unsupported") return <CameraUnsupported />;
  if (permission === "denied") return <CameraDenied />;
  if (permission === "prompt")
    return <CameraPrompt requestCamera={requestCamera} />;
  if (permission === "granted") return <CameraWebcam />;
}
