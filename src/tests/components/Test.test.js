import React from 'react';
import { shallow } from 'enzyme';

class TestComponent extends React.Component {
    constructor(props) {
        super(props);
        
    this.state = {
        description: 'asdf123'
      };
    }

    render() {
        return (
            <div>
                <p>{this.state.description}</p>
            </div>
        )
    }
}

test('asdf', () => {
    const wrapper = shallow(<TestComponent />);
    // console.log(wrapper.state().description); // cannot get property 'description' of undefined
    // console.log(wrapper.state()); // returns undefined
    expect(wrapper).toMatchSnapshot(); // I get <p>asdf123</p> in here, so state seems to be working?
});