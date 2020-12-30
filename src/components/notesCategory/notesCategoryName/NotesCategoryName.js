import styled from "styled-components";
import { colors } from "../../../commonStyles/variables";

export const NoteHeaderWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  flex-grow: 1;
  padding: 0;
  margin: 0;
  
  &:hover {
    outline: 1px solid ${colors.lightDark};
  }
`;

export const NotesHeader = styled.h2`
  color: ${colors.dark};
  margin-right: 16px;
  max-width: 242px;
  margin-top: 10px;
  margin-bottom: 5px;
`;
export const NotesHeaderForm = styled.form`
  margin: 0;
  margin-bottom: 5px;
  font-size: 24px;
  border: none;
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

export const NotesHeaderEdit = styled.button`
  background-color: transparent;
  border: none;
  cursor: pointer;
`;
