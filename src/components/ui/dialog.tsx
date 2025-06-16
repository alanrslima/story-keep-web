"use client";

import { AnimatePresence, motion } from "framer-motion";
import { PropsWithChildren } from "react";
import { IconButton } from "./icon-button";
import { createPortal } from "react-dom";

export type DialogProps = PropsWithChildren & {
  isOpen: boolean;
  onClose(): void;
};

export function Dialog(props: DialogProps) {
  return (
    <AnimatePresence>
      {props.isOpen && (
        <>
          {createPortal(
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="fixed z-50 inset-0 flex items-center justify-center bg-black bg-opacity-50"
            >
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 50 }}
                transition={{ duration: 0.3, ease: "easeOut" }}
                className="bg-white p-6 rounded-2xl shadow-lg max-w-lg w-full relative"
              >
                <div className="flex flex-col">
                  <div className="justify-end flex mb-4">
                    <IconButton onClick={props.onClose} iconName="X" />
                  </div>
                  {props.children}
                </div>
              </motion.div>
            </motion.div>,
            document.body
          )}
        </>
      )}
    </AnimatePresence>
  );
}
