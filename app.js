const express = require('express');
const helmet = require('helmet');

const rawBody = require('./middleware/rawBody');
const mongoose = require('./middleware/mongoose');
const render = require('./middleware/render');

const { BIN_PORT } = require("./config");

const app = express();

const home = require("./routes/home");
const getSnippet = require("./routes/getSnippet");
const getRawSnippet = require("./routes/getRawSnippet");
const createSnippet = require("./routes/createSnippet");
const fork = require("./routes/fork");

app.use(helmet());
app.use(express.static(__dirname + '/public'));
app.use('/custom', express.static(__dirname + '/custom'));
app.use(express.urlencoded({extended: true})); // parse formdata
app.use(express.json()); // parse JSON requests
app.use(rawBody());

app.use(mongoose());
app.use(render());

app.get("/:id/raw", getRawSnippet);

app.listen(BIN_PORT, () => console.log("Listening on port", BIN_PORT));
