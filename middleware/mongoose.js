const { BIN_MONGO_CSTRING } = require("../config");

module.exports = () => {
	const mongoose = require("mongoose");
	const connectionString = BIN_MONGO_CSTRING;
	mongoose.connect(connectionString, {
		useNewUrlParser: true,
		useUnifiedTopology: true,
	});

	const models = require("../model")(mongoose);
	return (req, res, next) => {
		req.mongoose = mongoose;
		req.models = models;
		next();
	};
};
