import { createRef } from "react";
import { ControlsContainer } from "./Controls.style";
import { ControlsIcon } from "./ControlsIcon";
import { ControlsModal } from "./ControlsModal";
import { PollIntervalControl } from "./PollIntervalControl";
import { SlidoControl } from "./SlidoControl";
import { SponsorsControl } from "./SponsorsControl";

export const Controls = () => {
  const controlsContainerRef = createRef<HTMLDivElement>();

  const openCloseModal = (open: boolean) => {
    if (controlsContainerRef.current) {
      controlsContainerRef.current.style.display = open ? "inherit" : "none";
    } else {
      console.warn("no controsl ref found");
    }
  };

  return (
    <>
      <ControlsIcon clickAction={() => openCloseModal(true)} />
      <ControlsModal
        containerRef={controlsContainerRef}
        onCloseClick={() => openCloseModal(false)}
      />
    </>
  );
};
