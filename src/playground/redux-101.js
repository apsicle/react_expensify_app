import { createStore } from 'redux';

// Action Generators

const incrementCount = ({ incrementBy = 1 } = {}) => ({
    type: 'INCREMENT',
    incrementBy
})

const decrementCount = ({ decrementBy = 1 } = {}) => ({
    type: 'DECREMENT',
    decrementBy
})

const setCount = ({ count = 0 }) => ({
    type: 'SET',
    count
})

const resetCount = () => ({
    type: 'RESET',
})

// Reducer.
// 1. Reducers are pure functions. The output is completely deterministic by the input. Like math.
// 2. No side-effects. Doesn't change anything outside the function scope.

const countReducer = (state = { count: 0 }, action) => {
    switch (action.type) {
        case 'INCREMENT':
            const incrementBy = typeof action.incrementBy === 'number' ? action.incrementBy : 1;
            return {
                count: state.count + incrementBy
            };
        case 'DECREMENT':
            const decrementBy = typeof action.decrementBy === 'number' ? action.decrementBy : 1;
            return {
                count: state.count - decrementBy
            };
        case 'SET':
            return {
                count: action.count
            }
        case 'RESET':
            return {
                count: 0
            }
        default:
            return state;
    }
}

const store = createStore(countReducer);

const unsubscribe = store.subscribe(() => {
    console.log(store.getState());    
});

store.dispatch(incrementCount({incrementBy: 50}));

store.dispatch(decrementCount({decrementBy: 25}));

store.dispatch(setCount({count: 69}));

store.dispatch(resetCount());
