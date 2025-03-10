// components/Camera/CameraSettings.tsx
"use client";

import { MediaDeviceInfo } from "./types";

export default function CameraSettings({
  cameraState,
  devices,
  setCameraState,
  onZoom,
  onFlip,
}: {
  cameraState: any;
  devices: MediaDeviceInfo[];
  setCameraState: (state: any) => void;
  onZoom: (zoom: number) => void;
  onFlip: () => void;
}) {
  return (
    <div className="mb-4 flex flex-wrap gap-4 items-center">
      <select
        value={cameraState.resolution}
        onChange={(e) =>
          setCameraState({ ...cameraState, resolution: e.target.value })
        }
        className="bg-gray-800 text-white p-2 rounded"
      >
        <option value="640x480">640x480</option>
        <option value="1280x720">1280x720</option>
        <option value="1920x1080">1920x1080</option>
      </select>

      <button onClick={onFlip} className="bg-gray-800 text-white p-2 rounded">
        Flip Camera
      </button>

      <div className="flex items-center gap-2">
        <label>Zoom:</label>
        <input
          type="range"
          min="1"
          max="5"
          step="0.1"
          value={cameraState.zoom}
          onChange={(e) => onZoom(parseFloat(e.target.value))}
          className="w-32"
        />
        <span>{cameraState.zoom}x</span>
      </div>

      <label className="flex items-center gap-2">
        <input
          type="checkbox"
          checked={cameraState.flash}
          onChange={(e) =>
            setCameraState({ ...cameraState, flash: e.target.checked })
          }
        />
        Flash
      </label>

      {devices.length > 1 && (
        <select
          value={cameraState.deviceId}
          onChange={(e) =>
            setCameraState({ ...cameraState, deviceId: e.target.value })
          }
          className="bg-gray-800 text-white p-2 rounded"
        >
          {devices.map((device) => (
            <option key={device.deviceId} value={device.deviceId}>
              {device.label || "Camera"}
            </option>
          ))}
        </select>
      )}
    </div>
  );
}
