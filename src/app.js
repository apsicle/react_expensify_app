// React Components - Reusable ES6 classes to React Components
class IndecisionApp extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            options: ['thing1', 'thing2', 'thing3']
        };
        this.handleDeleteOptions = this.handleDeleteOptions.bind(this);
        this.handlePickOption = this.handlePickOption.bind(this);
        this.handleAddOption = this.handleAddOption.bind(this);
    }
    
    handleDeleteOptions() {
        this.setState(() => {
            return {
                options: []
            };
        });
    }

    handlePickOption() {
        let randNum = Math.floor(Math.random() * this.state.options.length);
        console.log(this.state.options[randNum]);
    }

    handleAddOption(optionText) {
        if (!optionText) {
            return 'Enter valid value to add item';
        } else if (this.state.options.indexOf(optionText) > -1) {
            return 'This option already exists';
        }

        this.setState((prevState) => {
            return {
                options: prevState.options.concat([optionText])
            }
        })
    }

    render() {
        const title = 'Indecision';
        const subtitle = 'Whatever string we want';

        return (
            <div>
                <Header title={title} subtitle={subtitle}/>
                <Action handlePickOption={this.handlePickOption}
                hasOptions={this.state.options.length > 0}/> 
                <Options 
                    options={this.state.options}
                    handleDeleteOptions={this.handleDeleteOptions}
                />
                <AddOption handleAddOption={this.handleAddOption}/>  
            </div>
        );
    }
}

class Header extends React.Component {
    render() {
        return (
            <div>
                <h1>{this.props.title}</h1>
                <h2>{this.props.subtitle}</h2>
            </div>
        );
    }
}

class Action extends React.Component {
    render() {
        return (
            <div>
                <button
                    onClick={this.props.handlePickOption}
                    disabled={!this.props.hasOptions}
                >What should I do?</button>
            </div>
        );
    }
}

// Options 
class Options extends React.Component {
    render() {
        return (
            <div>
                <button onClick={this.props.handleDeleteOptions}>Remove All</button>
                {
                    this.props.options.map((option) => {
                        return <Option key={option} option={option} />
                    })
                }
            </div>
        );
    }
}

class Option extends React.Component {
    render() {
        return (
            <div>{this.props.option}</div>
        )
    }
}

// AddOption
class AddOption extends React.Component {
    constructor(props) {
        super(props);
        this.handleAddOption = this.handleAddOption.bind(this);
        this.state = {
            error: undefined
        };
    }
    handleAddOption(e) {
        e.preventDefault();

        const option = e.target.elements.optionText.value.trim();
        const error = this.props.handleAddOption(option); // if no error, this just
        // sets the state properly and returns undefined.

        this.setState(() => {
            return { error };
        });
    }

    render() {
        return (
            <div>
                {this.state.error && <p>{this.state.error}</p>}
                <form onSubmit={this.handleAddOption}>
                    <input type="text" name="optionText"/>
                    <button>Add Option</button>            
                </form>
            </div>
        )
    }
}

// In base JSX, we controlled re-rendering by adding the below statement to
// any button that would require the page to re-render.
// When we use React components, the render() methods of the classes are called
// automatically when we change the internal state using the REACT API CALL TO this.setState().
// with 'this' being a React Component instance method.
ReactDOM.render(<IndecisionApp />, document.getElementById('app'));