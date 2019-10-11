import { config } from 'dotenv';
import express from 'express';
import mongoose from 'mongoose';
import path from 'path';
import booksRouter from './routes/api/books';

const app = express();
const PORT = process.env.PORT || 5000;
config();

// Connect to MongoDB
const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://localhost/googleBooksSearch';

// API Routes
app.use('/api/books', booksRouter);

// Serve static assets in production
if (process.env.NODE_ENV === 'production') {
  app.use(express.static('client/build'));

  // Direct all routes to react app
  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
  });
}

// Connect to database
mongoose
  .connect(MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() =>
    console.log(MONGODB_URI === process.env.MONGODB_URI ? 'mlab connected' : 'local mongoDB connected...')
  )
  .catch(err => console.log(err));

// Start server
app.listen(PORT, () => console.log(`Server running on port: ${PORT}`));
