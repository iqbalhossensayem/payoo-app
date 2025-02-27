document.getElementById('cashout').style.display = "none";
// document.getElementById('add-money').style.display = "none";
document.getElementById('transaction-history').style.display = "none";

document.getElementById('add-money-box').addEventListener('click', function(){
     handleToggle('add-money' , "block")
     handleToggle('cashout' , "none")
     handleToggle('transaction-history' , 'none')
})

document.getElementById('cashout-box').addEventListener('click', function(){
    handleToggle('cashout' , "block")
    handleToggle('add-money' , "none")
    handleToggle('transaction-history' , 'none')
})



