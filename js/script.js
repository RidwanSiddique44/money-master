document.getElementById('calculate-btn').addEventListener('click', function () {
    const foodCost = document.getElementById('food-cost');
    const foodAmount = parseFloat(foodCost.value);
    const rentCost = document.getElementById('rent-cost');
    const rentAmount = parseFloat(rentCost.value);
    const clothCost = document.getElementById('cloth-cost');
    const clothAmount = parseFloat(clothCost.value);
    const expenses = foodAmount + rentAmount + clothAmount;
    const totallExpenses = document.getElementById('totall-expenses');
    totallExpenses.innerText = expenses;
})
document.getElementById('save-button').addEventListener('click', function () {
    const incomeInput = document.getElementById('income-input');
    const incomeValue = parseFloat(incomeInput.value);
    const savingInput = document.getElementById('saving-input');
    const savingValue = parseFloat(savingInput.value);
    const totallSave = incomeValue * savingValue / 100;
    const savingAmount = document.getElementById('saving-amount');
    savingAmount.innerText = totallSave;
})