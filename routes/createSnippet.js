const { generateUniqueURL } = require("../utils.js");
const { URL: DOMAIN } = require("../config");

module.exports = async (req, res) => {
	const content = req.rawText || req.body.snippet;
	const cmd = req.path === "/c";
	if (!content)
		return cmd ? res.send("Request body is empty\n") : res.redirect("/");
	const URL = await generateUniqueURL(req);
	const doc = await req.models.snippets.create({ content, URL });
	return cmd ? res.send(`${DOMAIN}/${doc.URL}\n`) : res.redirect(`/${doc.URL}`);
};
