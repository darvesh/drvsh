const render = require("../render");

module.exports = async (req, res) => {
	const { models } = req;
	const [id, language] = (req.params.id || "").split(".");
	const doc = await models.snippets.findOne({ URL: id });
	return doc
		? render(req.mithril, req.render, {
				location: "snippet",
				content: doc.content,
				language,
		  }).then((html) => res.send(html))
		: res
				.status(404)
				.send('<code>Nothing here, go <a href="/">back!</a></code>');
};
