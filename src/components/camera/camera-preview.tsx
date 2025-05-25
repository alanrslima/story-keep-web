import { useImperativeHandle, useState } from "react";
// import { MediaService } from "../../services/media-service";

type CameraPreviewProps = {
  // onPressRetake(): void;
  // onPressDownload(): void;
  ref: React.Ref<CameraPreviewHandle>;
};

type ShowProps = {
  type: "photo" | "video";
  url: string;
};

export type CameraPreviewHandle = {
  show: (params: ShowProps) => void;
  hide: () => void;
};

function dataURLtoFile(dataUrl: string): File {
  console.time("executionTime"); // Start measuring time

  const arr = dataUrl.split(",");
  const mimeMatch = arr[0].match(/:(.*?);/);
  const mime = mimeMatch ? mimeMatch[1] : "application/octet-stream"; // Default to binary file if no mime type
  const bstr = atob(arr[1]); // Decode Base64
  let n = bstr.length;
  const u8arr = new Uint8Array(n);

  while (n--) {
    u8arr[n] = bstr.charCodeAt(n);
  }
  const randomFilename = `file_${Math.random().toString(36).substring(2, 15)}.${
    mime.split("/")[1]
  }`;

  console.timeEnd("executionTime"); // End measuring time and print it
  return new File([u8arr], randomFilename, { type: mime });
}

async function dataURLtoFileWithFetch(dataUrl: string): Promise<File> {
  console.time("executionTime"); // Start measuring time

  const response = await fetch(dataUrl); // Fetch the Data URL
  const blob = await response.blob(); // Convert to Blob
  // Get the MIME type (assuming Data URL starts with 'data:image/...')
  const mime =
    dataUrl.split(",")[0].match(/:(.*?);/)?.[1] || "application/octet-stream";
  // Create and return the File object
  const randomFilename = `file_${Math.random().toString(36).substring(2, 15)}.${
    mime.split("/")[1]
  }`;

  console.timeEnd("executionTime"); // End measuring time and print it
  return new File([blob], randomFilename, { type: mime });
}

export function CameraPreview(props: CameraPreviewProps) {
  const [visible, setVisible] = useState(false);
  const [type, setType] = useState<"photo" | "video">();
  const [url, setUrl] = useState<string>();

  const show = (params: ShowProps) => {
    setVisible(true);
    setType(params.type);
    setUrl(params.url);
  };

  const hide = () => {
    setVisible(false);
  };

  console.log(url);

  const onPressSend = async () => {
    if (!url) return;
    const file = await dataURLtoFileWithFetch(url);
    // const mediaService = new MediaService();
    // mediaService.sendMedia(file).then(console.info).catch(console.error);
  };

  useImperativeHandle(props.ref, () => ({ show, hide }), []);

  if (!visible) return <></>;

  return (
    <div className="bg-black absolute top-0 left-0 right-0 bottom-0 z-50">
      {type === "photo" ? (
        <img src={url} alt="Preview" className="w-full h-full object-contain" />
      ) : (
        <video
          //   ref={videoPreviewRef}
          src={url}
          className="flex flex-1 object-contain"
          controls
          autoPlay
          loop
        />
      )}

      <div className="absolute bg-blue-200 top-0 left-0">
        <button onClick={hide} className="control-button">
          Close
        </button>
        <button onClick={onPressSend}>Enviar</button>
        {/* <button onClick={props.onPressDownload} className="control-button">
          Download
        </button> */}
      </div>
    </div>
  );
}
