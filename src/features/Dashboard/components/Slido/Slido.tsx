import { StyledSlidoContainer } from "./Slido.style";
import { SlidoQRCode } from "./SlidoQRCode";

export const Slido = () => {
  return (
    <>
      <StyledSlidoContainer>
        <iframe
          src="https://app.sli.do/event/vsk6FvFXaxTCAbMV4A2yA9"
          height="100%"
          width="100%"
          frameBorder="0"
          title="Slido"
          style={{ minHeight: "560px" }}
        ></iframe>
      </StyledSlidoContainer>
      <SlidoQRCode />
    </>
  );
};
