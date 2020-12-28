import styled from "styled-components";
import { colors } from "../../../commonStyles/variables";

export const NoteHeaderWrapper = styled.div`
  display: flex;
`;

export const NotesHeader = styled.h2`
  color: ${colors.dark};
  margin-right: 10px;
`;

export const NotesHeaderEdit = styled.button`
  background-color: transparent;
  border: none;
  cursor: pointer;
`;
