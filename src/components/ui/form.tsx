/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import React, { useRef, useState } from "react";

export type FormProps = {
  children(props: {
    isLoading: boolean;
    error?: { title: string; description: string };
  }): React.ReactNode;
  onSubmit(
    data: Record<string, string>,
    evt: React.FormEvent<HTMLFormElement>
  ): Promise<void>;
};

export function Form(props: FormProps) {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<{ title: string; description: string }>();
  const formRef = useRef<HTMLFormElement>(null);

  function errorHandler(err: any) {
    if (err?.response?.data?.errors) {
      const [errorData] = err?.response?.data?.errors;
      setError({ title: errorData.message, description: errorData.desciption });
    } else {
      setError({ title: "Ops", description: err.message });
    }
  }

  async function onSubmit(evt: React.FormEvent<HTMLFormElement>) {
    try {
      evt.preventDefault();
      setIsLoading(true);
      if (formRef.current) {
        const formData = new FormData(formRef.current);
        const data: Record<string, string> = {};
        for (const [key, value] of formData.entries()) {
          data[key] = value.toString();
        }
        await props.onSubmit(data, evt);
      }
    } catch (error) {
      errorHandler(error);
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <form ref={formRef} onSubmit={onSubmit}>
      {props.children({ isLoading, error })}
    </form>
  );
}
