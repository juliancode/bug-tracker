import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { UrlInput, TextAreaInput } from './inputs';

const Form = styled.form`
  background: #3b3e52;
  font-size: 16px;
  padding: 40px 80px;
`;

export const BugTrackerForm = ({
  textInputLabel,
  textAreaLabel,
  textInputValue,
  textAreaInputValue,
  submitEvent,
  onUrlInputChange,
  onTextAreaInputChange
}) => {
  return (
    <Form onSubmit={submitEvent}>
      <UrlInput
        label={textInputLabel}
        value={textInputValue}
        onChange={onUrlInputChange}
      />
      <TextAreaInput
        label={textAreaLabel}
        value={textAreaInputValue}
        onChange={onTextAreaInputChange}
      />
    </Form>
  );
};

BugTrackerForm.propTypes = {
  textInputLabel: PropTypes.string,
  textAreaLabel: PropTypes.string,
  textInputValue: PropTypes.string,
  textAreaInputValue: PropTypes.string,
  submitEvent: PropTypes.func,
  onUrlInputChange: PropTypes.func,
  onTextAreaInputChange: PropTypes.func
};
