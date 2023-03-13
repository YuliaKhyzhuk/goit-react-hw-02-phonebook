import React from 'react';
import PropTypes from 'prop-types';
import { FilterContainer, FilterInput } from './Filter.styled';

const Filter = ({ value, onChange }) => (
  <FilterContainer>
    Find contacts by name
    <FilterInput type="text" value={value} onChange={onChange} />
  </FilterContainer>
);

Filter.propTypes = {
  value: PropTypes.node,
  onChange: PropTypes.func.isRequired,
};

export default Filter;
