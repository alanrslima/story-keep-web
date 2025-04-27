import { PropsWithChildren } from "react";
import { MenuBar } from "../menu-bar";
import { Spinner } from "../ui/spinner";

export type DefaultScreenProps = PropsWithChildren & {
  isLoading?: boolean;
};

export function DefaultScreen(props: DefaultScreenProps) {
  return (
    <div className="h-dvh w-dvw flex flex-col">
      <MenuBar />
      <div className="flex flex-col flex-1 w-full p-6 max-w-[1240px] mx-auto pb-20">
        {props.isLoading ? (
          <div className="flex flex-1 justify-center items-center">
            <Spinner />
          </div>
        ) : (
          props.children
        )}
      </div>
    </div>
  );
}
