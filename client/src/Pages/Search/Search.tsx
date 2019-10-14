import React from 'react';

import SearchForm from './Form';
import SearchResults from './Results';

interface Props {}

const Search: React.FC<Props> = () => {
  return (
    <>
      <h2>Search for books</h2>

      <SearchForm />
      <SearchResults />
    </>
  );
};

export default Search;
