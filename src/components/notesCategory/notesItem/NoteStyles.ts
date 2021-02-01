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
  }

  & .trash-icon-wrapper {
    cursor: pointer;
    align-self: flex-end;
    padding: 10px;
    margin-right: -10px;

    &:hover .trash-icon {
      color: ${colors.redHover};
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