import { Button } from "./button";
import { Icon } from "./icon";
import { Typography } from "./typography";

export type MemoryCardProps = {
  title?: string;
  location?: string;
  date?: string;
};

export function MemoryCard({ title, date, location }: MemoryCardProps) {
  return (
    <div className="bg-[url('/noisy-gradient-1.png')] bg-cover w-[350px] overflow-hidden rounded-md h-[530px] shadow-2xl shadow-neutral-500 flex flex-col">
      <div className="p-6 justify-end flex">
        <Button
          variant="tertiary"
          leadingIcon="ImageUp"
          title="Incluir imagem"
        />
      </div>
      <div className="flex flex-1 flex-col bg-gradient-to-t from-neutral-900 to-transparent p-6 justify-end gap-4">
        {title && (
          <Typography type="title-screen" textColor="text-white">
            {title}
          </Typography>
        )}
        {(date || location) && (
          <div className="flex flex-col gap-2">
            {date && (
              <Typography type="body-default-bold" textColor="text-white">
                {date}
              </Typography>
            )}
            {location && (
              <div className="flex gap-2">
                <Icon name="MapPin" size={20} color="white" />
                <Typography type="body-default" textColor="text-white">
                  {location}
                </Typography>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
