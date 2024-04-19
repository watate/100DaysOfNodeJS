const express = require("express");
const app = express();
const port = 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }))

app.post("/", (req, res) => {
    const params = req.params;
    const body = req.body;
    res.statusCode = 200;
    res.send(`POST is working. Param is ${JSON.stringify(params)}, body is ${JSON.stringify(body)}`);

})

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
})
