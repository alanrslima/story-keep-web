"use client";

import { ChangeEvent, useEffect, useRef } from "react";
import { Typography } from "./typography";
import classNames from "classnames";

type TextProps =
  | {
      maskType?: undefined;
      onChangeText?: (rawValue: string, maskedValue?: string) => void;
    }
  | {
      maskType: MaskType;
      onChangeText?: (rawValue: string, maskedValue: string) => void;
    };

export type TextAreaProps = React.DetailedHTMLProps<
  React.TextareaHTMLAttributes<HTMLTextAreaElement>,
  HTMLTextAreaElement
> &
  TextProps & {
    error?: string;
  };

type MaskType = "date" | "time";

function formatDate(value: string): string {
  const cleaned = value.replace(/\D/g, "");
  if (cleaned.length <= 2) {
    return cleaned;
  } else if (cleaned.length <= 4) {
    return `${cleaned.slice(0, 2)}/${cleaned.slice(2)}`;
  } else {
    return `${cleaned.slice(0, 2)}/${cleaned.slice(2, 4)}/${cleaned.slice(
      4,
      8
    )}`;
  }
}

function formatTime(value: string): string {
  // Remove all non-digits
  const cleaned = value.replace(/\D/g, "");

  // Apply mask
  if (cleaned.length <= 2) {
    return cleaned;
  } else {
    return `${cleaned.slice(0, 2)}:${cleaned.slice(2, 4)}`;
  }
}

const formatMapper: { [key in MaskType]: (value: string) => string } = {
  date: formatDate,
  time: formatTime,
};

export function TextArea({
  onChangeText,
  error,
  maskType,
  ...props
}: TextAreaProps) {
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  useEffect(() => {
    if (textareaRef.current) {
      textareaRef.current.style.height = "auto"; // Reset height
      textareaRef.current.style.height = `${textareaRef.current.scrollHeight}px`; // Set to scroll height
    }
  }, [props.value]);

  function onChange(e: ChangeEvent<HTMLTextAreaElement>) {
    const value = e.target.value;

    if (props.onChange) {
      props.onChange(e);
    }
    if (onChangeText) {
      if (maskType) {
        const maskedValue = formatMapper[maskType](value);
        onChangeText(value, maskedValue);
      } else {
        onChangeText(value, undefined);
      }
    }
  }

  const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      const textarea = e.target as HTMLTextAreaElement;
      textarea.form?.requestSubmit();
    }
  };

  return (
    <>
      <textarea
        {...props}
        ref={textareaRef}
        rows={1}
        onKeyDown={handleKeyDown}
        onChange={onChange}
        className={classNames(
          "bg-transparent text-3xl md:text-4xl font-montserrat outline-none font-bold overflow-hidden resize-none",
          { "text-red-600": !!error }
        )}
      />
      {error && (
        <Typography type="body-default-bold" textColor="text-red-600">
          {error}
        </Typography>
      )}
    </>
  );
}
