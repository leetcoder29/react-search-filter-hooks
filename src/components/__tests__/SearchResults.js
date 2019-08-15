import React from 'react';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import toJSON from 'enzyme-to-json';

import SearchResults, { filterSearchResults } from '../SearchResults';

describe('Filter functionality', () => {
  it('filters out by category given a valid filter key', () => {
    const searchResults = [
      {
        first_name: 'Doris',
        last_name: 'Brown',
        gender: 'Female',
        type: 'Student',
      },
      {
        first_name: 'Jason',
        last_name: 'Black',
        gender: 'Male',
        type: 'Teacher',
      },
    ];
    const filterKeyByFemale = 'FEMALE';
    const filterCategoryByGender = 'gender';

    const filteredResultsByGender = filterSearchResults(
      searchResults,
      filterKeyByFemale,
      filterCategoryByGender
    );

    expect(filteredResultsByGender[0]).toEqual(searchResults[0]);

    const filterKeyByTeacher = 'TEACHER';
    const filterCategoryByType = 'type';

    const filteredResultsByType = filterSearchResults(
      searchResults,
      filterKeyByTeacher,
      filterCategoryByType
    );

    expect(filteredResultsByType[0]).toEqual(searchResults[1]);
  });
});
