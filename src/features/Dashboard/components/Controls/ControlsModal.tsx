import {
  ModalBody,
  ModalClose,
  ModalContainer,
  ModalContent,
  ModalFooter,
  ModalHeader,
} from "./ControlsModal.style";
import { ProfileSelect } from "./ProfileSelect";

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
  return (
    <ModalContainer ref={props.containerRef}>
      <ModalContent>
        <ModalHeader>
          <ModalClose onClick={() => props.onCloseClick()}>&times;</ModalClose>
          <h2>Dashboard Settings</h2>
        </ModalHeader>
        <ModalBody>
          <p>Hello hello</p>
          <ProfileSelect />
        </ModalBody>
        <ModalFooter></ModalFooter>
      </ModalContent>
    </ModalContainer>
  );
};
