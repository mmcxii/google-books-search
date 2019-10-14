import { Router } from 'express';
import Book from '../../models/Book';

const router = Router();

// @route  GET api/books
// @desc   Get all saved books
// @access Public
router.get('/', async (req, res) => {
  try {
    const response = await Book.find();

    res.status(200).json(response);
  } catch (err) {
    res.status(404).json({ success: false, message: err.message });
  }
});

// @route  POST api/books
// @desc   Add a new saved book
// @access Public
router.post('/', async (req, res) => {
  try {
    interface BookTypes {
      title: string;
      authors: string[];
      description: string;
      image: string;
      link: string;
    }
    const { title, authors, description, image, link }: BookTypes = req.body;

    const newBook = new Book({ title, authors, description, image, link });

    newBook.save();

    res.status(200).json({ newBook });
  } catch (err) {
    res.status(404).json({ success: false, message: err.message });
  }
});

// @route  DELETE api/books/:_id
// @desc   Delete a book from the database using the mongo id
// @access Public
router.delete('/:_id', async (req, res) => {
  try {
    const { _id } = req.params;

    const response = await Book.findByIdAndDelete({ _id });

    res.status(200).json(response);
  } catch (err) {
    res.status(404).json({ success: false, message: err.message });
  }
});

export default router;
