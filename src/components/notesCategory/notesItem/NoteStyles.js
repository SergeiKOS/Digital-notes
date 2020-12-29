import styled from "styled-components";
import { colors } from "../../../commonStyles/variables";

export const NoteCard = styled.div`
  background-color: ${colors.almostWhite};
  margin-bottom: 10px;
  padding: 10px;
  font-size: 14px;
  height: 112px;
  overflow: hidden;
  display: flex;
  justify-content: space-between;

  & .trash-icon-wrapper {
    cursor: pointer;
  }
`;

export const NoteText = styled.div`
  display: -webkit-box;
  -webkit-line-clamp: 6;
  -webkit-box-orient: vertical;
`;
