"use client";
import React, { useState } from "react";

export type FormProps = {
  children(props: { isLoading: boolean }): React.ReactNode;
  onSubmit(e: React.FormEvent<HTMLFormElement>): void;
};

export function Form(props: FormProps) {
  const [isLoading, setIsLoading] = useState(false);

  function onSubmit(e: React.FormEvent<HTMLFormElement>) {}

  return <form onSubmit={onSubmit}>{props.children({ isLoading })}</form>;
}
