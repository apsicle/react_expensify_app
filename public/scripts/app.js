"use strict";

console.log('App.js is runnin');

// JSX - Javascript XML
var app = {
    title: "Welcome to Your Indecision",
    subtitle: "Greeting, mortal",
    options: []
};

var onMakeDecision = function onMakeDecision() {
    var num = Math.floor(Math.random() * app.options.length);
    var option = app.options[num];
    console.log(option);
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
            { disabled: app.options.length > 0, onClick: onMakeDecision },
            "What should I do?"
        ),
        React.createElement(
            "button",
            { onClick: removeAllOptions },
            "Remove All Options"
        ),
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
