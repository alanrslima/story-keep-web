import { Typography } from "./typography";

export function Alert() {
  return (
    <div className="bg-red-100 border-red-300 border-[1px] p-4 rounded-md">
      <Typography type="body-default-bold" as="h5">
        Nome do alerta
      </Typography>
      <Typography as="span">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam,
        impedit ad maiores aspernatur.
      </Typography>
    </div>
  );
}
