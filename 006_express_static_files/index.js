const express = require('express');
const app = express();

const port = 3000;

app.use((req, res, next) => {
    console.log(`Logging the request here: ${req.url}, ${req.body}, ${req.paramss}`);
    next();
});

app.use(express.static('public'));

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});