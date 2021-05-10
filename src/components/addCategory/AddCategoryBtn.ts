import styled from "styled-components";

import { colors } from "../../commonStyles/variables";

export const AddCategoryBtn = styled.button`
  cursor: pointer;
  font-size: 60px;
  font-weight: bold;
  line-height: 40px;
  padding-left: 12px;
  padding-right: 12px;
  font-family: serif;
  background-color: ${colors.dark};
  color: #fff;
  border: none;

  &:focus {
    outline: none;
    color: #fff;
    background-color: ${colors.lightDark};
  }

  &:hover {
    color: lightgray;
  }
`;
