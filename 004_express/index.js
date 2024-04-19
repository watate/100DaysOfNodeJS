const express = require('express');
const app = express();
const port = 3000;

app.use((req, res, next) => {
    console.log("Request method: ", req.method);
    console.log("Request URL: ", req.url);
    next();
});

app.get("/", (req, res) => {
    res.send("Hello World!");
});

app.get("/about", (req, res) => {
    res.send("About!!!!");
});

app.get("/json", (req, res) => {
    res.send(JSON.stringify({
        name: "Express",
        type: "framework"
    }));
});

app.use((req, res) => {
    res.status(404).send("Sorry we couldn't find that!");
})

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
})