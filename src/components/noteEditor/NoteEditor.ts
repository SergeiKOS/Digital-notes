import styled from "styled-components";
import { colors } from "../../commonStyles/variables";

export const NoteHeaderTitle = styled.h1`
  padding: 4px 8px 3px 8px;
  cursor: pointer;
  font-size: 25px;
`;

export const NoteHeaderForm = styled.form`
  margin-top: 0;
  padding: 0;
`;

export const NoteHeaderInput = styled.input`
  height: 100%;
  width: 100%;
  display: block;
  outline: none;
  border: none;
  font-size: 25px;
  font-weight: bold;
  background: transparent;
  padding: 0px 8px 3px 8px;

  &:focus {
    border: none;
  }

  &::placeholder {
    color: ${colors.dark};
    opacity: 0.5;
  }
`;
