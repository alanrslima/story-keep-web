"use client";
import { Alert, Button, Form, TextInput } from "@/components/ui";
import { useAuth } from "@/hooks/use-auth";
import { useCallback } from "react";

export function SignInForm() {
  const { signInWithEmailAndPassword } = useAuth();

  const onSubmit = useCallback(
    async (data: { email: string; password: string }) => {
      await signInWithEmailAndPassword(data);
    },
    [signInWithEmailAndPassword]
  );

  return (
    <Form onSubmit={onSubmit}>
      {({ isLoading, error }) => (
        <div className="flex flex-col gap-4">
          <TextInput required label="E-mail" name="email" type="email" />
          <TextInput required label="Senha" name="password" type="password" />
          {error && (
            <Alert
              title={error.title}
              type="negative"
              message={error.description}
            />
          )}
          <div className="flex flex-col mt-5">
            <Button type="submit" isLoading={isLoading} title="Entrar" />
          </div>
        </div>
      )}
    </Form>
  );
}
