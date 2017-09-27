import React from 'react'

const Option = (props) => (
    <div>
        {props.option}
        <button onClick={(e) => { // this e is not needed. anon fucntion for passing arg
            props.handleDeleteOption(props.option)
        }}>Remove</button>
    </div>
)

export default Option;