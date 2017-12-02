import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import '../containers/App.css';

const FilterContainer = styled.div`
  width: 100%;
  max-height: 100%;
  overflow-y: auto;
  padding: 40px 80px;
`;

const Filter = () => {
  return (
    <FilterContainer>
      <div>one</div>
      <div>two</div>
      <div>three</div>
    </FilterContainer>
  );
};

Filter.propTypes = {
  filterBugs: PropTypes.func
};

export default Filter;
