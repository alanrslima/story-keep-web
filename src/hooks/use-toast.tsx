"use client";

import { useState } from "react";

type ToastType = "success" | "error" | "info";

export const useToast = () => {
  const [toast, setToast] = useState<{
    message: string;
    type: ToastType;
    visible: boolean;
  }>({ message: "", type: "info", visible: false });

  const showToast = (message: string, type: ToastType = "info") => {
    setToast({ message, type, visible: true });
    setTimeout(() => {
      setToast((prev) => ({ ...prev, visible: false }));
    }, 3000);
  };

  const Toast = () =>
    toast.visible && (
      <div
        className={`fixed bottom-4 right-4 p-4 rounded ${
          toast.type === "error"
            ? "bg-red-500"
            : toast.type === "success"
            ? "bg-green-500"
            : "bg-blue-500"
        } text-white`}
      >
        {toast.message}
      </div>
    );

  return { showToast, Toast };
};
