'use strict';

function calculateTotalProfit(depositAmount, period) {
    let percentEl = document.getElementById('percent');
        if (period < 6) {
        percentEl = 2;
        } else if (period < 9) {
        percentEl = 2.2;
        } else if (period < 12) {
        percentEl = 2.3;
        } else if (period < 18) {
        percentEl = 2.6;
        } else if (period === 18) {
        percentEl = 2.7;
        }
    const profit = depositAmount * ((1 + percentEl * 1 / 12 / 100) ** (period)) - depositAmount;
    const totalProfit = depositAmount + profit;

    return {
        profit,
        totalProfit,
        percentEl,
    };
}

function handleSubmit(evt) {
    evt.preventDefault();

    depositAmountErrorEl.textContent = '';
    periodErrorEl.textContent = '';
    totalEl.textContent = '';
    profitEl.textContent = '';
    percentEl.textContent = '';

    const depositAmount = Number(depositAmountInputEl.value);
    if (Number.isNaN(depositAmount)) {
        depositAmountErrorEl.textContent = 'Неверное значение. Введите число, например: 15000';
        return;
    }
    if (depositAmount < 15000) {
        depositAmountErrorEl.textContent = 'Неверное значение. Минимальная сумма: 15000 ₽';
        return;
    }
    if (depositAmount > 50000000) {
        depositAmountErrorEl.textContent = 'Неверное значение. Максимальная сумма: 50000000 ₽';
        return;
    }

    const period = Number(periodInputEl.value);
    if (Number.isNaN(period)) {
        periodErrorEl.textContent = 'Неверное значение. Введите число месяцев, например: 3';
        return;
    }
    if (period < 3) {
        periodErrorEl.textContent = 'Неверное значение. Минимальный период: 3 месяца';
        return;
    }
    if (period > 18) {
        periodErrorEl.textContent = 'Неверное значение. Максимальный период: 18 месяцев';
        return;
    }
    const result = calculateTotalProfit(depositAmount, period);
    totalEl.textContent = result.totalProfit.toFixed(0);
    profitEl.textContent = result.profit.toFixed(0);
    percentEl.textContent = result.percentEl.toFixed(1);

}

const formEl = document.getElementById('deposit-form');
formEl.addEventListener('submit', handleSubmit);
formEl.addEventListener('submit', handleSubmit, true);
formEl.addEventListener('submit', handleSubmit, {capture:true});

const depositAmountInputEl = document.getElementById( 'amount-input');
const periodInputEl = document.getElementById('period-input');
const totalEl = document.getElementById('total');
const profitEl = document.getElementById('profit');
const percentEl = document.getElementById('percent');
const depositAmountErrorEl = document.getElementById('amount-error');
const periodErrorEl = document.getElementById('period-error');