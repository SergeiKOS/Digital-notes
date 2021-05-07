import styled from "styled-components";
import { motion } from "framer-motion";
import { colors } from "../../commonStyles/variables";

export const ModalContainerOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.7);
  cursor: pointer;
  z-index: 1;
`;

export const ModalContentWrapper = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
`;

export const ModalContent = styled(motion.div)`
  position: relative;
  top: -100px;
  left: -50%;
  background-color: #fff;
  padding-top: 50px;
  padding-bottom: 20px;
  padding-right: 10px;
  padding-left: 10px;
  background-color: ${colors.almostWhite};
  z-index: 2;
  cursor: auto;
  border: 10px solid ${colors.light};
  padding-right: 27px;
  padding-left: 27px;
`;

export const CloseButton = styled.button`
  position: absolute;
  top: 4px;
  right: 4px;
  font-size: 50px;
  background-color: transparent;
  border: none;
  line-height: 30px;
  cursor: pointer;
  color: ${colors.light};
  transform: rotate(45deg);
  transition: color 0.2s;

  &:focus,
  &:active {
    outline: none;
    color: ${colors.dark};
  }

  &:hover {
    color: ${colors.lightDark};
  }
`;

export const ModalMessage = styled.div`
  margin-bottom: 50px;
`;

export const ModalButtonsWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 10px;
  position: relative;
  min-width: 205px;

  & button {
    border-radius: 5px;
    padding: 10px;
    width: 80px;
    border: none;
    color: #fff;
    cursor: pointer;
    transition: background-color 0.2s;
  }

  & .modal-buttons-wrapper--confirm {
    background-color: ${colors.green};

    &:hover {
      background-color: ${colors.greenHover};
    }
  }

  & .modal-buttons-wrapper--cancel {
    background-color: ${colors.red};

    &:hover {
      background-color: ${colors.redHover};
    }
  }
`;

export const ModalInput = styled.input`
  border: none;
  padding: 5px;
  display: block;
  margin-top: 5px;
  margin-bottom: 15px;

  &:focus,
  &:active {
    border: none;
    outline: 1px solid ${colors.light};
  }
`;

export const ModalInputError = styled.small`
  color: red;
  display: block;
  margin-top: -10px;
  margin-bottom: 10px;
`;

export const ModalButtonConfirm = styled.button`
  border-radius: 5px;
  padding: 10px;
  padding-left: 20px;
  padding-right: 20px;
  border: none;
  color: #fff;
  font-size: 16px;
  background-color: ${colors.green};
  cursor: pointer;
  transition: background-color 0.2s;

  &:hover {
    background-color: ${colors.greenHover};
  }
`;
