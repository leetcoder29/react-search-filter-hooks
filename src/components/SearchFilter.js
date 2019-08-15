import React, { useContext } from 'react';
import { SearchContext } from './SearchContainer';

/**
 * 4. Create a SearchFilter => controls for filtering data
 */

const SearchFilter = () => {
  const { handleSetFilter } = useContext(SearchContext);

  return (
    <div>
      <label>
        Show only:
        <select
          onChange={e => handleSetFilter(e.target.value)}
          className="filter-select"
        >
          <option value="NONE">All</option>
          <option value="MALE">Male</option>
          <option value="FEMALE">Female</option>
        </select>
      </label>
    </div>
  );
};

export default SearchFilter;
