import { Typography } from "./typography";

export type SimpleCardProps = {
  title: string;
}

export function SimpleCard(props: SimpleCardProps) {
  return (
    <div className="min-w-[220px] rounded-md overflow-hidden w-full">
      <div
        style={{
          backgroundImage:
            "url('https://images.pexels.com/photos/30720435/pexels-photo-30720435/free-photo-of-scenic-beachfront-in-monterosso-al-mare-italy.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')",
        }}
        className="bg-cover min-h-[220px]"
      ></div>
      <div className="rounded-md p-5 border-l-[1px] border-b-[1px] border-r-[1px] border-border-neutral">
        <Typography type="body-default-bold">
          {props.title}
        </Typography>
      </div>
    </div>
  );
}
