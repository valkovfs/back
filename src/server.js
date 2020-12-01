'use strict'


const express = require('express');
const cors = require('cors');
const bodyParser = require("body-parser");

const app = express();
const PORT = process.env.PORT || 5000;

const routes = require('./api/routes/requestRoutes')
require('./config/db')

app.use(cors());
app.use(bodyParser.urlencoded({ extended:true }));
app.use(bodyParser.json());

app.get('/', (req, res) => {
    res.send("Hello World");
});

routes(app)

app.listen(PORT, () => {
    console.log(`Server started on port ${PORT}`)
})

