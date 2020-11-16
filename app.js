const express = require("express");
const helmet = require("helmet");

const rawBody = require("./middleware/rawBody");
const mongoose = require("./middleware/mongoose");
const render = require("./middleware/render");

const { BIN_PORT } = require("./config");

const app = express();

const home = require("./routes/home");
const getSnippet = require("./routes/getSnippet");
const getRawSnippet = require("./routes/getRawSnippet");
const createSnippet = require("./routes/createSnippet");
const fork = require("./routes/fork");

app.use(helmet());
app.use(express.static(__dirname + "/public"));
app.use("/custom", express.static(__dirname + "/custom"));
app.use(express.urlencoded({ extended: true })); // parse formdata
app.use(express.json()); // parse JSON requests
app.use(rawBody());

app.use(mongoose());
app.use(render());

app.post("/fork", fork);
app.post(/^\/$|^\/c$/, createSnippet); // matches ["/", "/c"]
app.get("/:id", getSnippet);
app.get("/:id/raw", getRawSnippet);
app.get("/", home);
app.get("*", function (req, res) {
	res.status(404);
	return res.send('<code>Nothing here, go <a href="/">back!</a></code>');
});

app.listen(BIN_PORT, () => console.log("Listening on port", BIN_PORT));
