import React from 'react';
import Moment from 'moment';
import { Button } from '../components';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import '../containers/App.css';

const BugContainer = styled.div`
        background-color: #fff;
        padding: 20px;
        margin-bottom: 30px;

        .buttons {
            display: flex;
            flex-direction: column;
            margin-left: 20px;
        }

        .status_2 {
            .description {
                text-decoration: line-through;
            }
        }
        
        .main {
            display: flex;
            justify-content: space-between;
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
                                <Button id={id} index={index} type={0}>Completed</Button>
                                <Button id={id} index={index} type={1}>Working On</Button>
                                <Button id={id} index={index} type={2}>Archive</Button>
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
                                <Button id={id} index={index} type={0}>Completed</Button>
                                <Button id={id} index={index} type={2}>Archive</Button>
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
                                <Button id={id} index={index} type={2}>Archive</Button>
                            </div>
                        </div>
                        <div className="details">
                            <div><a className="url" href={url}>{url}</a></div>
                            <div className="date" title={format_date}>{relative_date}</div>
                        </div>
                    </div>     
                </BugContainer>
            );
        default: 
            return (
                <BugContainer>
                    <Button 
                        type={status} workingOn={workingOn}                    >
                    Sweg
                    </Button>
                </BugContainer>
            ); 
    }
}

Bug.propTypes = {
    url: PropTypes.string,
    description: PropTypes.string,
    date_found: PropTypes.string,
    workingOnBug: PropTypes.func,
    completeBug: PropTypes.func,
    index: PropTypes.number,
    status: PropTypes.number,
    id: PropTypes.string
}

export default Bug;