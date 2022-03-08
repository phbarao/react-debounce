import React, { useState } from 'react';
import useDebounce from '../hooks/useDebounce';

const SearchInput = ({ value, onChange }) => {
  // const [displayValue, setDisplayValue] = useState(value);
  const debounceChange = useDebounce(onChange, 500);

  function handleChange(event) {
    // setDisplayValue(event.target.value);
    debounceChange(event.target.value);
  }

  return <input type="search" onChange={handleChange} />;
};

export default SearchInput;
