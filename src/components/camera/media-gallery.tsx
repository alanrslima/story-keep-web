// components/Camera/MediaGallery.tsx
"use client";

import { useState } from "react";
import { MediaItem } from "./types";
import Image from "next/image";

export default function MediaGallery({
  mediaList,
  setMediaList,
}: {
  mediaList: MediaItem[];
  setMediaList: (list: MediaItem[]) => void;
}) {
  const [selectedMedia, setSelectedMedia] = useState<MediaItem | null>(null);

  const deleteMedia = (timestamp: string) => {
    setMediaList(mediaList.filter((media) => media.timestamp !== timestamp));
    URL.revokeObjectURL(selectedMedia?.url || "");
    setSelectedMedia(null);
  };

  return (
    <div className="mt-8">
      <h2 className="text-xl font-bold mb-4">Gallery</h2>

      <div className="grid grid-cols-4 gap-4">
        {mediaList.map((media) => (
          <div
            key={media.timestamp}
            className="relative aspect-square cursor-pointer"
            onClick={() => setSelectedMedia(media)}
          >
            {media.type === "photo" ? (
              <Image
                src={media.url}
                alt="Captured"
                className="w-full h-full object-cover rounded"
              />
            ) : (
              <video
                src={media.url}
                className="w-full h-full object-cover rounded"
              />
            )}
          </div>
        ))}
      </div>

      {selectedMedia && (
        <div className="fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center p-4">
          <div className="relative max-w-4xl w-full">
            <button
              onClick={() => setSelectedMedia(null)}
              className="absolute top-4 right-4 text-white text-2xl z-10"
            >
              ✖
            </button>

            <button
              onClick={() => deleteMedia(selectedMedia.timestamp)}
              className="absolute top-4 left-4 text-red-500"
            >
              Delete
            </button>

            {selectedMedia.type === "photo" ? (
              <Image
                src={selectedMedia.url}
                alt="Full size"
                className="max-h-[90vh] mx-auto"
              />
            ) : (
              <video
                src={selectedMedia.url}
                controls
                className="max-h-[90vh] mx-auto"
              />
            )}
          </div>
        </div>
      )}
    </div>
  );
}
