import React, { useContext, useState, useEffect } from 'react';

import { BookProps, BooksAPIContext } from '../../Context';

interface Props {
  book: BookProps;
}

const SaveButton: React.FC<Props> = ({ book }) => {
  const { state, dispatch } = useContext(BooksAPIContext);
  const [bookIsSaved, setBookIsSaved] = useState<boolean>(false);

  useEffect(() => {
    const checkIfBookIsSaved = async () => {
      try {
        const response: Response = await fetch('api/books', { method: 'GET' });
        const data: BookProps[] = await response.json();

        data.forEach(item => {
          if (item.title === book.title) {
            setBookIsSaved(true);
            dispatch({ type: 'SAVE_BOOK', payload: item });
          }
        });
      } catch (err) {
        console.log(err);
      }
    };

    checkIfBookIsSaved();

    // eslint-disable-next-line
  }, []);

  const saveBook = async () => {
    try {
      const response: Response = await fetch('/api/books', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...book }),
      });
      const data: { newBook: BookProps } = await response.json();

      setBookIsSaved(true);
      dispatch({ type: 'SAVE_BOOK', payload: { ...data.newBook } });
    } catch (err) {
      console.log(err);
    }
  };

  const unSaveBook = async () => {
    try {
      let bookFromState: BookProps | null = null;

      for (let i = 0; i < state['savedBooks'].length; i++) {
        if (state['savedBooks'][i].title === book.title) {
          bookFromState = state['savedBooks'][i];
        }
      }

      if (bookFromState) {
        fetch(`/api/books/${bookFromState._id}`, { method: 'DELETE' });
        setBookIsSaved(false);
      }
    } catch (err) {
      console.log(err);
    }
  };

  return bookIsSaved ? (
    <button onClick={() => unSaveBook()}>Unsave</button>
  ) : (
    <button onClick={() => saveBook()}>Save</button>
  );
};

export default SaveButton;
