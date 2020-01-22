// bring in all packages
const express = require('express');
const cors = require('cors');
const monk = require('monk');

const app = express();
app.use(cors());
app.use(express.json());

// establish link to db (either url or localhost)
const db = monk(process.env.MONGO_URI || 'localhost/books')
// const db = monk('admin:password@ds131551.mlab.com:31551/book-tracker' || 'localhost/books')

// get all books
const books = db.get('books');
// books.drop();


// handle get requests on main page
app.get('/', (req, res) => {
  res.json({
    message: 'Book Tracking App'
  });
});

// handle get requests for all books
app.get('/books', (req, res) => {
  books
    .find()
    .then(books => {
      res.json(books);
    });
});

const isValidBook = (book) => {
  return book.title && book.title.toString() !== '' &&
    book.author && book.author.toString() !== '' &&
    book.status && book.status.toString() !== '';
    // book.dateFinished && book.dateFinished.toString !== '';
}

// handle post requests for books
app.post('/books', (req, res) => {
  // take the request and insert it into the db if valid
  // first validate user input
  if (isValidBook(req.body)) {
    const book = {
      title: req.body.title.toString(),
      author: req.body.author.toString(),
      status: req.body.status.toString(),
      dateFinished: req.body.dateFinished.toString()
    }

    books
      .insert(book)
      .then(createdBook => {
        res.json(createdBook);
      });
  } else {
    res.status(422);
    res.json({
      message: 'Hey, please fill out all fields!'
    });
  }
});

// handle updates


// route for deleting books
app.delete('/book/:id', (req, res) => {
  let id = req.params.id;
  books.remove({ _id: id })
    .then(deletedBook => {
      res.json(deletedBook);
    })
})



app.listen(5000, () => {
  console.log('Listening on port 5000!');
});