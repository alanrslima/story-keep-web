import { Button } from "./button";
import { Illustration } from "./illustration";
import { Typography } from "./typography";

export function EmptyState() {
  return (
    <div className="flex flex-col flex-1 justify-center items-center">
      <div className="flex flex-col max-w-[420px] items-center gap-1">
        <Illustration name="moment-to-remeber" />
        <Typography center type="body-large-bold">
          Crie um baú de memórias
        </Typography>
        <Typography center>
          Começe a receber memórias compartilhadas de quem você mais ama
        </Typography>

        <div className="mt-6">
          <Button title="Crie um baú" leadingIcon="Plus" />
        </div>
      </div>
    </div>
  );
}
