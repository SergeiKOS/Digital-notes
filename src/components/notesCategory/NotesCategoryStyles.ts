import styled from "styled-components";
import { Link } from "react-router-dom";

import { colors } from "../../commonStyles/variables";

export const NotesCategoryContainer = styled.div`
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
    gap: 5px;
    margin-bottom: 5px;
    padding-right: 10px;
    padding-left: 2px;
    padding-top: 2px;
  }
`;

export const NotesWrapper = styled.div`
  background-color: #62c9c4;
  padding: 10px;
  padding-bottom: 1px;
`;

export const NotesItemLink = styled(Link)`
  display: block;
  &:focus {
    outline: 1px solid ${colors.dark};
  }
`;

export const CollapseCategory = styled.button`
  border: none;
  background-color: transparent;
  cursor: pointer;
  transition: color 0.2s;

  &:hover {
    color: ${colors.grayHover};
  }

  &:focus {
    outline: 2px solid ${colors.dark};
  }
`;
export const AddNote = styled.button`
  border: none;
  background-color: transparent;
  cursor: pointer;
  font-size: 36px;
  line-height: 0;
  transition: color 0.2s;

  &:focus {
    outline: 2px solid ${colors.dark};
  }

  &:hover {
    color: ${colors.grayHover};
  }
`;
