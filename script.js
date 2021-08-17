
function bankCalculation(type, isAdd) {

    // input field
    const amountInput = document.getElementById(type + '-input');
    const amountInputText = amountInput.value;


    // clear input value
    amountInput.value = '';

    if (amountInputText > 0) {

        const InputAmountTotal = parseFloat(amountInputText);

        // balance total
        const balanceTotal = document.getElementById('balance-total');
        const balanceTotalText = balanceTotal.innerText;
        const previousBalanceTotalAmount = parseFloat(balanceTotalText);

        // amount update
        const amountTotal = document.getElementById(type + '-total');
        const amountTotalText = amountTotal.innerText;
        const previousAmountTotal = parseFloat(amountTotalText);

        // amount add or not with amount total
        if (type == 'withdraw' && previousBalanceTotalAmount >= InputAmountTotal || type == 'deposit') {

            const newAmountTotal = previousAmountTotal + InputAmountTotal;
            amountTotal.innerText = newAmountTotal;
        }

        // amount add or not with balance total
        if (isAdd == true) {
            const newBalanceTotalAmount = previousBalanceTotalAmount + InputAmountTotal;
            balanceTotal.innerText = newBalanceTotalAmount;
        } else {
            if (InputAmountTotal <= previousBalanceTotalAmount) {
                const newBalanceTotalAmount = previousBalanceTotalAmount - InputAmountTotal;
                balanceTotal.innerText = newBalanceTotalAmount;
            } else {
                console.log('not possible');
            }

        }

    }
}

// deposite event
document.getElementById('deposit-button').addEventListener('click', function () {

    /*  const depositInput = document.getElementById('deposit-input');
     const depositInputText = depositInput.value;
     const depositInputAmount = parseFloat(depositInputText); */

    bankCalculation('deposit', true);

    /*   const depositTotal = document.getElementById('deposit-total');
      const depositTotalText = depositTotal.innerText;
      const previousDepositTotalAmount = parseFloat(depositTotalText);
  
      const newDepositeTotalAmount = previousDepositTotalAmount + depositInputAmount;
      depositTotal.innerText = newDepositeTotalAmount; */

    //depositInput.value = '';

    /*   const balanceTotal = document.getElementById('balance-total');
     const balanceTotalText = balanceTotal.innerText;
     const previousBalanceTotalAmount = parseFloat(balanceTotalText);
 
     const newBalanceTotalAmount = previousBalanceTotalAmount + depositInputAmount;
     balanceTotal.innerText = newBalanceTotalAmount;  */

})

// withdraw event
document.getElementById('withdraw-button').addEventListener('click', function () {

    bankCalculation('withdraw', false);

    /*     const withdrawInput = document.getElementById('withdraw-input');
        const withdrawInputText = withdrawInput.value;
        const withdrawInputAmount = parseFloat(withdrawInputText); */

    /* const withdrawTotal = document.getElementById('withdraw-total');
    const withdrawTotalText = withdrawTotal.innerText;
    const previousWithdrawTotalAmount = parseFloat(withdrawTotalText);

    const newWithdrawTotalAmount = previousWithdrawTotalAmount + withdrawInputAmount;
    withdrawTotal.innerText = newWithdrawTotalAmount; */

    //withdrawInput.value = '';
    /* 
        const balanceTotal = document.getElementById('balance-total');
        const balanceTotalText = balanceTotal.innerText;
        const previousBalanceTotalAmount = parseFloat(balanceTotalText);
    
        const newBalanceTotalAmount = previousBalanceTotalAmount - withdrawInputAmount;
        balanceTotal.innerText = newBalanceTotalAmount; */

    //console.log(withdrawInputAmount);

})

