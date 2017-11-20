import React from 'react';
import FileTextO from 'react-icons/lib/fa/file-text-o';
import Check from 'react-icons/lib/fa/check';
import Close from 'react-icons/lib/fa/close';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const ButtonContainer = styled.div`
    .button {
        cursor: pointer;
        width: auto;
        padding: 10px 30px;
        display: flex;
        align-items: center;
        justify-content: center;
        color: #fafafa;
        outline: none;
        text-align: center;
        margin-bottom: 10px;
        white-space: nowrap;
        &:hover {
            box-shadow: 0px 3px 7px rgba(0,0,0,0.25);
        }
        &.working {
            background: linear-gradient(#3b3e52, #343857);
        }
        &.complete {
            background: #63D5C3;
            background: linear-gradient(#63D5C3, #4fc2b7);
        }
        &.delete {
            background: linear-gradient(#C62828, #B71C1C);
        }
        .icon {
            margin-right: 5px;
        }
    }
`

const Button = ({ children, type, workingOn, completeBug, deleteBug, index, id  }) => {
    switch (type) {
        case 0:
            return (
                <ButtonContainer>
                    <a className="button complete" onClick={e => completeBug(index, id)}>
                    <Check className="icon" />{children}</a>
                </ButtonContainer>
            );
        case 1:
            return (
                <ButtonContainer>
                    <a className="button working" onClick={e => workingOn(index, id)}>
                    <FileTextO className="icon" />{children}</a>
                </ButtonContainer>
            );
        case 2:
            return (
                <ButtonContainer>
                    <a className="button delete" onClick={e => deleteBug(index, id)}>
                    <Close className="icon" />{children}</a>
                </ButtonContainer>
            );
        default: 
            return (
                <h1>Invalid button Type</h1>
            );
    }
}

export default Button;