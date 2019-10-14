import React from 'react';

import { BookProps } from '../../Context';
import SaveButton from './SaveButton';

interface Props {
  book: BookProps;
}

const Book: React.FC<Props> = ({ book }) => (
  <article>
    <h3>
      <a href={book.link} target='blank'>
        {book.title}
      </a>
    </h3>
    <p>{book.authors.join(', ')}</p>
    <p>{book.description}</p>
    <SaveButton book={book} />

    <img src={book.image} alt={book.title} />
  </article>
);

export default Book;
