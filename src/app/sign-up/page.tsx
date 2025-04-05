import { Button, Divider, Typography } from "@/components/ui";
import Link from "next/link";
import { SignUpForm } from "./components/sign-up-form";

export default function SignUpPage() {
  return (
    <div className="h-dvh w-dvw">
      <div className="mx-auto max-w-[620px] gap-10 flex px-5 flex-col justify-center h-full">
        <Typography type="title-screen">Cadastre-se na StoryKeep</Typography>
        <div className="flex flex-col gap-3">
          <Button
            size="xl"
            title="Cadastre-se com o Google"
            variant="outline"
          />
          <Button
            size="xl"
            title="Cadastre-se com o Facebook"
            variant="outline"
          />
        </div>
        <Divider />
        <SignUpForm />
        <div className="flex flex-col gap-4">
          <Typography textColor="text-content-secondary" center type="caption">
            Criado uma conta você concorda com os nossos{" "}
            <Link className="underline" href={{ pathname: "/" }}>
              Termos de Uso
            </Link>{" "}
            e{" "}
            <Link className="underline" href={{ pathname: "/" }}>
              Privacidade
            </Link>
          </Typography>
          <Typography type="body-default" center>
            Já possui uma conta?{" "}
            <Link className="underline" href={{ pathname: "sign-in" }}>
              Entre agora
            </Link>
          </Typography>
        </div>
      </div>
    </div>
  );
}
