import styled from "styled-components";
import { colors } from "../../commonStyles/variables";

export const NotesCategoryContainer = styled.div`
  padding: 10px;
  width: 320px;

  & .notes-category-container-header {
    display: flex;
    justify-content: space-between;
    gap: 10px;
    margin-bottom: 5px;
  }
`;

export const NotesWrapper = styled.div`
  background-color: #62c9c4;
  padding: 10px;
  padding-bottom: 1px;
`;

export const AddNote = styled.button`
  border: none;
  background-color: transparent;
  cursor: pointer;
  font-size: 36px;
  line-height: 0;

  &:hover {
    color: ${colors.grayHover};
  }
`;
