import React, { useEffect, useRef } from "react";
import { createPortal } from "react-dom";
import FocusTrap from "focus-trap-react";
import IModal from "./IModal.interface";
import {
  ModalContainerOverlay,
  ModalContentWrapper,
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
        <ModalContentWrapper>
          <ModalContent
            onClick={modalClick}
            role="dialog"
            aria-modal="true"
            initial={{ y: -300, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
          >
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
        </ModalContentWrapper>
      </ModalContainerOverlay>
    </FocusTrap>,
    document.getElementById("portal")!
  );
};

export default Modal;
