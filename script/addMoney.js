document.getElementById('add-money-btn').addEventListener('click', function (event) {

    event.preventDefault();

    const amount = document.getElementById("amount").value;
    const convertedAmount = parseFloat(amount);
    const pin = document.getElementById("pin-number").value;
    const convertedPin = parseInt(pin);
    const mainBalance = document.getElementById("main-balance").innerText;
    const convertedMainBalance = parseFloat(mainBalance);
    // const selectBank = document.getElementById("bank").value;

    if (amount && pin) {



        if (convertedPin === 1234) {

            const sum = convertedMainBalance + convertedAmount;
            document.getElementById("main-balance").innerText = sum;
            // after money added the main-balance will replace by sum

        } else {
            alert('Pin is Incorrect');
        }
    } else {
        alert('Enter amount')
    }


})