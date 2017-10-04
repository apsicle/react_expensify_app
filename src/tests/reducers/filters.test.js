import moment from 'moment';
import filtersReducer from '../../reducers/filters';

test('should setup default filter values', () => {
    const state = filtersReducer(undefined, { type: '@@INIT' });
    expect(state).toEqual({
        text: '',
        sortBy: 'date',
        startDate: moment().startOf('month'),
        endDate: moment().endOf('month'),
    });
});

test('should set sortBy to amount', () => {
    const state = filtersReducer(undefined, { type: 'SORT_BY_AMOUNT' });
    expect(state.sortBy).toBe('amount');
});

test('should set sortBy to date', () => {
    const currentState = {
        text: '',
        startDate: undefined,
        endDate: undefined,
        sortBy: 'amount'
    };
    const action = { type: 'SORT_BY_DATE' };
    const state = filtersReducer(currentState, action);
    expect(state.sortBy).toBe('date');
});

// should set text filter
test('should set text filter', () => {
    const currentState = {
        text: '',
        startDate: undefined,
        endDate: undefined,
        sortBy: 'amount'
    };
    const action = { type: 'SET_TEXT_FILTER', text: 'ayy lmao' };
    const state = filtersReducer(currentState, action);
    expect(state.text).toBe('ayy lmao');
});

// should set startDate filter
test('should set startDate filter', () => {
    const currentState = {
        text: '',
        startDate: undefined,
        endDate: undefined,
        sortBy: 'amount'
    };
    const action = { type: 'SET_START_DATE', startDate: moment().startOf('month') };
    const state = filtersReducer(currentState, action);
    expect(state.startDate.valueOf()).toBe(moment().startOf('month').valueOf());
});

// should set endDate filter
test('should set endDate filter', () => {
    const currentState = {
        text: '',
        startDate: undefined,
        endDate: undefined,
        sortBy: 'amount'
    };
    const action = { type: 'SET_END_DATE', endDate: moment().startOf('month') };
    const state = filtersReducer(currentState, action);
    expect(state.endDate.valueOf()).toBe(moment().startOf('month').valueOf());
});
