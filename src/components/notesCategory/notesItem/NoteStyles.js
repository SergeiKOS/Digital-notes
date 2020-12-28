import styled from "styled-components";
import { colors } from "../../../commonStyles/variables";

export const NoteCard = styled.div`
  background-color: ${colors.almostWhite};
  margin-bottom: 10px;
  padding: 10px;
  overflow: hidden;
  display: flex;
  justify-content: space-between;

  & .trash-icon-wrapper {
    cursor: pointer;
  }
`;
