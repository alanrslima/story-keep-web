"use client";
import { Alert, Button, Form, TextInput } from "@/components/ui";
import { useAuth } from "@/hooks/use-auth";
import { useCallback } from "react";

export function SignUpForm() {
  const { signUp } = useAuth();

  const onSubmit = useCallback(signUp, [signUp]);

  return (
    <Form onSubmit={onSubmit}>
      {({ isLoading, error }) => (
        <div className="flex flex-col gap-4">
          <TextInput required label="Nome" name="name" type="text" />
          <TextInput required label="E-mail" name="email" type="email" />
          <TextInput
            label="Senha"
            required
            name="password"
            placeholder="6+ caracteres"
            type="password"
          />
          {error && (
            <Alert title={error.title} description={error.description} />
          )}
          <div className="flex flex-col mt-5">
            <Button isLoading={isLoading} type="submit" title="Cadastrar" />
          </div>
        </div>
      )}
    </Form>
  );
}
