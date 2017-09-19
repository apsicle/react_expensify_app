"use strict";

console.log('App.js is runnin');

// JSX - Javascript XML
var app = {
    title: "Welcome to Your Indecision",
    subtitle: "Greeting, mortal",
    options: []
};

var appRoot = document.getElementById('app');

var onFormSubmit = function onFormSubmit(e) {
    // e is event data sent in automatically by form submit events
    e.preventDefault();

    var option = e.target.elements.option.value;

    if (option) {
        app.options.push(option);
        e.target.elements.option.value = '';
        renderApp();
    }
};

var removeAllOptions = function removeAllOptions() {
    app.options = [];
    renderApp();
};

var renderApp = function renderApp() {
    var template = React.createElement(
        "div",
        null,
        React.createElement(
            "h1",
            null,
            app.title
        ),
        app.subtitle && React.createElement(
            "p",
            null,
            app.subtitle
        ),
        (app.options ? app.options.length > 0 : app.options) ? React.createElement(
            "p",
            null,
            "These are your options"
        ) : React.createElement(
            "p",
            null,
            "No options"
        ),
        React.createElement(
            "p",
            null,
            app.options.length
        ),
        React.createElement(
            "button",
            { onClick: removeAllOptions },
            "Remove All Options"
        ),
        [React.createElement(
            "p",
            { key: "1" },
            "a"
        ), React.createElement(
            "p",
            { key: "2" },
            "b"
        ), React.createElement(
            "p",
            { key: "3" },
            "c"
        )],
        app.options.length > 0 && React.createElement(
            "ol",
            null,
            app.options.map(function (optionText, index) {
                return React.createElement(
                    "li",
                    { key: String(index) },
                    optionText
                );
            })
        ),
        React.createElement(
            "ol",
            null,
            React.createElement(
                "li",
                null,
                "test 1"
            ),
            React.createElement(
                "li",
                null,
                "test 2"
            )
        ),
        React.createElement(
            "form",
            { onSubmit: onFormSubmit },
            React.createElement("input", { type: "text", name: "option" }),
            React.createElement(
                "button",
                null,
                "Add Option"
            )
        )
    );

    ReactDOM.render(template, appRoot);
};

renderApp();
