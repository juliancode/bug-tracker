import React from 'react';
import styled from 'styled-components';
import { Label } from './Label';
//import { InputContainer } from './Input';

const NAME = 'url';
const PLACEHOLDER = 'Enter URL the bug can be found at';
const LABEL = 'URL: ';

const Input = styled.input`
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
`;

export const UrlInput = ({ value, onChange }) => (
  <Label>
    {LABEL}
    <Input
      name={NAME}
      type="url"
      placeholder={PLACEHOLDER}
      required
      autoComplete="off"
      value={value}
      onChange={onChange}
    />
  </Label>
);
