import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import '../containers/App.css';

const Container = styled.ul`
  width: 100%;
  max-height: 100%;
  padding: 20px 80px;
`;

const Link = styled.li`
  display: inline;
  padding: 5px 10px;
  color: grey;
  &:hover {
    border-bottom: 2px solid #63d5c3;
    cursor: pointer;
    color: black;
  }
`;

export const Filter = () => {
  return (
    <Container>
      <Link>All</Link>
      <Link>Worked On</Link>
      <Link>Available</Link>
      <Link>Solved</Link>
    </Container>
  );
};

Filter.propTypes = {
  filterBugs: PropTypes.func
};
