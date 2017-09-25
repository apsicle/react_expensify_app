import React from 'react'

import AddOption from './AddOption'
import Options from './Options'
import Header from './Header'
import Action from './Action'

class IndecisionApp extends React.Component {
    // class properties
    state = {
        options: []
    };
    
    handleDeleteOptions = () => {
        this.setState(() => ({ options: [] }))
    }
    handleDeleteOption = (optionToRemove) => {
        this.setState((prevState) => ({
            options: prevState.options.filter((option) => option !== optionToRemove)
        }))
    }
    handlePickOption = () => {
        let randNum = Math.floor(Math.random() * this.state.options.length);
        console.log(this.state.options[randNum]);
    }
    handleAddOption = (optionText) => {
        if (!optionText) {
            return 'Enter valid value to add item';
        } else if (this.state.options.indexOf(optionText) > -1) {
            return 'This option already exists';
        }

        this.setState((prevState) => ({ options: prevState.options.concat([optionText]) }));
    }

    componentDidMount() {
        // Lifecycle method - fires after render
        try {
            const json = localStorage.getItem('options');
            
            if (json) {
                // if there were previously set options, set them.
                const options = JSON.parse(json);
                this.setState(() => ({ options }))
            }
        } catch (e) {
            // do nothing at all, if there was an error in reading
            // the JSON, just default to default options.
        }

    }
    componentDidUpdate(prevProps, prevState) {
        // fires when component changes (doesn't check for 'real' change);
        if (prevState.options.length !== this.state.options.length) {
            const json = JSON.stringify(this.state.options);
            localStorage.setItem('options', json);
        }
    }
    componentWillUnmount() {
        // fires when component is about to go away
        console.log('componentWillUnmount');
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
                    handleDeleteOption={this.handleDeleteOption}
                />
                <AddOption handleAddOption={this.handleAddOption}/>  
            </div>
        );
    }
}

export default IndecisionApp;