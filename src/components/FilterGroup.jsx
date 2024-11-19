import React from 'react';

function FilterGroup({ title, inputType, options, selectedFilters, onFilterChange }) {
  const handleChange = (value) => {
    let updatedFilters = [...selectedFilters];
    if (updatedFilters.includes(value)) {
      updatedFilters = updatedFilters.filter(filter => filter !== value);
    } else {
      updatedFilters.push(value);
    }
    onFilterChange(updatedFilters);
  };

  return (
    <div className="mb-4">
      <h3 className="text-dark-gray-2 text-sm">{title}</h3>
      <div className="flex flex-col mt-2">
        {options.map((option, index) => (
          <label key={index} className="flex items-center mb-2">
            <input
              type={inputType}
              value={option.value || option.text}
              className="w-5 h-5 text-primary mr-2"
              checked={selectedFilters.includes(option.value || option.text)}
              onChange={() => handleChange(option.value || option.text)}
            />
            <span className="text-dark-gray-2">{option.text}</span>
          </label>
        ))}
      </div>
    </div>
  );
}

export default FilterGroup;
