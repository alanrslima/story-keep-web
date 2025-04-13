import Image from "next/image";
import MomentToRememberSVG from "../../assets/svg/moment-to-remember.svg";

export type IllustrationProps = {
  name: IllustrationName;
  size?: number;
};

export type IllustrationName = "moment-to-remeber";

export function Illustration({ name, size = 400 }: IllustrationProps) {
  switch (name) {
    case "moment-to-remeber":
      return <Image src={MomentToRememberSVG} alt="Logo" width={size} />;
    default:
      return <></>;
  }
}
