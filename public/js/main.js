var setViewportSize = function () {

    // Set the --vh and --vw custom property to the root of the document
    const vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty('--vh', `${vh}px`);
    const vw = window.innerWidth * 0.01;
    document.documentElement.style.setProperty('--vw', `${vw}px`);

};

function addTabs(e) {

    /* Can't bother: https://stackoverflow.com/a/18303822 */
    if (e.key === "Tab") { // tab was pressed
        // get caret position/selection
        var start = this.selectionStart;
        var end = this.selectionEnd;

        var target = e.target;
        var value = target.value;

        // set textarea value to:
        // text before caret + tab + text after caret
        target.value = value.substring(0, start)
            + '\t'
            + value.substring(end);

        // put caret at right position again (add one for the tab)
        this.selectionStart = this.selectionEnd = start + 1;

        // prevent the focus lose
        e.preventDefault();
    }

}

function handleKeybindings(e) {
    const binEditor = document.getElementsByClassName('binEditor')[0];

    if (e.ctrlKey) {
        if (binEditor && (e.key === "s")) {
            // Ctrl + S -> Save
            e.preventDefault();
            return document.getElementById('actionButton').click();
        } else if (e.key === "a") {
            // Ctrl + A -> Only select snippet, by default the footer is selected too
            // https://stackoverflow.com/a/987376
            e.preventDefault();
            let node = document.getElementById('snippet');
            if (document.body.createTextRange) {
                const range = document.body.createTextRange();
                range.moveToElementText(node);
                range.select();
            } else if (window.getSelection) {
                const selection = window.getSelection();
                const range = document.createRange();
                range.selectNodeContents(node);
                selection.removeAllRanges();
                selection.addRange(range);
            } else {
                console.warn("Could not select text in node: Unsupported browser.");
            }
            // return selection;
        }
        if (e.altKey) {
            if ((e.key === "n") || (e.key === "a")) {
                // Ctrl + Alt + {N|A} -> New
                e.preventDefault();
                return document.getElementById('newButton').click();
            }

            if (e.key === "f") {
                // Ctrl + Alt + F -> Fork
                e.preventDefault();
                return document.getElementById('actionButton').click();
            }
        }
    }
}

function hashLineNumber(e) {

    window.location.hash = e.target.id;

}

window.addEventListener(
    'load',
    function () {

        setViewportSize();
        window.addEventListener('resize', function () {
            setViewportSize();
        });

        document
            .querySelector('textarea')
            .addEventListener('keydown', addTabs, false);

        Array
            .from(document.getElementsByClassName('line-number'))
            .forEach(el => el.addEventListener('click', hashLineNumber));

        document
            .addEventListener('keydown', handleKeybindings);

    },
    false
);
