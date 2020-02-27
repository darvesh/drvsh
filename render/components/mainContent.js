const highlight = require('./highlight');

module.exports = (m, { location, content, language }) => {
	language = language && [ language ];
	const isSnippet = location === 'snippet';
	const textArea =
		(isSnippet ? "code" : "textarea.binEditor")
			+ "#snippet.textarea"
			+ (language ? "." + language : "");
	const highlighted =
		isSnippet && (highlight(m, { content, language }));

	return m(
		"form#codeSnippet.container", { name: "codeSnippet", },
		[
			m(
				"#main.content",
				m(
					textArea,
					{
						name: "snippet",
						spellcheck: "false",
						"data-gramm": "false",
						...(!isSnippet && { autofocus: "true" }),
						...(isSnippet && { readOnly: "true" }),
					},
					highlighted || content
				)
			),
			(isSnippet &&
				m(
					'textarea#originalSnippet',
					{
						style: "display: none",
						readOnly: "true",
						name: "snippet",
						spellcheck: "false",
						"data-gramm": "false",
					},
					content
				)
			),
		]
	);
};
