import uuid from 'uuid';
import database from '../firebase/firebase';

// @ACTION GENERATORS
const addExpense = (expense) => ({
    type: 'ADD_EXPENSE',
    expense
});

const startAddExpense = (expenseData = {}) => {
    return (dispatch, getState) => { // thunk library allows dispatch and getState to be passed here
        const uid = getState().auth.uid;
        const {
            description='', 
            note='', 
            amount=0, 
            createdAt=0
        } = expenseData;
        const expense = { description, note, amount, createdAt };
        
        return database.ref(`users/${uid}/expenses`).push(expense).then((ref) => {
            dispatch(addExpense({
                id: ref.key,
                ...expense
            }));
        });
    };
};

const removeExpense = ({ id } = {}) => ({
    type: 'REMOVE_EXPENSE',
    id
});

const startRemoveExpense = ({ id } = {}) => {
    return (dispatch, getState) => {
        const uid = getState().auth.uid;
        return database.ref(`users/${uid}/expenses/${id}`).remove().then(() => {
        dispatch(removeExpense({ id }));
        });
    };
};

const editExpense = (id, updates) => ({
    type: 'EDIT_EXPENSE',
    id,
    updates
});

const startEditExpense = (id, updates) => {
    return (dispatch, getState) => {
        const uid = getState().auth.uid;
        return database.ref(`users/${uid}/expenses/${id}`).update(updates).then(() => {
            dispatch(editExpense(id, updates));
        });
    };
};

// SET_EXPENSES
const setExpenses = (expenses) => ({
    type: 'SET_EXPENSES',
    expenses
});

// 1. Fetch all expense data once
// 2. PArse all that data into an array
// 3. dispatch set_expenses

const startSetExpenses = () => {
    return (dispatch, getState) => {
        const uid = getState().auth.uid;
        return database.ref(`users/${uid}/expenses`).once('value').then((snapshot) => {
            let expenses = []
            snapshot.forEach((childNode) => {
                expenses.push({ 
                    id: childNode.key, 
                    ...childNode.val() 
                })
            });

            dispatch(setExpenses(expenses));
        });
    }
}

export { startAddExpense, addExpense, removeExpense, startRemoveExpense, editExpense, startEditExpense, setExpenses, startSetExpenses };