import React, { useContext } from 'react';

import { BooksAPIContext, BookProps } from '../Context';
import Book from './Book';

interface Props {}

const SearchResults: React.FC<Props> = () => {
  const { state } = useContext(BooksAPIContext);
  return (
    <section>
      {state.searchResults.map((item: BookProps, index: number) => (
        <Book book={item} key={`book--${index}`} />
      ))}
    </section>
  );
};

export default SearchResults;
