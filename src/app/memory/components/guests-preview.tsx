import { Button, Headline, SimpleLine } from "@/components/ui";

export function GuestsPreview() {
  return (
    <div>
      <Headline title="Lista de convidados" />
      <div className="grid gap-4 grid-cols-2 lg:grid-cols-3 mb-6">
        <SimpleLine />
        <SimpleLine />
        <SimpleLine />
        <SimpleLine />
        <SimpleLine />
        <SimpleLine />
        <SimpleLine />
        <SimpleLine />
        <SimpleLine />
        <SimpleLine />
        <SimpleLine />
        <SimpleLine />
      </div>
      <Button title="Ver todos os convidados" variant="outline" />
    </div>
  );
}
