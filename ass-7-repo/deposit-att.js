document.getElementById('deposit-btn').addEventListener('click', function(){
    
    const newDepositAmount = getInputValueById('deposit-field');
    const previousDepositTotal = getTextValueById('current-total');
    const newDepositBalance = newDepositAmount + previousDepositTotal;

    setTextElementValueById('current-total',newDepositBalance);
    const myNewBalance = getTextValueById('balance-total');
    const finalBalance = myNewBalance + newDepositAmount;

    setTextElementValueById('balance-total',finalBalance);

});