import styled from "styled-components";

export const NotesCategoryContainer = styled.div`
  padding: 10px;
  border: 1px solid #000;

  & .notes-category-container-header {
    display: flex;
    gap: 10px;
  }
`;

export const NotesWrapper = styled.div`
  border: 1px solid #000;
  padding: 10px;
`;

export const AddNote = styled.button`
 border: none;
 background-color: transparent;
 cursor: pointer;
 font-size: 29px;
`;