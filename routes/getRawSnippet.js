module.exports = async (req, res) => {
	const { models } = req;
	const id = req.params.id;
	const doc = await models.snippets.findOne({ URL: id });
	if (!doc) {
		res.status(404);
		return res.send('<code>Nothing here, go <a href="/">back!</a></code>');
	}
	res.writeHead(200, { "Content-Type": "text/plain; charset=utf-8" });
	res.end(doc.content);
};
