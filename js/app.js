'use strict';

function calculateTotalProfit(depositAmount, period) {
    let percentEl = document.getElementById('percent')
    if (period < 6) {
        percentEl = 2;
    }
    else if (period < 9) {
        percentEl = 2.2;
    }
    else if (period < 12) {
        percentEl = 2.3
    }
    else if (period <= 18) {
        percentEl = 2.6
    }
    const profit = depositAmount * percentEl / 100 * (period / 12);
    const totalProfit = depositAmount + profit;

    return {
        profit,
        totalProfit,
        percentEl,
    };
}

function handleSubmit(evt) {
    evt.preventDefault();

    totalEl.textContent = '';
    profitEl.textContent = '';
    percentEl.textContent = '';

    const depositAmount = Number(depositAmountInputEl.value);
    const period = Number(periodInputEl.value);

    const result = calculateTotalProfit(depositAmount, period);
    totalEl.textContent = result.totalProfit.toFixed(0);
    profitEl.textContent = result.profit.toFixed(0);
    percentEl.textContent = result.percentEl.toFixed(1);

}

const formEl = document.getElementById('deposit-form');
//formEl.onsubmit = handleSubmit;
formEl.addEventListener('submit', handleSubmit);
formEl.addEventListener('submit', handleSubmit, true);
formEl.addEventListener('submit', handleSubmit, {capture:true});

const depositAmountInputEl = document.getElementById( 'amount-input');
const periodInputEl = document.getElementById('period-input');
const totalEl = document.getElementById('total');
const profitEl = document.getElementById('profit');
const percentEl = document.getElementById('percent');