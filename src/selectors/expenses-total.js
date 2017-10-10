const getTotalExpense = (expenses) => {
    let result = 0;
    expenses.forEach((expense) => {
        result += expense.amount;
    });
    return result;
}

export default getTotalExpense;