function getAmount(cost) {
    const amountInput = document.getElementById(cost);
    const amountValue = parseFloat(amountInput.value);
    if (isNaN(amountValue)) {
        document.getElementById('for-string').style.display = 'block';
        document.getElementById('for-negetive').style.display = 'none';

    }
    else if (amountValue < 0) {
        document.getElementById('for-negetive').style.display = 'block';
        document.getElementById('for-string').style.display = 'none';



    }
    else {
        document.getElementById('for-string').style.display = 'none';
        document.getElementById('for-negetive').style.display = 'none';
        return amountValue;
    }

}
function totallCount(income, value) {
    const remaining = income - value;
    return remaining;
}
function input() {
    const incomeValue = getAmount('income-input');

    const foodAmount = getAmount('food-cost');

    const rentAmount = getAmount('rent-cost');

    const clothAmount = getAmount('cloth-cost');

    const expenses = foodAmount + rentAmount + clothAmount;
    const totallExpenses = document.getElementById('totall-expenses');
    totallExpenses.innerText = expenses;
    if (incomeValue > expenses) {
        document.getElementById('for-greater').style.display = 'none';
        const remainingValue = totallCount(incomeValue, expenses);

        return remainingValue;
    }
    else {
        document.getElementById('for-greater').style.display = 'block';
        return 0;
    }



}
document.getElementById('calculate-btn').addEventListener('click', function () {
    const balance = document.getElementById('balance');

    balance.innerText = input();
})
document.getElementById('save-button').addEventListener('click', function () {

    const incomeValue = getAmount('income-input');

    const savingValue = getAmount('saving-input');

    const totallSave = incomeValue * savingValue / 100;
    const savingAmount = document.getElementById('saving-amount');
    savingAmount.innerText = totallSave;
    const prevBalance = input();
    const remainingBalance = document.getElementById('reamining-balance');

    if (prevBalance > totallSave) {
        document.getElementById('for-save').style.display = 'none';
        remainingBalance.innerText = totallCount(prevBalance, totallSave);

    }
    else {
        document.getElementById('for-save').style.display = 'block';
        remainingBalance.innerText = 0;
    }

})