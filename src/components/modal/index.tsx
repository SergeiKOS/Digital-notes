import { createPortal } from "react-dom";
import IModal from "./IModal.interface";
import { Overlay, ModalWindow, CloseButton } from "./ModalStyles";

const Modal: React.FC<IModal> = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null;

  const modalClick = (
    e: React.MouseEvent<HTMLDivElement, MouseEvent>
  ): void => {
    // this click only for block click from overlay
    e.stopPropagation();
  };

  return createPortal(
    <Overlay onClick={onClose}>
      <ModalWindow onClick={modalClick} role="dialog" aria-modal="true">
        <div>{children}</div>
        <CloseButton onClick={onClose} type="button" aria-label="Close popup">
          +
        </CloseButton>
      </ModalWindow>
    </Overlay>,
    document.getElementById("portal")!
  );
};

export default Modal;
