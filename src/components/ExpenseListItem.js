// Export a stateless functional component
// description, amount, createdAt

import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { removeExpense } from '../actions/expenses';

const ExpenseListItem = ({ description, amount, createdAt, note, dispatch, id }) => (
    <div>
        <Link to={`/edit/${id}`}>
            <h3>{description}</h3>    
        </Link>
        <p>{amount}</p>
        <p>{createdAt}</p>
        <p>{note}</p>
        <button onClick={() => {
            dispatch(removeExpense({ id }))
        }}>Remove</button>
    </div>
)

export default connect()(ExpenseListItem);