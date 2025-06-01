import { PropsWithChildren, useRef, useState } from "react";
import Webcam from "react-webcam";
import { IconButton } from "../ui";

export type OnTakedMediaProps = {
  type: "photo" | "video";
  url: string;
};

export type CameraActionsProps = {
  onSwitch(): void;
  //   onOpenGallery(): void;
  //   onTakedPhoto(url: string): void;
  onTakedMedia(props: OnTakedMediaProps): void;
  cameraRef: React.RefObject<Webcam | null>;
};

export function CameraActions(props: CameraActionsProps) {
  const getPhotoDimensions = () => {
    const video = props.cameraRef.current?.video;
    // console.log(video);

    const width = video?.videoWidth || 1080;
    const height = video?.videoHeight || 1920;
    // const dimensionsfullHd = { width: 1080, height: 1920 };
    const dimensionsfullHdDesktop = { width, height };
    // const dimensions4k = { width: 2160, height: 3840 };
    return dimensionsfullHdDesktop;
  };

  const takePhoto = () => {
    // const tracks = props.cameraRef.current?.stream?.getTracks();
    // if (!tracks?.length) return;
    // const track = tracks[0];
    // const capabilities = track.getCapabilities();
    const { width, height } = getPhotoDimensions();
    const screensShot = props.cameraRef.current?.getScreenshot({
      width,
      height,
    });
    if (!screensShot) return;
    props.onTakedMedia({ type: "photo", url: screensShot });
    // cameraPreviewRef.current?.show({ type: "photo", url: screensShot });
  };

  return (
    <section className="absolute bottom-0 left-0 right-0 flex items-center justify-evenly mb-14">
      <ImageUploader onTakedMedia={props.onTakedMedia} />
      <ActionButton onClick={takePhoto} />
      <IconButton size="lg" iconName="SwitchCamera" onClick={props.onSwitch} />
    </section>
  );
}

export type ActionButtonProps = {
  onClick(): void;
};

function ActionButton(props: ActionButtonProps) {
  const onClick = () => {
    props.onClick();
  };

  const onLongPress = () => {
    console.log("olaa");
  };

  return (
    <LongPressButton onClick={onClick} onLongPress={onLongPress}>
      <div className="h-[80px] w-[80px] rounded-full border-4 border-white shadow-2xl p-[2px]">
        <div className="bg-white w-full h-full rounded-full"></div>
      </div>
    </LongPressButton>
  );
}

export type LongPressButtonProps = PropsWithChildren & {
  onLongPress(): void;
  onClick(): void;
  delay?: number;
};

const LongPressButton = ({
  onLongPress,
  onClick,
  delay = 500,
  children,
}: LongPressButtonProps) => {
  const [pressing, setPressing] = useState(false);
  const timeoutRef = useRef<NodeJS.Timeout>(null);

  const handleMouseDown = () => {
    setPressing(true);
    timeoutRef.current = setTimeout(() => {
      onLongPress();
      setPressing(false);
    }, delay);
  };

  const handleMouseUp = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
    if (pressing) {
      onClick();
    }
    setPressing(false);
  };

  return (
    <button
      onMouseDown={handleMouseDown}
      onMouseUp={handleMouseUp}
      onMouseLeave={handleMouseUp}
      onTouchStart={handleMouseDown}
      onTouchEnd={handleMouseUp}
      className={pressing ? "opacity-50" : "opacity-100"}
    >
      {children}
    </button>
  );
};

export type ImageUploaderProps = {
  onTakedMedia(props: OnTakedMediaProps): void;
};

// import { FFmpeg } from "@ffmpeg/ffmpeg";
// import { fetchFile, toBlobURL } from "@ffmpeg/util";

// const ffmpeg = createFFmpeg({ log: true });

// const convertImageToFullHD = async (file) => {
// if (!ffmpeg.isLoaded()) await ffmpeg.load();

// ffmpeg.FS("writeFile", "input.png", await fetchFile(file));

// await ffmpeg.run("-i", "input.png", "-vf", "scale=1920:1080", "output.png");

// const data = ffmpeg.FS("readFile", "output.png");
// const blob = new Blob([data.buffer], { type: "image/png" });

// return URL.createObjectURL(blob);
// };

const ImageUploader = (props: ImageUploaderProps) => {
  const fileInputRef = useRef<HTMLInputElement>(null);
  // const [selectedFiles, setSelectedFiles] = useState<File[]>([]);

  // console.log("selectedFiles", selectedFiles);

  const handleButtonClick = () => {
    fileInputRef.current?.click();
  };

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0]; // Get the first (and only) file
    if (file) {
      // onFileSelected && onFileSelected(file);

      // Convert file to Data URL
      const reader = new FileReader();
      reader.onload = (e) =>
        props.onTakedMedia({
          type: getFileType(file),
          url: e.target?.result as string,
        });
      reader.readAsDataURL(file);
    }
  };

  const getFileType = (file: File) => {
    if (file.type.startsWith("image/")) return "photo";
    else if (file.type.startsWith("video/")) return "video";
    throw new Error("Unsupported file type");
  };

  return (
    <div className="flex flex-col items-center gap-2">
      {/* Hidden file input */}
      <input
        ref={fileInputRef}
        type="file"
        accept="image/*"
        //   multiple
        // capture="environment"
        onChange={handleFileChange}
        className="hidden"
      />

      <IconButton size="lg" iconName="Image" onClick={handleButtonClick} />
      {/* Icon button to open file selector */}
      {/* <button
        onClick={handleButtonClick}
        className="p-3 rounded-full bg-blue-500 text-white hover:bg-blue-600 transition"
      >
        Upload
      </button> */}
    </div>
  );
};
