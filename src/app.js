import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import AppRouter from './routers/AppRouter';
import configureStore from './store/configureStore';
import { startSetExpenses } from './actions/expenses';
import { login, logout } from './actions/auth';
import getVisibleExpenses from './selectors/expenses';
import 'normalize.css/normalize.css';
import 'react-dates/lib/css/_datepicker.css';
import './styles/styles.scss';
import { firebase } from './firebase/firebase';
import { history } from './routers/AppRouter';
// import './playground/promises';

const store = configureStore();

// addExpense -> Water bill
// addExpense -> Gas bill
// setTextFilter -> bill
// getVisibleExpenses -> print visibles ones to screen
// store.dispatch(addExpense({ description: 'water bill', amount: 5000, createdAt: -1000, note: 'klappa'}));
// store.dispatch(addExpense({ description: 'alpha bill', amount: 1, createdAt: 1500}));
// store.dispatch(addExpense({ description: 'rent', amount: 40000}))

// console.log(getVisibleExpenses(store.getState().expenses, store.getState().filters));

const jsx = (
    <Provider store={store}>
        <AppRouter />
    </Provider>
);
let hasRendered = false;
const renderApp = () => {
    if (!hasRendered) {
        ReactDOM.render(jsx, document.getElementById('app'));
        hasRendered = true;
    }
};

ReactDOM.render(<p>Loading data from firebase...</p>, document.getElementById('app'));

firebase.auth().onAuthStateChanged((user) => {
    if (user) {
        store.dispatch(login(user.uid));
        store.dispatch(startSetExpenses()).then(() => {
            renderApp();
            if (history.location.pathname === '/') {
                history.push('/dashboard');
            }
        });
    } else {
        store.dispatch(logout());
        renderApp();
        history.push('/');
    }
});

