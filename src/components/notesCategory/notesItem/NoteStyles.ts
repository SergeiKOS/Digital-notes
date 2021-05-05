import styled from "styled-components";
import { colors } from "../../../commonStyles/variables";

export const NoteCard = styled.div`
  background-color: ${colors.almostWhite};
  margin-bottom: 10px;
  padding-left: 10px;
  padding-right: 10px;
  padding-bottom: 6px;
  font-size: 14px;
  max-height: 127px;
  overflow: hidden;

  & .note-header-wrapper {
    display: flex;
    justify-content: space-between;
    padding-bottom: 2px;
  }

  & .trash-icon-wrapper {
    cursor: pointer;
    align-self: flex-end;
    padding: 7px;
    margin-top: 2px;
    margin-right: -8px;

    &:hover .trash-icon {
      color: ${colors.redHover};
    }

    &:focus {
      outline: 2px solid ${colors.dark};
    }
  }

  & .trash-icon {
    color: ${colors.red};
  }
`;

export const NoteHeader = styled.h3`
  font-weight: bold;
  margin-top: 10px;
`;

export const NoteText = styled.div`
  display: -webkit-box;
  -webkit-line-clamp: 6;
  -webkit-box-orient: vertical;
  margin-right: 20px;
  margin-bottom: 4px;
  margin-top: ${({
    textClean,
    noteHeader,
  }: {
    textClean: string;
    noteHeader: string;
  }) => (textClean.length > 0 && noteHeader.length < 1 ? "-28px" : "-10px")};
`;
