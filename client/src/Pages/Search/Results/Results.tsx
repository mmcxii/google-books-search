import React, { useContext } from 'react';

import { BooksAPIContext, BookProps } from 'BookContext';
import { useSavedBooks } from 'Hooks';
import { BookCard } from 'Elements';

interface Props {}

const SearchResults: React.FC<Props> = () => {
  const { state } = useContext(BooksAPIContext);

  useSavedBooks();

  return (
    <section>
      {state.searchResults.map((item: BookProps, index: number) => (
        <BookCard book={item} key={`book-${index}`} />
      ))}
    </section>
  );
};

export default SearchResults;
