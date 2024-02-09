import {
  SlidoQRContainer,
  SlidoQRArrowImage,
  SlidoQRImage,
} from "./Slido.style";

export const SlidoQRCode = () => {
  return (
    <SlidoQRContainer>
      <SlidoQRArrowImage
        src={process.env.PUBLIC_URL + "/images/arrow_down.png"}
      />
      <SlidoQRImage
        src={process.env.PUBLIC_URL + "/images/QR_Code_for_Top100.png"}
      />
    </SlidoQRContainer>
  );
};
