"use client";
import { Button, TextInput } from "@/components/ui";
import { AuthService } from "@/services/auth-service";
import { FormEvent, useRef } from "react";

export function SignUpForm() {
  const formRef = useRef<HTMLFormElement>(null);

  const onSubmit = async (evt: FormEvent<HTMLFormElement>) => {
    evt.preventDefault();
    if (formRef.current) {
      const formData = new FormData(formRef.current);
      const body = {
        name: String(formData.get("name")),
        email: String(formData.get("email")),
        password: String(formData.get("password")),
      };
      const authService = new AuthService();
      await authService.signUp(body);
    }
  };

  return (
    <form ref={formRef} onSubmit={onSubmit} className="flex flex-col gap-4">
      <TextInput label="Nome" name="name" type="text" />
      <TextInput label="E-mail" name="email" type="email" />
      <TextInput
        label="Senha"
        name="password"
        placeholder="6+ caracteres"
        type="password"
      />
      <Button type="submit" title="Entrar" />
    </form>
  );
}
