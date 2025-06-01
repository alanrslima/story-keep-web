import { Button, Typography } from "../ui";
import { Illustration } from "../ui/illustration";
import { Spinner } from "../ui/spinner";

export function CameraUnsupported() {
  return (
    <div className="bg-background flex-col h-dvh w-dvw flex gap-4 justify-center items-center p-7">
      <Illustration name="question" />
      <Typography center type="title-section" textColor="content-primary">
        📷 Eita! Cadê a câmera?
      </Typography>
      <Typography center textColor="content-secondary">
        A gente tentou, mas não rolou... Seu dispositivo não deixou a gente usar
        a câmera. Dá uma olhadinha nas permissões.
      </Typography>
    </div>
  );
}

export function CameraDenied() {
  return (
    <div className="bg-background flex-col h-dvh w-dvw flex gap-4 justify-center items-center p-7">
      <Illustration name="mobile-encryption" />
      <Typography center type="title-section" textColor="content-primary">
        🙈 Câmera bloqueada!
      </Typography>
      <Typography center textColor="content-secondary">
        Parece que você não deu permissão pra usar a câmera. Se mudar de ideia,
        é só atualizar a página e permitir o acesso.
      </Typography>
    </div>
  );
}

export function CameraPrompt(props: { requestCamera: () => Promise<void> }) {
  return (
    <div className="bg-background flex-col h-dvh w-dvw flex gap-4 justify-center items-center p-7">
      <Illustration name="camera" />
      <Typography center type="title-section" textColor="content-primary">
        📸 Vamos capturar momentos juntos?
      </Typography>
      <Typography center textColor="content-secondary">
        Precisamos da sua permissão pra usar a câmera e registrar memórias
        incríveis! Prometemos usar com carinho — só pra criar álbuns
        compartilhados cheios de boas lembranças. 🧡
      </Typography>
      <Button title="Liberar permissão" onClick={props.requestCamera} />
    </div>
  );
}

export function CameraLoading() {
  return (
    <div className="bg-background flex-col h-dvh w-dvw flex justify-center items-center p-7">
      <Spinner />
    </div>
  );
}
