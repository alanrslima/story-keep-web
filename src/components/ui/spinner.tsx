"use client";

import Lottie from "react-lottie";
import animationData from "../assets/json/spinner.json";

export type SpinnerProps = {
  size?: number;
};

export function Spinner({ size = 150 }: SpinnerProps) {
  return (
    <Lottie
      height={size}
      width={size}
      options={{ animationData, autoplay: true, loop: true }}
    />
  );
}
