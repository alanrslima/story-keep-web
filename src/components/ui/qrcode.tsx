import ReactQRCode from "react-qr-code";

export type QrcodeProps = {
  value: string;
};

export function QRcode(props: QrcodeProps) {
  return (
    <ReactQRCode
      size={256}
      style={{ height: "auto", maxWidth: "100%", width: "100%" }}
      value={props.value}
      viewBox={`0 0 256 256`}
    />
  );
}
