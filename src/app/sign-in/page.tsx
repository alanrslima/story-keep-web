import { Divider, Typography } from "@/components/ui";
import Link from "next/link";
import { SignInForm } from "./components/sign-in-form";
import { GoogleAuth } from "./components/google-auth";

export default function SignInPage() {
  return (
    <div className="h-dvh w-dvw">
      <div className="mx-auto max-w-[620px] gap-10 flex px-5 flex-col justify-center h-full">
        <Typography type="title-screen">Acesse a StoryKeep</Typography>
        <div className="flex flex-col gap-3">
          <GoogleAuth />
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
