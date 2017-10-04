import { addExpense, editExpense, removeExpense } from '../../actions/expenses';
import moment from 'moment';

test('should return remove expense action object', () => {
    const action = removeExpense({ id: '12351531abc' });
    expect(action).toEqual({
        id: '12351531abc',
        type: 'REMOVE_EXPENSE'
    });
});

test('should return edit expense action object', () => {
    const action = editExpense('123abc', { description: 'this is a test', amount: '123' });
    expect(action).toEqual({
        type: 'EDIT_EXPENSE',
        id: '123abc',
        updates: { description: 'this is a test', amount: '123' }
    });
});

test('should return add expense action object with ARGUMENT values', () => {
    const expenseData = {
        description: 'Rent',
        amount: 109500,
        createdAt: 1000,
        note: 'This was last months rent'
    };
    const action = addExpense(expenseData);
    expect(action).toEqual({
        type: 'ADD_EXPENSE',
        expense: {
            ...expenseData,
            id: expect.any(String)
        }
    });
});

test('should return add expense action object with DEFAULT values', () => {
    const action = addExpense();
    expect(action).toEqual({
        type: 'ADD_EXPENSE',
        expense: {
            description: '',
            note: '',
            amount: 0,
            createdAt: expect.any(moment),
            id: expect.any(String)
        }
    });
});
