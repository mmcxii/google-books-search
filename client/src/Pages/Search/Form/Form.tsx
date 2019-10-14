import React, { useContext, useEffect, useState } from 'react';

import { useFormInput } from 'Hooks';
import { BooksAPIContext, BookProps } from 'BookContext';

interface Props {}

const SearchForm: React.FC<Props> = () => {
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
    <form
      onSubmit={e => {
        e.preventDefault();
        setFormWasSubmitted(true);
      }}
    >
      <input type='text' name='query' {...searchQuery} />

      <button type='submit'>Search</button>
    </form>
  );
};

export default SearchForm;
