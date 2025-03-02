import { Typography } from "./typography";

export function ItemTile() {
  return (
    <div>
      <div
        style={{ backgroundImage: "url('/noisy-gradient-1.png')" }}
        className="min-h-[280px] bg-cover rounded-md"
      ></div>
      <div className="flex flex-col gap-1 py-2">
        <Typography type="body-large-bold">
          Casamento de João e Maria
        </Typography>
        <Typography textColor="text-content-secondary">
          20 - 22 de abr.
        </Typography>
        <Typography type="body-default-bold">356 memórias</Typography>
      </div>
    </div>
  );
}
