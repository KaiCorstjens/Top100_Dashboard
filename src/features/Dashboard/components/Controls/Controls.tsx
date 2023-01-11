import { ControlsContainer } from "./Controls.style";
import { PollIntervalControl } from "./PollIntervalControl";
import { SlidoControl } from "./SlidoControl";
import { SponsorsControl } from "./SponsorsControl";

export const Controls = () => {
  return (
    <ControlsContainer>
      <SlidoControl />
      <PollIntervalControl />
      <SponsorsControl />
    </ControlsContainer>
  );
};
