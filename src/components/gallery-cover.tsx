import { useRef } from "react";
import { GalleryView, GalleryViewHandleProps } from "./gallery-view";
import { Button, EmptyState, Icon, Typography } from "./ui";
import { Media } from "@/types/media";

export type GalleryCoverProps = {
  isEmpty?: boolean;
  media: Media[];
};

export function GalleryCover({ isEmpty, media }: GalleryCoverProps) {
  const galleryViewRef = useRef<GalleryViewHandleProps>(null);

  const onPress = () => {
    galleryViewRef.current?.show();
  };

  const lastItems = media.slice(0, 6);

  if (isEmpty)
    return (
      <div className="h-[500px] flex justify-center items-center ">
        <EmptyState
          title="Ainda não temos nenhum registro por aqui!"
          message="Compartilhe o qrcode com seus convidados para que este espaço será preenchido com lembranças incríveis =)"
          illustration={{ name: "camera", size: 250 }}
          footerComponent={<Button title="Abrir QRCode" variant="outline" />}
        />
      </div>
    );

  return (
    <div className="grid relative gap-2 grid-cols-2 lg:grid-cols-3 ">
      {lastItems.map((item) => (
        <div
          key={item.id}
          onClick={onPress}
          style={{ backgroundImage: `url(${item.url})` }}
          className="bg-cover h-96 bg-background-neutral cursor-pointer hover:opacity-80 transition-opacity"
        />
      ))}

      <button
        onClick={onPress}
        className="absolute gap-2 flex items-center right-4 bottom-4 bg-white py-2 px-4 shadow-md rounded-md"
      >
        <Icon color="black" name="GalleryVerticalEnd" />
        <Typography textColor="black" type="button-small">
          Mostrar todos os registros
        </Typography>
      </button>
      <GalleryView media={media} ref={galleryViewRef} />
    </div>
  );
}
