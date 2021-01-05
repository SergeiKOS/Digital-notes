import ReactDOM from "react-dom";
import { Overlay, ModalWindow, CloseButton } from "./ModalStyles";

const Modal = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null;
  return ReactDOM.createPortal(
    <Overlay onClick={onClose}>
      <ModalWindow role="dialog" aria-modal="true">
        <div>{children}</div>
        <CloseButton onClick={onClose} type="button" aria-label='Close popup'>
          +
        </CloseButton>
      </ModalWindow>
    </Overlay>,
    document.getElementById("portal")
  );
};

export default Modal;
