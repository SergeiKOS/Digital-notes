import ReactDOM from "react-dom";
import { Overlay, ModalWindow, CloseButton } from "./ModalStyles";

const Modal = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null;

  const modalClick = (e) => {
    // this click only for block click from overlay
    e.stopPropagation();
  };

  return ReactDOM.createPortal(
    <Overlay onClick={onClose}>
      <ModalWindow onClick={modalClick} role="dialog" aria-modal="true">
        <div>{children}</div>
        <CloseButton onClick={onClose} type="button" aria-label="Close popup">
          +
        </CloseButton>
      </ModalWindow>
    </Overlay>,
    document.getElementById("portal")
  );
};

export default Modal;
