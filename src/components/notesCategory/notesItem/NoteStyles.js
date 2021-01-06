import styled from "styled-components";
import { colors } from "../../../commonStyles/variables";

export const NoteCard = styled.div`
  background-color: ${colors.almostWhite};
  margin-bottom: 10px;
  padding: 10px;
  font-size: 14px;
  max-height: 127px;
  overflow: hidden;

  & .note-header-wrapper {
    display: flex;
    justify-content: space-between;
  }

  & .trash-icon-wrapper {
    cursor: pointer;
    align-self: flex-end;
  }

  & .trash-icon {
    color: ${colors.red};

    &:hover {
      color: ${colors.redHover};
    }
  }
`;

export const NoteHeader = styled.h3`
  font-weight: bold;
`;

export const NoteText = styled.div`
  display: -webkit-box;
  -webkit-line-clamp: 6;
  -webkit-box-orient: vertical;
  width: 240px;
`;
