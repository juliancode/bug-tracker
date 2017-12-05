import React from 'react';
import styled from 'styled-components';
import { Label } from './Label';

const NAME = 'description';
const PLACEHOLDER = 'How did you come across this bug?';
const DESC = 'Description';

// const TextArea = styled.textarea`
//   margin-top: 10px;
//   border: 1px solid #63d5c3;
//   height: 100px;
//   transition: 0.2s all ease-in;
//   &:focus {
//     height: 600px;
//   }
// `;

// const TextArea = ({ value, onChange }) => (
//   <textarea
//     name={NAME}
//     value={value}
//     placeholder={PLACEHOLDER}
//     required
//     onChange={onChange}
//   />
// );

const TextArea = styled.textarea`
  background: none;
  border: none;
  border-bottom: 1px solid #63d5c3;
  outline: none;
  width: 100%;
  padding: 20px 10px;
  font-family: 'Arial';
  margin-bottom: 10px;
  color: #fafafa;
  &::placeholder {
    color: #5f6a79;
  }
  margin-top: 10px;
  border: 1px solid #63d5c3;
  height: 100px;
  transition: 0.2s all ease-in;
  &:focus {
    height: 600px;
  }
`;

export const TextAreaInput = ({ value, onChange }) => (
  <Label>
    {DESC}
    <TextArea
      name={NAME}
      value={value}
      placeholder={PLACEHOLDER}
      required
      onChange={onChange}
    />
  </Label>
);
