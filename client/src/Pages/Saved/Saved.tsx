import React, { useEffect, useContext } from 'react';

import { BookProps, BooksAPIContext } from '../Search';

interface Props {}

const Saved: React.FC<Props> = () => {
  const { state, dispatch } = useContext(BooksAPIContext);

  useEffect(() => {
    const getSavedBooks = async () => {
      const response: Response = await fetch('/api/books', { method: 'GET' });
      const data: BookProps[] = await response.json();

      dispatch({ type: 'LOAD_SAVED_BOOKS', payload: data });
    };
    getSavedBooks();
  }, []);
  return (
    <>
      <h2>Saved Books</h2>
      {state.savedBooks.map((item: BookProps) => (
        <h3>{item.title}</h3>
      ))}
    </>
  );
};

export default Saved;
