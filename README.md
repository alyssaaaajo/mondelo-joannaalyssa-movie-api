# Movie Collection REST API

A simple Node.js + Express REST API with an HTML frontend and temporary in-memory movie storage.

## Setup

Install [Node.js](https://nodejs.org/), then run:

```bash
npm install
npm start
```

Open **http://localhost:3000** in your browser. Do not open `index.html` directly as a local file: it needs the Express server.

## API

| Method | Endpoint | Description |
| --- | --- | --- |
| GET | `/api/movies` | Get all movies |
| GET | `/api/movies/:id` | Get one movie by ID; 404 if not found |
| POST | `/api/movies` | Add a movie; automatically assigns ID; 400 for invalid or missing required fields |

Example POST body:

```json
{ "title": "Inception", "genre": "Science Fiction", "year": 2010 }
```

Each movie includes `id`, `title`, `genre`, and `year`. The frontend lists movies, submits new movies using `fetch()`, and refreshes the table afterward.

**Note:** There is no database. New records disappear when the server restarts. The original three sample movies are restored.

## GitHub submission

Create a **public** GitHub repository named `lastname-firstname-movie-api` (replace `lastname` and `firstname` with your own names), then from the project folder run:

```bash
git init
git add .
git commit -m "Build Movie Collection REST API"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/lastname-firstname-movie-api.git
git push -u origin main
```

Replace `YOUR_USERNAME` and the repository name in the URL as appropriate. Submit **only the repository URL** to your instructor. `node_modules/` is excluded via `.gitignore`.
