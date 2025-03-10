"use client";

import { AnimatePresence, motion } from "framer-motion";
import {
  PropsWithChildren,
  RefObject,
  useEffect,
  useImperativeHandle,
  useState,
} from "react";
import { createPortal } from "react-dom";
import { IconButton } from "./icon-button";

export type ModalProps = PropsWithChildren & {
  isOpen?: boolean;
  ref?: RefObject<ModalHandleProps | null>;
};

export type ModalHandleProps = {
  show(): void;
  hide(): void;
};

export function Modal(props: ModalProps) {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    console.log("OLAAAA");
    if (props.isOpen !== undefined) {
      setIsOpen(props.isOpen);
    }
  }, [props.isOpen]);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  const show = () => {
    console.log("SHOWWWW");
    setIsOpen(true);
  };

  console.log("isOpen", isOpen);

  const hide = () => {
    console.log("HIDEEEE");
    setIsOpen(false);
  };

  useImperativeHandle(props.ref, () => ({
    show,
    hide,
  }));

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {createPortal(
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="fixed inset-0 flex bg-black bg-opacity-50"
            >
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 50 }}
                transition={{ duration: 0.3, ease: "easeOut" }}
                className="bg-white  rounded-2xl shadow-lg h-full w-full relative"
              >
                <div className="flex w-full h-full flex-col">
                  <div className="flex z-50 p-6 shadow-lg">
                    <IconButton onClick={hide} iconName="ArrowLeft" />
                  </div>
                  <div className="overflow-y-auto flex flex-col flex-1">
                    {props.children}
                  </div>
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
