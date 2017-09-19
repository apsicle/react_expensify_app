const appRoot = document.getElementById('app');

let textHidden = true;

const renderText = () => {
    textHidden = !textHidden
    renderApp();
}

const renderApp = () => {
    const template = (
        <div>
            <h1>Visibility Toggle</h1>
            <button onClick={renderText}>{textHidden ? 'Show details' : 'Hide details'}</button>
    
            <p>{textHidden || 'This is some text'}</p>
            
    
        </div>
    )

    ReactDOM.render(template, appRoot);
}

renderApp();
