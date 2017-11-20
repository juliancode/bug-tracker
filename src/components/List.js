import React from 'react';
import { Bug } from '../components';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import '../containers/App.css';

const ListContainer = styled.div`
    width: 100%;
    max-height: 100%;
    overflow-y: auto;
    padding: 40px 80px;
`

const List = ({ bugs, workingOnBug, completeBug, deleteBug }) => {
    return (
        <ListContainer>
            {
                bugs.map((bug, i) =>
                <Bug 
                    key={`bug ${Math.random(10)}`} 
                    index={i}
                    id={bug._id} 
                    url={bug.url} 
                    description={bug.description} 
                    date_found={bug.date_found}
                    status={bug.status}
                    workingOn={workingOnBug}
                    completeBug={completeBug}
                    deleteBug={deleteBug}
                />)
            }
        </ListContainer>
    );
}

List.propTypes = {
    bugs: PropTypes.array,
    workingOnBug: PropTypes.func,
    completeBug: PropTypes.func
};

export default List;