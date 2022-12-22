import { ControlsContainer } from "./Controls.style";
import { PollIntervalControl } from "./PollIntervalControl";
import { SlidoControl } from "./SlidoControl";

export const Controls = () => {
  return (
    <ControlsContainer>
      <SlidoControl />
      <PollIntervalControl />
    </ControlsContainer>
  );
};
