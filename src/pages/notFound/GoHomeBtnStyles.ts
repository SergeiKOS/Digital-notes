import styled from "styled-components";

import { colors } from "../../commonStyles/variables";

export const GoHome = styled.button`
  cursor: pointer;
  padding: 20px;
  padding-left: 40px;
  padding-right: 40px;
  font-size: 30px;
  color: #fff;
  border: none;
  background-color: rgb(47, 46, 65);
  border-radius: 10px;

  @media (max-width: 370px) {
    font-size: 20px;
  }

  &:focus {
    outline: none;
    color: #fff;
    background-color: rgb(87, 184, 148);
    color: ${colors.dark};
  }

  &:hover {
    color: lightgray;
  }
`;
