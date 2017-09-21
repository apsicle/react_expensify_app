class Counter extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            count: props.count
        };
        this.handleAddOne = this.handleAddOne.bind(this);
        this.handleMinusOne = this.handleMinusOne.bind(this);
        this.handleReset = this.handleReset.bind(this);
    }

    handleAddOne(e) {
        this.setState((prevState) => {
            return {
                count: prevState.count + 1
            };
        });
    }

    handleMinusOne(e) {
        this.setState((prevState) => {
            return {
                count: prevState.count - 1
            };
        });
    }

    handleReset(e) {
        this.setState((prevState) => {
            return {
                count: 0
            };
        });
    }
    
    render() {
        return (
            <div>
                <h1>Count: {this.state.count}</h1>
                <button onClick={this.handleAddOne}>+1</button>
                <button onClick={this.handleMinusOne}>-1</button>
                <button onClick={this.handleReset}>reset</button>
            </div>
        )
    }
}

Counter.defaultProps = {
    count: 0
}

ReactDOM.render(<Counter />, document.getElementById('app'));

// Above ^^^ React component method
// Below vvv Vanilla JSX version.

// let count = 0;

// const addOne = () => {
//     count++;
//     reRenderApp();
// }
// const minusOne = () => {
//     count--;
//     reRenderApp();
// }
// const reset = () => {
//     count=0;
//     reRenderApp();
// }

// function reRenderApp() {
//     const templateTwo = (
//         <div>
//             <h1>Count: {count}</h1>
//             <button onClick={addOne} className="button-add">+1</button>
//             <button onClick={minusOne} className="button-minus">-1</button>
//             <button onClick={reset} className="button-reset">Reset</button>        
//         </div>    
//     );

//     ReactDOM.render(templateTwo, appRoot);
// }

// reRenderApp();