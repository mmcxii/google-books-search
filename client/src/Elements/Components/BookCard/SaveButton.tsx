import React, { useContext, useState, useEffect } from 'react';
import styled from 'styled-components';

import { BookProps, BooksAPIContext } from 'BookContext';
import { spacing, roundedInner, white, purple, purpleLight, transition } from 'Utilities';

interface Props {
  book: BookProps;
}

const SaveButton: React.FC<Props> = ({ book }) => {
  const { state, dispatch } = useContext(BooksAPIContext);
  const [bookIsSaved, setBookIsSaved] = useState<boolean>(false);

  useEffect(() => {
    if (state.savedBooks.some((item: BookProps) => item.title === book.title)) {
      setBookIsSaved(true);
    }
  }, [state.savedBooks]);

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
    <Button onClick={() => unSaveBook()}>Unsave</Button>
  ) : (
    <Button onClick={() => saveBook()}>Save</Button>
  );
};

export default SaveButton;

const Button = styled.button`
  grid-area: button;

  cursor: pointer;
  padding: ${spacing.xs} ${spacing.sm};
  border-radius: ${roundedInner};
  border: none;
  background: ${purpleLight};
  color: ${white};
  ${transition({ prop: 'background' })};

  &:hover {
    background: ${purple};
  }
`;
