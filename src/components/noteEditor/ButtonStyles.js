import styled from "styled-components";
import { colors } from "../../commonStyles/variables";

export const SaveButton = styled.button`
  padding: 8px 20px 8px 20px;
  background-color: ${colors.green};
  border: none;
  margin-right: 5px;
  font-size: inherit;
  border-radius: 5px;
  cursor: pointer;

  &:hover {
    background-color: ${colors.greenHover};
  }
`;

export const DeleteButton = styled.button`
  border: none;
  cursor: pointer;
  background-color: transparent;too
`;
