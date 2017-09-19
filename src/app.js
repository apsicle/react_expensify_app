console.log('App.js is runnin');

// JSX - Javascript XML
const app = {
    title: "Welcome to Your Indecision",
    subtitle: "Greeting, mortal",
    options:  []
};

const appRoot = document.getElementById('app');

const onFormSubmit = (e) => {
    // e is event data sent in automatically by form submit events
    e.preventDefault();

    const option = e.target.elements.option.value;

    if (option) {
        app.options.push(option);
        e.target.elements.option.value = '';
        renderApp();
    }
};

const removeAllOptions = () => {
    app.options = [];
    renderApp();
}

const renderApp = () => {
    const template = (
        <div>
            <h1>{app.title}</h1>
            {app.subtitle && <p>{app.subtitle}</p>}
            {(app.options ? app.options.length > 0 : app.options) ? <p>These are your options</p> : <p>No options</p>}
            <p>{app.options.length}</p>
            <button onClick={removeAllOptions}>Remove All Options</button>
            {
                [<p key="1">a</p>, <p key="2">b</p>, <p key="3">c</p>]
            }
            {app.options.length > 0 && (
                <ol>
                {app.options.map((optionText, index) => <li key={String(index)}>{optionText}</li>)}
                </ol>
            )}
            <ol>
                <li>test 1</li>
                <li>test 2</li>
            </ol>
            <form onSubmit={onFormSubmit}>
                <input type="text" name="option"/>
                <button>Add Option</button>
            </form>
        </div>
    );

    ReactDOM.render(template, appRoot);
}

renderApp();

