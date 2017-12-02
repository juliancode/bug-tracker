import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { UrlInput, TextAreaInput } from './inputs';

const Form = styled.form`
  background: #3b3e52;
  form {
    font-size: 16px;
    margin: 40px 80px;
    .form-input {
      margin-bottom: 20px;
    }
    label {
      margin: 0px 10px;
      color: #fff;
      font-size: 18px;
    }
    input,
    textarea {
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
    }

    textarea {
      margin-top: 10px;
      border: 1px solid #63d5c3;
      height: 100px;
      transition: 0.2s all ease-in;
      &:focus {
        height: 600px;
      }
    }

    input[type='submit'] {
      cursor: pointer;
      width: auto;
      padding: 10px 60px;
      border-radius: 5px/50%;
      display: block;
      color: #fafafa;
      background: #63d5c3;
      background: linear-gradient(#63d5c3, #4fc2b7);
      &:hover {
        box-shadow: 0px 3px 7px rgba(0, 0, 0, 0.25);
      }
    }
  }
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
