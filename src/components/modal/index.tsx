import React, { useEffect, useRef } from "react";
import { createPortal } from "react-dom";
import FocusTrap from "focus-trap-react";
import IModal from "./IModal.interface";
import {
  ModalContainerOverlay,
  ModalContent,
  CloseButton,
} from "./ModalStyles";

const Modal: React.FC<IModal> = ({ isOpen, onClose, children }) => {
  const closeBtnRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const closeWindowByEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        closeBtnRef.current?.click();
      }
    };

    document.addEventListener("keydown", closeWindowByEsc);

    return () => document.removeEventListener("keydown", closeWindowByEsc);
  }, []);

  if (!isOpen) return null;

  const modalClick = (
    e: React.MouseEvent<HTMLDivElement, MouseEvent>
  ): void => {
    // this click only for block click from overlay
    e.stopPropagation();
  };

  return createPortal(
    <FocusTrap>
      <ModalContainerOverlay onClick={onClose}>
        <ModalContent onClick={modalClick} role="dialog" aria-modal="true">
          <div>{children}</div>
          <CloseButton
            onClick={onClose}
            type="button"
            aria-label="Close popup"
            ref={closeBtnRef}
          >
            +
          </CloseButton>
        </ModalContent>
      </ModalContainerOverlay>
    </FocusTrap>,
    document.getElementById("portal")!
  );
};

export default Modal;
