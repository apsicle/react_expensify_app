import getTotalExpense from '../../selectors/expenses-total';
import expenses from '../fixtures/expenses';

test('should return the sum of all expense object amount properties', () => {
    const result = getTotalExpense(expenses)
    expect(result).toBe(7050);
});

test('should return 0 if there are no expenses', () => {
    const result = getTotalExpense([])
    expect(result).toBe(0);
});