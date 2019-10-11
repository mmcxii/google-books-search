import { createSchema, Type, typedModel } from 'ts-mongoose';

// Creat Schema
const BookSchema = createSchema({
  title: Type.string(),
  authors: Type.array({ of: Type.string() }),
  description: Type.string(),
  image: Type.string(),
  link: Type.string(),
});

const Book = typedModel('book', BookSchema);

export default Book;
