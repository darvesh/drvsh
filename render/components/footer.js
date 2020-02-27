module.exports = (m, {isSnippet}) => {
	return m("footer", [
		m("div.footer-keybindings",
			m(
				"a#newButton.submit",
				{href: "/"},
				[
					"New snippet: Alt + Ctrl + N",
				],
			),
			m("code.footer-text",
				["|"]),
			m(
				"button#actionButton.submit",
				{
					type: "submit",
					formaction: isSnippet ? "fork" : "/",
					formenctype: "application/x-www-form-urlencoded",
					formmethod: "post",
				},
				isSnippet
					? ["Fork: Alt + Ctrl + F"]
					: ["Save: Alt + Ctrl + S"],
			),
		),

		m("code.footer-text", "mkr/bin |"),
		m("code.footer-text", [
			"Built by Muthu Kumar",
			m(
				"a",
				{
					href: "https://github.com/MKRhere",
					target: "blank"
				},
				"@MKRhere"
			),
			"| Fork me!"
		]),
		m(
			"a.footer-github",
			{
				href: "https://github.com/MKRhere/bin",
				target: "blank"
			},
		)
	]);
};
