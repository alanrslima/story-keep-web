// components/Camera/CameraControls.tsx
"use client";

// import { CameraState } from "./types";

export default function CameraControls({
  stream,
  mediaType,
  setMediaType,
  startCamera,
  stopCamera,
  takePhoto,
  startRecording,
  stopRecording,
  hasFlash,
}: {
  stream: MediaStream | null;
  mediaType: "photo" | "video";
  setMediaType: (type: "photo" | "video") => void;
  startCamera: () => void;
  stopCamera: () => void;
  takePhoto: () => void;
  startRecording: () => void;
  stopRecording: () => void;
  hasFlash: boolean;
}) {
  return (
    <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-4">
      <button
        onClick={stream ? stopCamera : startCamera}
        className="p-3 bg-blue-500 rounded-full hover:bg-blue-600 text-white"
      >
        {stream ? "⏹️" : "▶️"}
      </button>

      {stream && (
        <>
          <select
            value={mediaType}
            onChange={(e) => setMediaType(e.target.value as "photo" | "video")}
            className="bg-gray-800 text-white p-2 rounded"
          >
            <option value="photo">Photo</option>
            <option value="video">Video</option>
          </select>

          {mediaType === "photo" ? (
            <button
              onClick={takePhoto}
              className="p-3 bg-red-500 rounded-full hover:bg-red-600 text-white"
            >
              📸
            </button>
          ) : (
            <>
              <button
                onClick={startRecording}
                className="p-3 bg-green-500 rounded-full hover:bg-green-600 text-white"
              >
                ⏺️
              </button>
              <button
                onClick={stopRecording}
                className="p-3 bg-purple-500 rounded-full hover:bg-purple-600 text-white"
              >
                ⏹️
              </button>
            </>
          )}

          {hasFlash && (
            <button className="p-3 bg-yellow-500 rounded-full">⚡</button>
          )}
        </>
      )}
    </div>
  );
}
