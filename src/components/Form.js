import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import '../containers/App.css';

const FormContainer = styled.div`
    background: #3B3E52;
    form {
        font-size: 16px;
        margin: 40px 80px;
        .form-input {
            margin-bottom: 20px
        }
        label {
            margin: 0px 10px;
            color: #fff;
            font-size: 18px;
        }
        input, textarea {
            background: none;
            border: none;
            border-bottom: 1px solid #63D5C3;
            outline: none;
            width: 100%;
            padding: 20px 10px;
            font-family: "Arial";
            margin-bottom: 10px;
            color: #fafafa;
            &::placeholder {
                color: #5f6a79;
            }
        }

        textarea {
            margin-top: 10px;
            border: 1px solid #63D5C3;
            height: 100px;
            transition: 0.2s all ease-in;
            &:focus {
                height: 600px;
            }
        }
        
        input[type=submit] {
            cursor: pointer;
            width: auto;
            padding: 10px 60px;
            border-radius: 5px/50%;
            display: block;
            color: #fafafa;
            background: #63D5C3;
            background: linear-gradient(#63D5C3, #4fc2b7);
            &:hover {
                box-shadow: 0px 3px 7px rgba(0,0,0,0.25);
            }
        }
    }
`

const Form = ({ url, description, onChange, onSubmit }) => {
    return (
        <FormContainer>
            <form onSubmit={onSubmit}>
                <div className="form-input">
                    <label>URL</label>
                    <input 
                        name="url"
                        type="url" 
                        value={url} 
                        placeholder="Enter URL the bug can be found at"
                        required
                        onChange={onChange}
                        autoComplete="off" 
                    />
                </div>
                <div className="form-textarea">
                    <label>Description</label>
                    <textarea
                        name="description"
                        value={description}
                        placeholder="How did you come across this bug?"
                        required
                        onChange={onChange}
                    ></textarea>           
                </div>  
                <input type="submit" value="Send" />
            </form>
        </FormContainer>
        );
}

Form.propTypes = {
    url: PropTypes.string, 
    description: PropTypes.string, 
    onSubmit: PropTypes.func, 
    onChange: PropTypes.func
}

export default Form;