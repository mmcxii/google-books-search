import { useContext, useEffect } from 'react';

import { BookProps, BooksAPIContext } from 'BookContext';

export const useSavedBooks = () => {
  const { state, dispatch } = useContext(BooksAPIContext);

  useEffect(() => {
    const getSavedBooks = async () => {
      const response: Response = await fetch('/api/books', { method: 'GET' });
      const data: BookProps[] = await response.json();

      dispatch({ type: 'LOAD_SAVED_BOOKS', payload: data });
    };

    getSavedBooks();
  }, [state.savedBooks]);
};
