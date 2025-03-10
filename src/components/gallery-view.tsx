import { RefObject } from "react";
import { Modal, ModalHandleProps } from "./ui/modal";
import { Gallery } from "./ui/gallery";

export type GalleryViewProps = {
  ref?: RefObject<GalleryViewHandleProps | null>;
};

export type GalleryViewHandleProps = ModalHandleProps;

export function GalleryView(props: GalleryViewProps) {
  return (
    <Modal ref={props.ref}>
      <div className="flex py-6 flex-col mx-auto w-full max-w-[920px]">
        <Gallery />
      </div>
    </Modal>
  );
}
