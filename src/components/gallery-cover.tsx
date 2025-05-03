import { useRef } from "react";
import { GalleryView, GalleryViewHandleProps } from "./gallery-view";
import { EmptyState, Icon, Typography } from "./ui";

export type GalleryCoverProps = {
  isEmpty?: boolean;
};

export function GalleryCover({ isEmpty }: GalleryCoverProps) {
  const galleryViewRef = useRef<GalleryViewHandleProps>(null);

  const onPress = () => {
    galleryViewRef.current?.show();
  };

  if (isEmpty)
    return (
      <div className="h-[420px] flex justify-center items-center bg-background-elevated">
        <EmptyState
          title="Ainda não temos nenhum registro por aqui!"
          message="Este espaço será preenchido com lembranças incríveis =)"
          illustration={{ name: "camera", size: 250 }}
        />
      </div>
    );

  return (
    <div className="grid relative gap-2 grid-cols-4 grid-rows-2 h-[420px]">
      <div
        style={{
          backgroundImage:
            "url('https://images.pexels.com/photos/30720435/pexels-photo-30720435/free-photo-of-scenic-beachfront-in-monterosso-al-mare-italy.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')",
        }}
        className="col-span-2 bg-cover cursor-pointer hover:opacity-80 transition-opacity"
      ></div>
      <div
        style={{
          backgroundImage:
            "url('https://images.pexels.com/photos/30459667/pexels-photo-30459667/free-photo-of-historic-castle-landscape-in-albania-at-sunset.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')",
        }}
        className="col-span-2 bg-cover cursor-pointer hover:opacity-80 transition-opacity"
      ></div>
      <div
        style={{
          backgroundImage:
            "url('https://images.pexels.com/photos/30862653/pexels-photo-30862653/free-photo-of-charming-village-scene-in-lopud-croatia.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')",
        }}
        className="col-span-1 bg-cover cursor-pointer hover:opacity-80 transition-opacity"
      />
      <div className="col-span-1 bg-red-200 cursor-pointer hover:opacity-80 transition-opacity" />
      <div className="col-span-1 bg-red-300 cursor-pointer hover:opacity-80 transition-opacity" />
      <div className="col-span-1 bg-red-400 cursor-pointer hover:opacity-80 transition-opacity" />

      <button
        onClick={onPress}
        className="absolute gap-2 flex items-center right-4 bottom-4 bg-white py-2 px-4 shadow-md rounded-md"
      >
        <Icon name="GalleryVerticalEnd" />
        <Typography type="button-small">Mostrar todos os registros</Typography>
      </button>
      <GalleryView ref={galleryViewRef} />
    </div>
  );
}
