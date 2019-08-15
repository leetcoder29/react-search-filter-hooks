import React, { createContext, useReducer } from 'react';

import data from '../db/data';
import SearchInput from './SearchInput';
import SearchResults from './SearchResults';
import SearchFilter from './SearchFilter';
/**
 * 1. Create a SearchContainer => context provider for application state
 * ✅ Create context and make top level div the provider
 * ☑️ Create reducer hook for state changes
 * - SUBMIT_SEARCH
 * - SET_FILTER
 * ✅ Create action handlers for search submit
 */

// React Context
export const SearchContext = createContext(null);

// React useReducer Hook
const searchReducer = (state, action) => {
  switch (action.type) {
    case 'SUBMIT_SEARCH':
      return {
        ...state,
        searchResults: action.payload,
      };

    case 'SET_FILTER':
      return {
        ...state,
        filterKey: action.payload,
      };

    default:
      return state;
  }
};

const initialState = {
  searchTerm: '',
  searchResults: [],
  filterKey: 'NONE',
};

export const getSearchResults = (data, searchTerm) => {
  return data.filter(item => {
    return item['first_name'].toLowerCase() === searchTerm;
  });
};

const SearchContainer = () => {
  const [searchState, dispatchSearch] = useReducer(searchReducer, initialState);

  const handleSearchSubmit = searchTerm => {
    // Filter data by first name according to searchTerm
    const results = getSearchResults(data, searchTerm);

    return dispatchSearch({
      type: 'SUBMIT_SEARCH',
      payload: results,
    });
  };

  const handleSetFilter = filterKey => {
    return dispatchSearch({
      type: 'SET_FILTER',
      payload: filterKey,
    });
  };

  return (
    <SearchContext.Provider
      value={{
        ...searchState,
        dispatchSearch,
        handleSearchSubmit,
        handleSetFilter,
      }}
    >
      <h1>Simple Search and Filter</h1>
      <SearchInput />
      <SearchFilter />
      <SearchResults />
    </SearchContext.Provider>
  );
};

export default SearchContainer;
