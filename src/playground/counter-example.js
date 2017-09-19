let count = 0;

const addOne = () => {
    count++;
    reRenderApp();
}
const minusOne = () => {
    count--;
    reRenderApp();
}
const reset = () => {
    count=0;
    reRenderApp();
}

function reRenderApp() {
    const templateTwo = (
        <div>
            <h1>Count: {count}</h1>
            <button onClick={addOne} className="button-add">+1</button>
            <button onClick={minusOne} className="button-minus">-1</button>
            <button onClick={reset} className="button-reset">Reset</button>        
        </div>    
    );

    ReactDOM.render(templateTwo, appRoot);
}

reRenderApp();