import {
  ModalBody,
  ModalClose,
  ModalContainer,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOptions,
} from "./ControlsModal.style";
import { PollIntervalControl } from "./PollIntervalControl";
import { ProfileSelect } from "./ProfileSelect";
import { SlidoControl } from "./SlidoControl";
import { SponsorIntervalControl } from "./SponsorIntervalControl";
import { SponsorsControl } from "./SponsorsControl";

export type ControlsModalProps = {
  onCloseClick: () => void;
  containerRef: React.RefObject<HTMLDivElement>;
};

export const ControlsModal: React.FC<ControlsModalProps> = (props) => {
  window.onclick = function (event) {
    if (event.target === props.containerRef.current) {
      props.onCloseClick();
    }
  };
  // TODO: add option for sponsor interval
  return (
    <ModalContainer ref={props.containerRef}>
      <ModalContent>
        <ModalHeader>
          <ModalClose onClick={() => props.onCloseClick()}>&times;</ModalClose>
          <h2>Dashboard Settings</h2>
        </ModalHeader>
        <ModalBody>
          <ModalOptions>
            <ProfileSelect />
            <PollIntervalControl />
            <SlidoControl />
            <SponsorsControl />
            <SponsorIntervalControl />
          </ModalOptions>
        </ModalBody>
        <ModalFooter></ModalFooter>
      </ModalContent>
    </ModalContainer>
  );
};
