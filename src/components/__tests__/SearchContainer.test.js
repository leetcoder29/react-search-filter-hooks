import React from 'react';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import toJSON from 'enzyme-to-json';

import data from '../../db/data';
import SearchContainer, { getSearchResults } from '../SearchContainer';

configure({ adapter: new Adapter() });

describe('Search functionality', () => {
  it('returns filtered array of search results from data with a valid search term', () => {
    const searchTerm = 'hi';
    const searchResults = getSearchResults(data, searchTerm);
    expect(searchResults[0]['first_name'].toLowerCase()).toEqual(searchTerm);
  });

  it('returns an empty array of search results from data with an invalid search term', () => {
    const searchTerm = 'bruce';
    const searchResults = getSearchResults(data, searchTerm);
    expect(searchResults).toHaveLength(0);
  });
});

describe('<SearchContainer /', () => {
  it('renders correctly', () => {
    shallow(<SearchContainer />);
  });

  it('matches snapshot', () => {
    const wrapper = shallow(<SearchContainer />);
    expect(toJSON(wrapper)).toMatchSnapshot();
  });
});
