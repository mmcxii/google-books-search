import React, { useContext } from 'react';

import { BookProps, BooksAPIContext } from 'BookContext';
import { useSavedBooks } from 'Hooks';
import { BookCard } from 'Elements';

interface Props {}

const Saved: React.FC<Props> = () => {
  const { state } = useContext(BooksAPIContext);

  useSavedBooks();

  return (
    <>
      <h2>Saved Books</h2>
      {state.savedBooks.map((item: BookProps) => (
        <BookCard book={item} key={item._id} />
      ))}
    </>
  );
};

export default Saved;
