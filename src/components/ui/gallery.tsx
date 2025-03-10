import Image from "next/image";
import { useState } from "react";
import { Button } from "./button";
import { IconButton } from "./icon-button";
import { AnimatePresence, motion } from "framer-motion";

export function Gallery() {
  const media = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

  const [item, setItem] = useState<string>();

  const onPressItem = () => {
    setItem("1");
  };

  const onClose = () => {
    setItem(undefined);
  };

  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-1">
      {media.map((item) => (
        <div
          key={item}
          onClick={onPressItem}
          className="relative aspect-square cursor-pointer"
        >
          <Image
            className="rounded-md"
            alt="image"
            fill
            src="https://images.pexels.com/photos/2240771/pexels-photo-2240771.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          />
        </div>
      ))}
      <GalleryCarousel item={item} onClose={onClose} />
    </div>
  );
}

function GalleryCarousel(props: { item?: string; onClose: () => void }) {
  "use client";

  console.log("props", props.item);

  return (
    <AnimatePresence>
      {props.item && (
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
              src="https://images.pexels.com/photos/2240771/pexels-photo-2240771.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            />
            <div className="flex absolute left-0 p-6 items-center top-0 bottom-0">
              <IconButton iconName="ArrowLeft" />
            </div>
            <div className="flex absolute right-0 p-6 items-center top-0 bottom-0">
              <IconButton iconName="ArrowRight" />
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
