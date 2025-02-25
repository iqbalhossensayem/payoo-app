// step - 1 = id ke dhorechi
document.getElementById("login-btn").addEventListener("click", function (event) {
    event.preventDefault(); // to stop refresh when click in login button 
    const accountNumber = document.getElementById("Account-number").value;
    const pin = document.getElementById("pin-number").value;
    // console.log(typeof pin);  here pin is a string , so we need to convert it into a number or we convert 1234 to a string .
    const convertedPin = parseInt(pin)

    if (accountNumber.length === 11) {

       
        if (convertedPin === 1234) {
            window.location="./main.html"  // after click on the button , to open a new page we use this
           
        }
         else {
            alert('pls enter correct pin');
        }


    } else {
        alert('pls enter a valid account number');
    }
    
})