import { createRef } from "react";
import { ControlsIcon } from "./ControlsIcon";
import { ControlsModal } from "./ControlsModal";

export const Controls = () => {
  const controlsContainerRef = createRef<HTMLDivElement>();

  const openCloseModal = (open: boolean) => {
    if (controlsContainerRef.current) {
      controlsContainerRef.current.style.display = open ? "inherit" : "none";
    } else {
      console.warn("no controls ref found");
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
