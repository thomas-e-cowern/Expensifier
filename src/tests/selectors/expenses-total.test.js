import selectExpensesTotal from '../../selctors/expenses-total';
import expenses from '../fixtures/expenses';

test('Should return 0 if no expense', () => {
    const res = selectExpensesTotal([]);
    expect(res).toBe(0);
});

test('Should add up a single expense'. () => {
    const res = selectExpensesTotal([expenses[0]]);
    expect(res).toBe(195);
});

test('Should add up a multiple expense'. () => {
    const res = selectExpensesTotal(expenses);
    expect(res).toBe(114195);
});