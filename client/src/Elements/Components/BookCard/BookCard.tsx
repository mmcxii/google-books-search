import React from 'react';
import styled from 'styled-components';

import { BookProps } from 'BookContext';
import { grey, spacing, rounded, roundedInner, elevation, transition } from 'Utilities';
import SaveButton from './SaveButton';

interface Props {
  book: BookProps;
}

const Book: React.FC<Props> = ({ book }) => (
  <Wrapper>
    <Title>
      <a href={book.link} target='blank'>
        {book.title}
      </a>
    </Title>
    <Authors>{book.authors.join(', ')}</Authors>
    <Description>{book.description}</Description>
    <SaveButton book={book} />

    <BookCover src={book.image} alt={book.title} />
  </Wrapper>
);

export default Book;

const Wrapper = styled.article`
  display: grid;
  grid-template-columns: max-content 1fr;
  grid-template-rows: repeat(4, max-content);
  grid-template-areas:
    'cover title'
    'cover authors'
    'cover description'
    'cover button';
  justify-content: center;
  align-items: center;
  grid-gap: ${spacing.sm};

  background: ${grey};
  margin: ${spacing.md} 0;
  padding: ${spacing.md};
  border-radius: ${rounded};
  ${elevation[3]};
  ${transition({ prop: 'box-shadow' })};

  &:hover {
    ${elevation[4]};
  }
`;

const Title = styled.h3`
  grid-area: title;

  font-style: italic;

  > a {
    text-decoration: none;

    &:hover {
      text-decoration: underline;
    }
  }
`;

const Authors = styled.p`
  grid-area: authors;
`;

const Description = styled.p`
  grid-area: description;
`;

const BookCover = styled.img`
  grid-area: cover;

  border-radius: ${roundedInner};
`;
