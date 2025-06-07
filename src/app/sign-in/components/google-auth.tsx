"use client";

import { useAuth } from "@/hooks/use-auth";
import { CredentialResponse, GoogleLogin } from "@react-oauth/google";

export function GoogleAuth() {
  const { signInWithGoogle } = useAuth();

  const onSuccess = async (response: CredentialResponse) => {
    try {
      await signInWithGoogle({ idToken: response.credential! });
    } catch (error) {
      console.error("Erro ao enviar token para o backend:", error);
      alert("Falha na autenticação. Tente novamente.");
    }
  };

  const onFailure = () => {
    console.log("Login Google falhou:");
    alert("Erro no login Google.");
  };

  return (
    <GoogleLogin
      shape="pill"
      onSuccess={onSuccess}
      onError={onFailure}
      useOneTap
    />
  );
}
