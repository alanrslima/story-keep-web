import { Typography } from "./ui";

export function LocationWidget() {
  return (
    <div>
      <div
        style={{
          backgroundImage:
            "url('https://www.cnnbrasil.com.br/wp-content/uploads/sites/12/2024/02/google-maps-e1707316052388.png?w=1200&h=900&crop=1')",
        }}
        className="bg-cover rounded-tl-md rounded-tr-md p-6 min-h-[220px]"
      />
      <div className="rounded-md p-5 flex-col flex gap-1 border-l-[1px] border-b-[1px] border-r-[1px] border-border-neutral">
        <Typography type="body-large-bold">
          Praça da Independência - Jardim Balneario Meia Ponte
        </Typography>
        <Typography>Goiânia - GO, 74590-320</Typography>
      </div>
    </div>
  );
}
