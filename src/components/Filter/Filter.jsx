import React from 'react';
import PropTypes from 'prop-types';

const Filter =({ value, onChange }) => (
    <label>
        Find contacts bys name
        <input type="text" value={value} onChange={onChange} />
    </label>
);

Filter.propTypes = {
    value: PropTypes.node,
    onChange: PropTypes.func.isRequired,
};

export default Filter;