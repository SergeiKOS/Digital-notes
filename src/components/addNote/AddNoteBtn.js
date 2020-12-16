import styled from 'styled-components'
import {colors} from '../../commonStyles/variables'

export const AddNoteBtn = styled.button`
  cursor: pointer;
  font-size: 50px;
  line-height: 40px;
  padding-left: 5px;
  padding-right: 5px;
  font-family: serif;
  color: ${colors.lightDark};
  background-color: #fff;
  border: none;

  &:focus {
    outline: none;
    color: #fff;
    background-color: ${colors.lightDark};
  }
`