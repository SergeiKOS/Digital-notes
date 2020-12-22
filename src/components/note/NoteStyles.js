import styled from "styled-components";
import { colors } from "../../commonStyles/variables";

export const NotesContainer = styled.section`
  display: inline-flex;
  justify-content: space-around;
  padding-top: 10px;
  padding-left: 10px;
  padding-right: 10px;
  gap: 10px;
  width: 100%;
`;

export const NoteCard = styled.article`
  flex-shrink: 0;
  width: 300px;
  margin-bottom: 20px;
`;
