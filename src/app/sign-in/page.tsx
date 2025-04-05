import { Button, Divider, Typography } from "@/components/ui";
import Link from "next/link";
import { SignInForm } from "./components/sign-in-form";

export default function SignInPage() {
  return (
    <div className="h-dvh w-dvw">
      <div className="mx-auto max-w-[620px] gap-10 flex px-5 flex-col justify-center h-full">
        <Typography type="title-screen">Acesse a StoryKeep</Typography>
        <div className="flex flex-col gap-3">
          <Button
            size="xl"
            leadingIcon="GlobeLock"
            title="Continue com o Google"
            variant="outline"
          />
          <Button
            leadingIcon="Facebook"
            size="xl"
            title="Continue com o Facebook"
            variant="outline"
          />
        </div>
        <Divider />
        <SignInForm />
        <Typography type="body-default" center>
          Não possui uma conta?{" "}
          <Link className="underline" href={{ pathname: "sign-up" }}>
            Cadastre-se
          </Link>
        </Typography>
      </div>
    </div>
  );
}
