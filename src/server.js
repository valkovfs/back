'use strict'

const express = require('express');
const cors = require('cors');
const helmet = require('helmet')
const bodyParser = require("body-parser");
const jwt = require('jsonwebtoken');
const app = express();
const PORT = process.env.PORT || 5000;
const socket = require('socket.io')

require('./config/db')

app.disable('x-powered-by')
app.use(cors())
app.use(helmet())
app.use(bodyParser.urlencoded({ extended:true }));
app.use(bodyParser.json());
app.use((req, res, next) => {
    if (req.headers && req.headers.authorization && req.headers.authorization.split(' ')[0] === 'JWT') {
        jwt.verify(req.headers.authorization.split(' ')[1],  'RESTfulAPIs', (err, decode) => {
            if (err) req.user = undefined;
            req.user = decode;
            next();
        });
    } else {
        req.user = undefined;
        next();
    }
});

app.get('/', (req, res) => {
    res.send("Hello World");
});

const routes = require('./api/routes/routes')
routes(app);

app.listen(PORT, () => {
    console.log(`Server started on port ${PORT}`)
})

