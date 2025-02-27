document
    .getElementById('add-money-btn')
    .addEventListener('click', function (event) {
        event.preventDefault();
        const amount = getInputValueById("amount")
        const pin = getInputValueById('pin-number');
        const accountNumber = document.getElementById('Account-number').value;
        const mainBalance = getInnerTextById('main-balance')
        const selectBank=  document.getElementById('Bank').value;



        if (accountNumber.length === 11 && pin) {

            if (amount) {

                if(amount < 0 ){
                    alert('pls enter valid amount')
                    return;
                }

                if (pin === 1234) {

                    const sum = mainBalance + amount;
                    // document.getElementById('main-balance').innerText = sum ;

                    setInnerTextByIdAndValue('main-balance', sum)


                    const container = document.getElementById('transaction-container' );


                    // const p = document.createElement("p");
                    // p.innerText = `Added $ ${amount} from Account: ${accountNumber}`

                    // container.appendChild(p)


                    const div = document.createElement("div");

                    div.classList.add("bg-blue-500","text-white" , "text-center" , 'p-4', "mx-1" , 'rounded-md', 'mb-1')

                    div.innerHTML = `
                     <h1>Added Money From : ${ selectBank}</h1>
                     <h3> Amount : $ ${amount} </h3>
                     <p> Account Number: ${accountNumber} </p>

                    `

                    container.appendChild(div)
                    

                } else {
                    alert('pls enter correct pin');
                }
            } else {
                alert('Pls enter amount');
            }


        } else {
            alert('pls enter correct account number')
        }


    })


