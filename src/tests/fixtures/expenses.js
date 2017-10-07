import moment from 'moment';

const expenses = [{
    id: '1',
    description: 'cluck me',
    note: 'Really good',
    amount: 2050,
    createdAt: 0
}, {
    id: '2',
    description: 'Yesterdays meat',
    note: '',
    amount: 500,
    createdAt: moment(0).subtract(4, 'days').valueOf()
}, {
    id: '3',
    description: 'Credit card',
    note: '',
    amount: 4500,
    createdAt: moment(0).add(4, 'days').valueOf()
}];

export default expenses;