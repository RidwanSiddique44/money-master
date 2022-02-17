function getAmount(cost) {
    const amountInput = document.getElementById(cost);
    const amountValue = parseFloat(amountInput.value);
    if (isNaN(amountValue)) {
        console.log('error404');

    }
    else if (amountValue < 0) {
        console.log('error402');

    }
    else {
        return amountValue;
    }

}
function totallCount(income, value) {
    const remaining = income - value;
    return remaining;
}
document.getElementById('calculate-btn').addEventListener('click', function () {
    const incomeValue = getAmount('income-input');
    // const foodCost = document.getElementById('food-cost');
    const foodAmount = getAmount('food-cost');
    // parseFloat(foodCost.value);
    // const rentCost = document.getElementById('rent-cost');
    const rentAmount = getAmount('rent-cost');
    // parseFloat(rentCost.value);
    // const clothCost = document.getElementById('cloth-cost');
    const clothAmount = getAmount('cloth-cost');
    // parseFloat(clothCost.value);
    const expenses = foodAmount + rentAmount + clothAmount;
    const totallExpenses = document.getElementById('totall-expenses');
    totallExpenses.innerText = expenses;
    const balance = document.getElementById('balance');
    balance.innerText = totallCount(incomeValue, expenses);;

})
document.getElementById('save-button').addEventListener('click', function () {
    // const incomeInput = document.getElementById('income-input');
    const incomeValue = getAmount('income-input');
    // parseFloat(incomeInput.value);
    // const savingInput = document.getElementById('saving-input');
    const savingValue = getAmount('saving-input');
    // parseFloat(savingInput.value);
    const totallSave = incomeValue * savingValue / 100;
    const savingAmount = document.getElementById('saving-amount');
    savingAmount.innerText = totallSave;

})