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
  transition: background-color 0.2s;

  &:hover {
    background-color: ${colors.greenHover};
  }

  &:focus {
    outline: none;
    box-shadow: 0 0 0 2px ${colors.almostWhite};
  }
`;

export const DeleteButton = styled.button`
  border: none;
  cursor: pointer;
  background-color: transparent;
  border-radius: 5px;

  &:focus {
    outline: none;
    border: none;
  }

  &:focus {
    box-shadow: 0 0 0 2px ${colors.almostWhite};
  }
`;
