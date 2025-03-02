import { Button, Dialog, DialogProps, QRcode } from "@/components/ui";

export type MemoryQRCodeDialogProps = DialogProps;

export function MemoryQRCodeDialog(props: MemoryQRCodeDialogProps) {
  return (
    <Dialog {...props}>
      <div className="flex flex-col items-center gap-10">
        <QRcode value="www.google.com.br" />
        <div className="flex w-full gap-4">
          <Button leadingIcon="Save" title="Salvar" variant="outline" full />
          <Button leadingIcon="Share" title="Compartilhar" full />
        </div>
      </div>
    </Dialog>
  );
}
