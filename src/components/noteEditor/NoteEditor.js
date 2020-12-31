import styled from "styled-components";

export const NoteHeaderTitle = styled.h1`
  padding-left: 8px;
  padding-right: 8px;
  padding-bottom: 3px;
  cursor: pointer;
`;

export const NoteHeaderForm = styled.form`
  margin-top: 0;
  padding: 0;
`;

export const NoteHeaderInput = styled.input`
  height: 100%;
  width: 100%;
  display: block;
  outline: none;
  font-size: 32px;
  font-weight: bold;
  background: transparent;
  padding: 3px 10px 7px 8px;

  &:focus {
    border: none;
  }
`;
