// components/types.ts
export interface MediaItem {
  url: string;
  type: "photo" | "video";
  timestamp: string;
}

export interface CameraState {
  facingMode: "user" | "environment";
  zoom: number;
  flash: boolean;
  resolution: string;
  deviceId?: string;
}
