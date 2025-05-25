import { RefObject } from "react";
import { Modal, ModalHandleProps } from "./ui/modal";
import { Gallery } from "./ui/gallery";
import { Media } from "@/types/media";

export type GalleryViewProps = {
  ref?: RefObject<GalleryViewHandleProps | null>;
  media: Media[];
};

export type GalleryViewHandleProps = ModalHandleProps;

export function GalleryView(props: GalleryViewProps) {
  return (
    <Modal ref={props.ref}>
      <div className="flex py-6 flex-col mx-auto w-full max-w-[920px]">
        <Gallery media={props.media} />
      </div>
    </Modal>
  );
}
