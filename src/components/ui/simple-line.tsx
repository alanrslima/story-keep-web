import { Typography } from "./typography";

export function SimpleLine() {
  return (
    <div className="flex gap-3 items-center">
      <div className="h-[52px] w-[52px] rounded-full bg-red-300"></div>
      <div className="flex flex-col">
        <Typography type="body-default-bold">John Doe</Typography>
        <Typography>johndoe@email.com</Typography>
      </div>
    </div>
  );
}
