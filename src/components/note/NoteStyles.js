import styled from "styled-components";
import { colors } from "../../commonStyles/variables";

export const NotesContainer = styled.section`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  background-color: ${colors.light};
  padding-top: 10px;
  padding-left: 10px;
  padding-right: 10px;
  gap: 10px;
  min-height: 100vh;
`;

export const NoteCard = styled.article`
  width: 300px;
  margin-bottom: 20px;
`;
