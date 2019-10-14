import React, { useContext, useEffect, useState } from 'react';
import styled from 'styled-components';

import { BooksAPIContext, BookProps } from 'BookContext';
import { useFormInput } from 'Hooks';
import { spacing, roundedInner, purpleLight, white, transition, purple } from 'Utilities';

interface Props {}

const Form: React.FC<Props> = () => {
  const { dispatch } = useContext(BooksAPIContext);
  const [formWasSubmitted, setFormWasSubmitted] = useState<boolean>(false);
  const searchQuery = useFormInput('');

  useEffect(() => {
    const performSearch = async () => {
      try {
        const response: Response = await fetch(
          `https://www.googleapis.com/books/v1/volumes?q=${searchQuery.value
            .trim()
            .split(/\s+/g)
            .join('+')}&key=AIzaSyBJt1vo-eSxcfLwgu3KYJamG_ujOqGGsLo`
        );

        const data = await response.json();

        const books: BookProps[] = [];
        data.items.forEach((book: any) => {
          const {
            title,
            authors,
            description = 'No description available for this item',
            previewLink,
            imageLinks: { thumbnail },
          } = book.volumeInfo;
          const newBook: BookProps = { title, authors, description, link: previewLink, image: thumbnail };

          books.push(newBook);
        });

        dispatch({ type: 'ADD_BOOKS', payload: books });
      } catch (err) {
        console.log(err);
      } finally {
        setFormWasSubmitted(false);
      }
    };

    if (formWasSubmitted) {
      performSearch();
    }
    // eslint-disable-next-line
  }, [formWasSubmitted]);

  return (
    <SearchForm
      onSubmit={e => {
        e.preventDefault();
        setFormWasSubmitted(true);
      }}
    >
      <Label htmlFor='query'>What would you like to read?</Label>
      <Input type='text' name='query' placeholder='Enter the name of a book or series...' {...searchQuery} />

      <SubmitButton type='submit'>Search</SubmitButton>
    </SearchForm>
  );
};

export default Form;

const SearchForm = styled.form`
  display: flex;
  flex-direction: column;
  margin: ${spacing.sm} 0;
`;

const Label = styled.label``;

const Input = styled.input`
  padding: ${spacing.sm} ${spacing.md};
  margin: ${spacing.sm} 0;
  border: none;
  border-radius: ${roundedInner};
`;

const SubmitButton = styled.button`
  cursor: pointer;
  padding: ${spacing.sm} ${spacing.md};
  border-radius: ${roundedInner};
  border: none;
  background: ${purpleLight};
  color: ${white};
  ${transition({ prop: 'background' })};

  &:hover {
    background: ${purple};
  }
`;
