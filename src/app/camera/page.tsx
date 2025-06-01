import { Camera } from "@/components/camera";
import GestureBlocker from "@/components/gesture-blocker";

export default function CameraPage() {
  return (
    <GestureBlocker>
      <Camera />
    </GestureBlocker>
  );
}
