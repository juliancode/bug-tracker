import React from 'react';
import styled from 'styled-components';

const NAME = 'url';
const PLACEHOLDER = 'Enter URL the bug can be found at';

const UrlInputContainer = styled.div``;

const Label = ({ label }) => <label>{label}</label>;

const Input = ({ value, onChange }) => (
  <input
    name={NAME}
    type="url"
    placeholder={PLACEHOLDER}
    required
    autoComplete="off"
    value={value}
    onChange={onChange}
  />
);

export const UrlInput = ({ label, value, onChange }) => (
  <UrlInputContainer>
    <Label label={label} />
    <Input value={value} onChange={onChange} />
  </UrlInputContainer>
);
