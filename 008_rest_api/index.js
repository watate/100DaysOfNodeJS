require('dotenv').config();
const express = require('express');
const { MongoClient, ObjectId } = require('mongodb');
const app = express();
const port = 3000;

// http://localhost:3000/movies/573a1390f29313caabcd42e8

const client = new MongoClient(process.env.MONGO_URI);

client.connect()
  .then(() => console.log('Connected to MongoDB'))
  .catch(err => console.error('Failed to connect to MongoDB', err));

app.get("/movies/:id", async (req, res) => {
    try {
        
        const movieId = req.params.id;
        const database = client.db('sample_mflix');
        const movies = database.collection('movies');
        const query = { _id: new ObjectId(movieId)};
        console.log(query);
        const movie = await movies.findOne(query);

        res.json(movie);
    } catch (err) {
        console.log(err);
        res.status(500).send("Error occured");
    }
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
})