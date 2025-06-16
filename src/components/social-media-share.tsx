import { Icon, IconNames, TextInput, Typography } from "./ui";

export function SocialMediaShare() {
  return (
    <div className="flex gap-3">
      <TextInput name="link" />
      <FileShare />
      <WhatsAppShare />
      <EmailShare />
    </div>
  );
}

function ItemShare(params: { label: string; iconName: IconNames }) {
  return (
    <div className="flex flex-col items-center gap-2">
      <div className="h-[60px] w-[60px] rounded-full bg-green-600 justify-center items-center flex">
        <Icon name={params.iconName} color="white" />
      </div>
      <Typography type="caption">{params.label}</Typography>
    </div>
  );
}

export const WhatsAppShare = () => {
  const message = "Check this out!";
  const url = "https://example.com";
  const fullMessage = `${message} ${url}`;
  const encodedMessage = encodeURIComponent(fullMessage);
  const shareUrl = `https://wa.me/?text=${encodedMessage}`;

  return (
    <a href={shareUrl} target="_blank" rel="noopener noreferrer">
      <ItemShare iconName="Phone" label="WhatsApp" />
    </a>
  );
};

const EmailShare = () => {
  const subject = "Check this out!";
  const body =
    "Hey, I found something interesting for you:\n\nhttps://example.com";

  const emailUrl = `mailto:?subject=${encodeURIComponent(
    subject
  )}&body=${encodeURIComponent(body)}`;

  return (
    <a href={emailUrl}>
      <ItemShare iconName="Mail" label="E-mail" />
    </a>
  );
};

const FileShare = () => {
  // const canvasRef = useRef<HTMLCanvasElement | null>(null);

  // const handleDownload = () => {
  //   const canvas = canvasRef.current;
  //   if (!canvas) return;

  //   const url = canvas.toDataURL('image/png');
  //   const a = document.createElement('a');
  //   a.href = url;
  //   a.download = 'qrcode.png';
  //   a.click();
  // };

  return (
    // <a href={emailUrl}>
    <ItemShare iconName="Save" label="Salvar" />
    // </a>
  );
};
