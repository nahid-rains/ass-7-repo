document.getElementById('withdraw-btn').addEventListener('click', function(){
    
    const newWithdrawFieldAmount = getInputValueById('withdraw-field');
    const priviousWithdraw = getTextValueById('withdraw-total');
    const withdrawNow = newWithdrawFieldAmount + priviousWithdraw;

    setTextElementValueById('withdraw-total',withdrawNow);
    const myNewBalance = getTextValueById('balance-total');
    const afterCalBalance = myNewBalance - newWithdrawFieldAmount;

    setTextElementValueById('balance-total', afterCalBalance);
});