"use client";
import { Alert, Button, TextInput } from "@/components/ui";
import { AuthService } from "@/services/auth-service";
import { FormEvent, useRef, useState } from "react";

export function SignUpForm() {
  const formRef = useRef<HTMLFormElement>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string>();

  const onSubmit = async (evt: FormEvent<HTMLFormElement>) => {
    evt.preventDefault();
    if (formRef.current) {
      setIsLoading(true);
      const formData = new FormData(formRef.current);
      const body = {
        name: String(formData.get("name")),
        email: String(formData.get("email")),
        password: String(formData.get("password")),
      };
      const authService = new AuthService();
      authService
        .signUp(body)
        .catch(() => setError("Falha ao realizar cadastro"))
        .finally(() => setIsLoading(false));
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
      {error && <Alert />}
      <div className="flex flex-col mt-5">
        <Button isLoading={isLoading} type="submit" title="Cadastrar" />
      </div>
    </form>
  );
}
