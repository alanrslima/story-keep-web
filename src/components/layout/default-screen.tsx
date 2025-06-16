"use client";

import { PropsWithChildren, useEffect, useRef, useState } from "react";
import { MenuBar } from "../menu-bar";
import { Spinner } from "../ui/spinner";

export type DefaultScreenProps = PropsWithChildren & {
  isLoading?: boolean;
};

export function DefaultScreen(props: DefaultScreenProps) {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 100);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div ref={scrollRef} className="h-dvh w-dvw flex flex-col">
      <div className="fixed z-10 top-0 left-0 right-0">
        <MenuBar scrolled={scrolled} />
      </div>
      <div className="flex flex-col flex-1 w-full p-6 max-w-[1240px] mx-auto pb-20 pt-[100px]">
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
