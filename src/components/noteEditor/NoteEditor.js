import styled from "styled-components";

export const NoteHeaderTitle = styled.h1`
  padding-left: 8px;
  padding-right: 8px;
  padding-bottom: 3px;
  cursor: pointer;
  min-height: 40px;
`;

export const NoteHeaderForm = styled.form`
  height: 40px;
  margin-top: 0 !important;
`;

export const NoteHeaderInput = styled.input`
  height: 100%;
  width: 100%;
  display: block;
  outline: none;
  font-size: 32px;
  font-weight: bold;
  background: transparent;
  padding: 3px 10px 7px 10px;

  &:focus {
    border: none;
  }
`;
