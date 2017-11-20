import React from 'react';
import Moment from 'moment';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import FileTextO from 'react-icons/lib/fa/file-text-o';
import Check from 'react-icons/lib/fa/check';
import Close from 'react-icons/lib/fa/close';
import '../containers/App.css';

const BugContainer = styled.div`
        background-color: #fff;
        padding: 20px;
        margin-bottom: 30px;

        .status_0 {

        }

        .status_1 {

        }

        .status_2 {
            .description {
                text-decoration: line-through;
            }
        }
        
        .main {
            display: flex;
            justify-content: space-between;
            .buttons {
                display: flex;
                flex-direction: column;
                margin-left: 20px;
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
            }
        }

        .details {
            display: flex;
            justify-content: space-between;
            margin-top: 10px;
        }
        
        .description {
            color: #666;
        }

        .date {
            color: #aaa;
        }

        .url {
            color: #111;
            text-decoration: none;
            border-bottom: 2px solid #63D5C3;
            transition: 0.2s all;
            &:hover {
                border-bottom-width: 4px;
            }
        }
    }
`

const Bug = ({ url, description, date_found, status, workingOn, completeBug, deleteBug, index, id }) => {
    const format_date = Moment(date_found).format("dddd, D MMMM YYYY [at] HH:MM");
    const relative_date = Moment(date_found).fromNow();

    switch(status) {
        case 0: // active
            return (
                <BugContainer>
                    <div className="status_0">
                        <div className="main">
                            <div className="description">{description}</div>
                            <div className="buttons">
                                <a className="button working" onClick={e => workingOn(index, id)}>
                                    <FileTextO className="icon" /> Working On</a>
                                <a className="button complete" onClick={e => completeBug(index, id)}>
                                    <Check className="icon" /> Completed</a>
                                <a className="button delete" onClick={e => deleteBug(index, id)}>
                                    <Close className="icon" /> Archive</a>
                            </div>
                        </div>
                        <div className="details">
                            <div><a className="url" href="url">{url}</a></div>
                            <div className="date" title={format_date}>{relative_date}</div>
                        </div>
                    </div>     
                </BugContainer>
            );
        case 1: // working on
            return (
                <BugContainer>
                <div className="status_1">
                    <div className="main">
                        <div className="description">{description}</div>
                        <div className="buttons">
                            <a className="button complete" onClick={e => completeBug(index, id)}>
                                <Check className="icon" /> Completed</a>
                            <a className="button delete" onClick={e => deleteBug(index, id)}>
                                <Close className="icon" /> Archive</a>
                        </div>
                    </div>
                    <div className="details">
                        <div><a className="url" href="url">{url}</a></div>
                        <div className="date" title={format_date}>{relative_date}</div>
                    </div>
                </div>     
            </BugContainer>
            );
        case 2: // completed
            return (
                <BugContainer>
                <div className="status_2">
                    <div className="main">
                        <div className="description">{description}</div>
                        <div className="buttons">
                            <a className="button delete" onClick={e => deleteBug(index, id)}>
                                <Close className="icon" /> Archive</a>
                        </div>
                    </div>
                    <div className="details">
                        <div><a className="url" href="url">{url}</a></div>
                        <div className="date" title={format_date}>{relative_date}</div>
                    </div>
                </div>     
            </BugContainer>
            );
        default: 
            return null; 
    }
}

Bug.propTypes = {
    url: PropTypes.string,
    description: PropTypes.string,
    date_found: PropTypes.string,
    workingOnBug: PropTypes.func,
    completeBug: PropTypes.func,
    index: PropTypes.number,
    id: PropTypes.string
}

export default Bug;