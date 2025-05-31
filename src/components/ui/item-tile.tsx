import { Badge } from "./badge";
import { Typography } from "./typography";

export type ItemTileProps = {
  title: string;
  description?: string;
  subDescription?: string;
  label: string;
  imageUrl?: string;
  badgeText?: string;
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
        className="min-h-[420px] relative bg-background-neutral bg-cover rounded-md"
      >
        {props.badgeText && (
          <div className="absolute shadow-lg left-4 top-4">
            <Badge text={props.badgeText} />
          </div>
        )}
      </div>
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
