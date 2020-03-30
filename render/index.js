const head = require('./components/head');
const body = require('./components/body');

module.exports = (m, render, {location, content = '', language}) => {

    return render(m('html',
        [
            head(m, {
                title: 'ツ𝖽𝗋𝗏𝗌𝗁',
                description: 'Lightweight pastebin alternative',
                keywords: ['pastebin', 'hastebin', 'notes'],
                styles: ['/css/style.css', '/custom/style.css']
            }),
            body(m, {
                location,
                content,
                language
            })
        ]
    ));

};
