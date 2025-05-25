import Image from "next/image";
import { useCallback, useEffect, useState } from "react";
import { Button } from "./button";
import { IconButton } from "./icon-button";
import { AnimatePresence, motion } from "framer-motion";
import { Media } from "@/types/media";
import { Typography } from "./typography";

export type GalleryProps = {
  media: Media[];
};

export function Gallery({ media }: GalleryProps) {
  const [index, setIndex] = useState<number>();

  const onPressItem = (i: number) => {
    setIndex(i);
  };

  const onClose = () => {
    setIndex(undefined);
  };

  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-1">
      {media.map((item, i) => (
        <div
          key={item.id}
          onClick={() => onPressItem(i)}
          className="relative aspect-square cursor-pointer"
        >
          <Image
            className="rounded-md"
            alt="image"
            layout="fill"
            objectFit="cover"
            src={item.url}
          />
        </div>
      ))}
      {index !== undefined && (
        <GalleryCarousel
          index={index}
          media={media}
          onChangeIndex={setIndex}
          onClose={onClose}
        />
      )}
    </div>
  );
}

function GalleryCarousel(props: {
  index: number;
  onClose: () => void;
  media: Media[];
  onChangeIndex(index: number): void;
}) {
  "use client";

  const onPressNext = useCallback(() => {
    if (props.media.length > props.index + 1) {
      props.onChangeIndex(props.index + 1);
    }
  }, [props]);

  const onPressPrevious = useCallback(() => {
    if (props.index > 0) {
      props.onChangeIndex(props.index - 1);
    }
  }, [props]);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "ArrowLeft") {
        onPressPrevious();
      } else if (event.key === "ArrowRight") {
        onPressNext();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [onPressPrevious, onPressNext]);

  const item = props.media[props.index];

  return (
    <AnimatePresence>
      {item && (
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 50 }}
          transition={{ duration: 0.3, ease: "easeOut" }}
          className="fixed flex flex-col inset-0 z-50 bg-black"
        >
          <div className="p-6">
            <Button
              title="Fechar"
              onClick={props.onClose}
              variant="tertiary"
              leadingIcon="X"
            />
          </div>
          <div className="flex relative aspect-auto flex-1 justify-center items-center">
            <Image
              className="rounded-md object-contain"
              alt="image"
              fill
              src={item.url}
            />
            <div className="flex absolute left-0 p-6 items-center top-0 bottom-0">
              <IconButton iconName="ArrowLeft" onClick={onPressPrevious} />
            </div>
            <div className="flex absolute right-0 p-6 items-center top-0 bottom-0">
              <IconButton iconName="ArrowRight" onClick={onPressNext} />
            </div>
          </div>
          <div className="flex absolute bottom-0 left-0 p-6 right-0 justify-center items-center">
            <div className="flex px-4 py-2 rounded-xl bg-black">
              <Typography textColor="text-white" type="body-default-bold">
                {props.index + 1}/{props.media.length}
              </Typography>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
