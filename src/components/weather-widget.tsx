import { Typography } from "./ui";

export function WeatherWidget() {
  return (
    <div
      style={{
        backgroundImage:
          "url('https://images.pexels.com/photos/531767/pexels-photo-531767.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')",
      }}
      className="bg-cover rounded-md p-6 min-h-[220px]"
    >
      <div>
        <Typography type="display-medium" textColor="text-white" shadow>
          23º
        </Typography>
      </div>
      <Typography shadow textColor="text-white" type="body-large-bold">
        San Francisco, Dc
      </Typography>
    </div>
  );
}
