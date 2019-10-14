import React from 'react';

import SearchForm from './Form';
import SearchResults from './Results';

interface Props {}

const Search: React.FC<Props> = () => {
  return (
    <>
      <p>
        The Community Book List is a reading list for everyone to share! We all can add or remove items from
        the list so be sure to add books you think everyone should read!
      </p>

      <h2>Search for books</h2>

      <SearchForm />
      <SearchResults />
    </>
  );
};

export default Search;
