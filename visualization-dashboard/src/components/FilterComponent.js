import React from 'react';

const FilterComponent = ({ filterType, data, handleChange }) => {
  const options = [...new Set(data.map(item => item[filterType]))];

  return (
    <div>
      <label htmlFor={filterType}>{filterType}</label>
      <select
        id={filterType}
        onChange={e => handleChange(filterType, e.target.value)}
      >
        <option value="">All</option>
        {options.map(option => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
    </div>
  );
};

export default FilterComponent;
