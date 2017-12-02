import React from 'react';
import styled from 'styled-components';

const NAME = 'description';
const PLACEHOLDER = 'How did you come across this bug?';

const TextAreaInputContainer = styled.div``;

const Label = ({ label }) => (
  <label>{label}</label>
);

const TextArea = ({ value, onChange }) => (
  <textarea
    name={NAME}
    value={value}
    placeholder={PLACEHOLDER}
    required
    onChange={onChange}
  />
);

export const TextAreaInput = ({ label, value, onChange }) => (
  <TextAreaInputContainer>
    <Label label={label} />
    <TextArea value={value} onChange={onChange} />
  </TextAreaInputContainer>
);