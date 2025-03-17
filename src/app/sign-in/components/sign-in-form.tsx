"use client";
import { Button, TextInput } from "@/components/ui";
import { FormEvent, useRef } from "react";

export function SignInForm() {
  const formRef = useRef<HTMLFormElement>(null);

  const onSubmit = (evt: FormEvent<HTMLFormElement>) => {
    evt.preventDefault();
    if (formRef.current) {
      const formData = new FormData(formRef.current);
      console.log("Email:", formData.get("email"));
      console.log("Password:", formData.get("password"));
    }
  };

  return (
    <form ref={formRef} onSubmit={onSubmit} className="flex flex-col gap-4">
      <TextInput label="E-mail" name="email" type="email" />
      <TextInput label="Senha" name="password" type="password" />
      <Button type="submit" title="Entrar" />
    </form>
  );
}
