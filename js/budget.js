
function getInputById(inputId) {
    const inputValue = document.getElementById(inputId);
    const inputValueAmount = parseFloat(inputValue.value);
    inputValue.value = '';
    return inputValueAmount;
};

function getElementById(elementId) {
    const elementValue = document.getElementById(elementId);
    const elementValueAmount = parseFloat(elementValue.innerText);
    return elementValueAmount;
};

document.getElementById('btn-calculation').addEventListener('click',()=>{
    const perPlayerSalary = getInputById('per-player');
    const playerExpenses = 5 * perPlayerSalary;
    // console.log(playerExpenses);

    const previousPlayerExpense = getElementById('player-expenses');
    const newPlayerExpense = previousPlayerExpense + playerExpenses;
    // console.log(newPlayerExpense);

    previousPlayerExpense.innerText = newPlayerExpense;


});