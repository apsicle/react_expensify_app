import selectExpenses from '../../selectors/expenses';
import moment from 'moment'
import expenses from '../fixtures/expenses';

test('should filter by text value', () => {
    const filters = {
        text: 'card',
        sortBy: 'date',
        startDate: undefined,
        endDate: undefined
    };
    
    const result = selectExpenses(expenses, filters);
    expect(result).toEqual([expenses[2]]);
});

test('should filter by start Date', () => {
    const filters = {
        text: '',
        sortBy: 'date',
        startDate: moment(0),
        endDate: undefined
    };
    
    const result = selectExpenses(expenses, filters);
    expect(result).toEqual([expenses[2], expenses[0]]);
});

// should filter by endDate
test('should filter by end Date', () => {
    const filters = {
        text: '',
        sortBy: 'date',
        startDate: undefined,
        endDate: moment(0)
    };
    
    const result = selectExpenses(expenses, filters);
    expect(result).toEqual([expenses[0], expenses[1]]);
});

// should sort by date
test('should filter by date', () => {
    const filters = {
        text: '',
        sortBy: 'date',
        startDate: undefined,
        endDate: undefined
    };
    
    const result = selectExpenses(expenses, filters);
    expect(result).toEqual([expenses[2], expenses[0], expenses[1]]);
});

// should sort by amount
test('should filter by amount', () => {
    const filters = {
        text: '',
        sortBy: 'amount',
        startDate: undefined,
        endDate: undefined
    };
    
    const result = selectExpenses(expenses, filters);
    expect(result).toEqual([expenses[2], expenses[0], expenses[1]]);
});
