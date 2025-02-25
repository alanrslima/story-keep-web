"use client";

import { useEffect, useRef } from "react";

export type TextAreaProps = React.DetailedHTMLProps<
  React.TextareaHTMLAttributes<HTMLTextAreaElement>,
  HTMLTextAreaElement
>;

export function TextArea(props: TextAreaProps) {
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  useEffect(() => {
    if (textareaRef.current) {
      textareaRef.current.style.height = "auto"; // Reset height
      textareaRef.current.style.height = `${textareaRef.current.scrollHeight}px`; // Set to scroll height
    }
  }, [props.value]);

  return (
    <textarea
      ref={textareaRef}
      placeholder="Digite aqui"
      rows={1}
      {...props}
      className="bg-transparent text-3xl md:text-4xl font-montserrat outline-none font-bold overflow-hidden resize-none"
    />
  );
}
