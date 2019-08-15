import React, { useContext, useState } from 'react';

import { SearchContext } from './SearchContainer';

/**
 *
 * 2. Create a SearchInput => text input for search
 * ✅ Test to see if useContext works
 * ☑️ Make input into controlled component with internal state using useState hooks
 */

const SearchInput = () => {
  const { handleSearchSubmit } = useContext(SearchContext);
  const [searchTerm, setSearchTerm] = useState('');

  const handleSubmitForm = e => {
    e.preventDefault();
    handleSearchSubmit(searchTerm);
  };

  return (
    <div>
      <form onSubmit={handleSubmitForm} className="search-form">
        <label htmlFor="search-input">
          Search:{' '}
          <input
            onChange={e => setSearchTerm(e.target.value)}
            id="search-input"
            type="text"
            name="search-input"
          />
        </label>
        <button className="submit-button" type="submit">
          Search
        </button>
      </form>
    </div>
  );
};

export default SearchInput;
