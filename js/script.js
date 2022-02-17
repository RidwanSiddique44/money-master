// ------------ validation Check ------------- //
function getValue(cost) {
    const amountInput = document.getElementById(cost);
    const amountValue = parseFloat(amountInput.value);

    if (isNaN(amountValue)) {
        document.getElementById('for-string').style.display = 'block';
        document.getElementById('for-negetive').style.display = 'none';
        console.log(click)


    }
    else if (amountValue < 0) {
        document.getElementById('for-negetive').style.display = 'block';
        document.getElementById('for-string').style.display = 'none';
        console.log(click)


    }
    else {
        document.getElementById('for-string').style.display = 'none';
        document.getElementById('for-negetive').style.display = 'none';
        return amountValue;
    }

}
// ------------ Remaining calculation ------------- //
function calculate(bigValue, smallValue) {
    const remaining = bigValue - smallValue;
    return remaining;
}

// ------------ Expence & Balance Count ------------- //
function remain() {
    const foodAmount = getValue('food-cost');

    const rentAmount = getValue('rent-cost');

    const clothAmount = getValue('cloth-cost');
    const expenses = foodAmount + rentAmount + clothAmount;
    const totallExpenses = document.getElementById('totall-expenses');
    totallExpenses.innerText = expenses;
    const incomeValue = getValue('income-input');
    if (incomeValue > expenses) {
        document.getElementById('for-logic').style.display = 'none';
        const remainingValue = calculate(incomeValue, expenses);
        return remainingValue;
    }

    else {
        document.getElementById('for-logic').style.display = 'block';
        return 0;
    }
}
// ------------ Calculate Button Listener ------------- //
document.getElementById('calculate-btn').addEventListener('click', function () {
    const balance = document.getElementById('balance');
    balance.innerText = remain();
})
// ------------ saving Count & Button Listener ------------- //
document.getElementById('save-button').addEventListener('click', function () {
    const incomeValue = getValue('income-input');
    const savingValue = getValue('saving-input');
    const totallSave = incomeValue * savingValue / 100;
    const savingAmount = document.getElementById('saving-amount');
    savingAmount.innerText = totallSave;
    const previousBalance = remain();
    const remainingBalance = document.getElementById('remaining-balance');

    if (previousBalance > totallSave) {
        document.getElementById('for-save').style.display = 'none';
        remainingBalance.innerText = calculate(previousBalance, totallSave);

    }
    else {
        document.getElementById('for-save').style.display = 'block';
        remainingBalance.innerText = 0;
    }

})

