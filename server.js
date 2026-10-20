const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));

// Temporary storage: all added movies disappear when the server restarts.
const movies = [
  { id: 1, title: 'Interstellar', genre: 'Science Fiction', year: 2014 },
  { id: 2, title: 'Avengers: Endgame', genre: 'Action', year: 2019 },
  { id: 3, title: 'Coco', genre: 'Animation', year: 2017 }
];
let nextId = 4;

app.get('/api/movies', (req, res) => {
  res.json(movies);
});

app.get('/api/movies/:id', (req, res) => {
  const id = Number(req.params.id);
  const movie = movies.find((item) => item.id === id);
  if (!movie) {
    return res.status(404).json({ error: 'Movie not found' });
  }
  res.json(movie);
});

app.post('/api/movies', (req, res) => {
  const { title, genre, year } = req.body || {};

  if (typeof title !== 'string' || !title.trim() ||
      typeof genre !== 'string' || !genre.trim() ||
      year === undefined || year === null || year === '') {
    return res.status(400).json({ error: 'Title, genre, and year are required' });
  }

  const parsedYear = Number(year);
  if (!Number.isInteger(parsedYear) || parsedYear < 1888) {
    return res.status(400).json({ error: 'Year must be a valid integer (1888 or later)' });
  }

  const newMovie = {
    id: nextId++,
    title: title.trim(),
    genre: genre.trim(),
    year: parsedYear
  };

  movies.push(newMovie);
  res.status(201).json(newMovie);
});

app.listen(PORT, () => {
  console.log(`Movie Collection running at http://localhost:${PORT}`);
});
