import styled from "styled-components";
import { motion } from "framer-motion";
import { colors } from "../../../commonStyles/variables";

export const NotesHeaderWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  flex-grow: 1;
  padding: 0;
  margin: 0;
  height: 33px;

  &:hover {
    cursor: pointer;
  }
`;

export const NotesHeader = styled.h2`
  color: ${colors.dark};
  margin-right: 5px;
  max-width: 236px;
  margin-top: 3px;
  overflow: hidden;
  transition: color 0.2s;

  &:hover {
    color: ${colors.grayHover};
  }
`;

export const NotesHeaderForm = styled.form`
  margin: 0;
  margin-bottom: 5px;
  font-size: 24px;
  border: none;
  position: relative;
`;

export const NotesHeaderInput = styled.input`
  font-weight: bold;
  max-width: 242px;
  background-color: transparent;
  border: none;

  &:focus,
  &:active {
    outline: none;
    border: none;
    border-bottom: 1px solid ${colors.almostWhite};
  }
`;

export const NotesHeaderError = styled.small`
  position: absolute;
  top: 30px;
  left: 0;
  background-color: #fff;
  color: red;
  font-weight: bold;
  font-size: 14px;
`;

export const NotesHeaderEdit = styled(motion.button)`
  background-color: transparent;
  border: none;
  cursor: pointer;

  &:focus {
    outline: 2px solid ${colors.dark};
  }
`;
