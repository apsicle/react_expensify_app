// Export a stateless functional component
// description, amount, createdAt

import React from 'react';
import { Link } from 'react-router-dom';
import moment from 'moment';
import numeral from 'numeral';

const ExpenseListItem = ({ description, amount, createdAt, note, id }) => (
    <Link className="list-item" to={`/edit/${id}`}>
        <div>
            <h3 className="list-item__description">{description}</h3>            
            <p className="list-item__sub-title">{moment(createdAt).format('MMMM Do, YYYY')}</p>
            <p className="list-item__sub-title">{note}</p>    
        </div>
        <h3 className="list-item__amount">{numeral(amount / 100).format('$0,0.00')}</h3>
    </Link>
);

export default ExpenseListItem;