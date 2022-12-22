import {
  SlidoQRContainer,
  SlidoQRArrowImage,
  SlidoQRImage,
} from "./Slido.style";

export const SlidoQRCode = () => {
  return (
    <SlidoQRContainer>
      <SlidoQRArrowImage src="/images/arrow_down.png" />
      <SlidoQRImage src="/images/QR_Code_for_Top100.png" />
    </SlidoQRContainer>
  );
};
