"use client";
import { useEffect, useRef, useState } from "react";

export function useCameraPermission() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [permission, setPermission] = useState<
    "granted" | "denied" | "prompt" | "unsupported"
  >();

  useEffect(() => {
    const checkPermission = async () => {
      if (navigator.permissions) {
        try {
          const result = await navigator.permissions.query({
            name: "camera" as PermissionName,
          });
          setPermission(result.state);

          result.onchange = () => {
            setPermission(result.state);
          };
        } catch (error) {
          console.warn("Permissions API error or unsupported:", error);
          setPermission("unsupported");
        }
      } else {
        setPermission("unsupported");
      }
    };

    checkPermission();
  }, []);

  const requestCamera = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ video: true });
      if (videoRef.current) {
        videoRef.current.srcObject = stream;
      }
    } catch (err) {
      console.error("Erro ao acessar a câmera:", err);
    }
  };

  return { permission, requestCamera };
}
