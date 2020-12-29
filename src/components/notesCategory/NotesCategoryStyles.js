import styled from "styled-components";

export const NotesCategoryContainer = styled.div`
  padding: 10px;
  width: 320px;

  & .notes-category-container-header {
    display: flex;
    gap: 10px;
  }
`;

export const NotesWrapper = styled.div`
  background-color: #62c9c4;
  padding: 10px;
`;

export const AddNote = styled.button`
  border: none;
  background-color: transparent;
  cursor: pointer;
  font-size: 29px;
`;
