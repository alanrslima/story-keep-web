import { SocialMediaShare } from "@/components";
import { Button, Dialog, DialogProps, QRcode } from "@/components/ui";

export type MemoryQRCodeDialogProps = DialogProps & {
  url: string;
};

export function MemoryQRCodeDialog(props: MemoryQRCodeDialogProps) {
  async function copyToClipboard() {
    await navigator.clipboard.writeText(props.url);
  }

  return (
    <Dialog {...props}>
      <div className="flex flex-col items-center gap-10">
        <QRcode value={props.url} />
        <div className="flex w-full gap-4">
          <Button leadingIcon="Save" title="Salvar" variant="outline" full />
          <Button leadingIcon="Share" title="Compartilhar" full />
        </div>
      </div>
      <button onClick={copyToClipboard}>Copiar link</button>
      <SocialMediaShare />
    </Dialog>
  );
}
