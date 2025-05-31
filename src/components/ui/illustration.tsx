import Image from "next/image";
import MomentToRememberSVG from "../../assets/svg/moment-to-remember.svg";
import MomentToRememberVacationsSVG from "../../assets/svg/moment-to-remember-vacations.svg";
import CameraSVG from "../../assets/svg/camera.svg";
import AlbumSVG from "../../assets/svg/album.svg";

export type IllustrationProps = {
  name: IllustrationName;
  size?: number;
};

export type IllustrationName =
  | "moment-to-remeber"
  | "moment-to-remeber-vacations"
  | "camera"
  | "album";

export function Illustration({ name, size = 400 }: IllustrationProps) {
  switch (name) {
    case "moment-to-remeber":
      return <Image src={MomentToRememberSVG} alt="Logo" width={size} />;
    case "album":
      return <Image src={AlbumSVG} alt="Logo" width={size} />;
    case "moment-to-remeber-vacations":
      return (
        <Image src={MomentToRememberVacationsSVG} alt="Logo" width={size} />
      );
    case "camera":
      return <Image src={CameraSVG} alt="Logo" width={size} />;
    default:
      return <></>;
  }
}
