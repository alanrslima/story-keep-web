"use client";
import { ReactNode, useState } from "react";
import { Popover as TinyPopover } from "react-tiny-popover";
import { AnimatePresence, motion } from "framer-motion";

export type PopoverProps = {
  trigger: (props: { isOpen: boolean }) => ReactNode;
  content: (props: { requestClose(): void }) => ReactNode;
};

export function Popover(props: PopoverProps) {
  const [isOpen, setIsOpen] = useState(false);

  function close() {
    setIsOpen(false);
  }

  return (
    <AnimatePresence>
      <TinyPopover
        isOpen={isOpen}
        positions={["bottom"]}
        padding={10}
        onClickOutside={() => setIsOpen(false)}
        content={
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
          >
            {props.content({ requestClose: close })}
          </motion.div>
        }
      >
        {}
        <button
          type="button"
          className="flex flex-col"
          onClick={() => setIsOpen(!isOpen)}
        >
          {props.trigger({ isOpen })}
        </button>
      </TinyPopover>
    </AnimatePresence>
  );
}
