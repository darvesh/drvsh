const { customAlphabet } = require("nanoid");

const getRandom = (min = 1, max = 3) =>
	parseInt(Math.random() * (max - min) + min);
const generateUniqueURL = async req => {
	const URL =
		customAlphabet("ABCDEFGHIJKLMNOPQRSTUVWXYZ", getRandom())() +
		customAlphabet("1234567890", getRandom())();
	const exists = await req.models.snippets.exists({ URL });
	if (!exists) return URL;
	else generateUniqueURL();
};
module.exports = async (req, res) => {
	const content = req.rawText || req.body.snippet;
	if (!content) return res.redirect("/");
	const URL = await generateUniqueURL(req);
	req.models.snippets.create({ content, URL }).then(doc => {
		res.redirect(`/${doc.URL}`);
	});
};
