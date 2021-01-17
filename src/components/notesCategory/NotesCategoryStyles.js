import styled from "styled-components";
import { colors } from "../../commonStyles/variables";

export const NotesCategoryContainer = styled.div`
  padding: 10px;
  padding-top: 0;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 30px;
  width: 320px;
  max-height: 90vh;
  overflow-y: auto;

  @media (min-width: 640px) {
    margin-left: 0;
    margin-right: 0;
  }

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

  &:active {
    font-size: 34px;
  }

  &:focus {
    outline: none;
    border: none;
  }
`;
