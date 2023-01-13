import { ControlsIconContainer } from "./Controls.style";

export type ControlsIconProps = { clickAction: () => void };

export const ControlsIcon: React.FC<ControlsIconProps> = (props) => {
  return (
    <ControlsIconContainer onClick={() => props.clickAction()}>
      <img
        src={process.env.PUBLIC_URL + "/images/gear.png"}
        alt="settings"
        style={{ width: "50px" }}
      />
    </ControlsIconContainer>
  );
};
