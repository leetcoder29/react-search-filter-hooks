import React, { useContext } from 'react';
import { SearchContext } from './SearchContainer';

/**
 * 3. Create a SearchResults => render results from fetching db
 * ☑️ Hook component up to state and render search state
 */

export const filterSearchResults = (
  searchResults,
  filterKey,
  filterCategory
) => {
  return searchResults.filter(item => {
    const category = item[filterCategory];

    return category.toLowerCase() === filterKey.toLowerCase();
  });
};

const SearchResults = () => {
  const { searchResults, filterKey } = useContext(SearchContext);

  const renderSearchResults = () => {
    const filteredResults =
      filterKey === 'NONE'
        ? searchResults
        : filterSearchResults(searchResults, filterKey, 'gender');

    return filteredResults.map(item => {
      const { id, first_name, last_name, email, gender } = item;

      return (
        <div key={id}>
          <h3 className="first-name">{first_name}</h3>
          <span className="last-name">{last_name}</span>
          <span className="email">{email}</span>
          <span className="gender">{gender}</span>
        </div>
      );
    });
  };
  return (
    <div>
      <h2>Your results</h2>
      {renderSearchResults()}
    </div>
  );
};

export default SearchResults;
