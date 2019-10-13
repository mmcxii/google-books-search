import React from 'react';

import SearchForm from './SearchForm';

interface Props {}

const Search: React.FC<Props> = () => {
  return (
    <>
      <h2>Search for books</h2>

      <SearchForm />
    </>
  );
};

export default Search;
