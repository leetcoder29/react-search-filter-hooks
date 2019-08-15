import React from 'react';
import SearchContainer from './SearchContainer';

/**
 * 1. Create a SearchContainer => context provider for application state
 * 2. Create a SearchInput => text input for search
 * 3. Create a SearchResults => render results from fetching db
 * 4. Create a SearchFilter => controls for filtering data
 */

const App = () => {
  return <SearchContainer />;
};

export default App;
