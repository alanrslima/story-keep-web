import { Typography } from "./typography";

export type ItemTileProps = {
  title: string;
  description?: string;
  subDescription?: string;
  label: string;
  imageUrl?: string;
};

export function ItemTile(props: ItemTileProps) {
  return (
    <div>
      <div
        style={{
          backgroundImage: props.imageUrl
            ? `url(${props.imageUrl})`
            : "url('/noisy-gradient-1.png')",
        }}
        className="min-h-[420px] bg-cover rounded-md"
      ></div>
      <div className="flex flex-col gap-1 py-2">
        <Typography type="body-large-bold">{props.title}</Typography>
        <Typography textColor="text-content-secondary">
          {props.description}
        </Typography>
        <Typography textColor="text-content-secondary">
          {props.subDescription}
        </Typography>
        <Typography type="body-default-bold">{props.label}</Typography>
      </div>
    </div>
  );
}
