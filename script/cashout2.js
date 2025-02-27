// document.getElementById('cashout-btn').addEventListener('click', function(event){

//     event.preventDefault();

//     const accountNumber= document.getElementById("Account-number")
    
// })



document
    .getElementById('cashout-btn')
    .addEventListener('click', function (event) {
        event.preventDefault();
        const amount = getInputValueById("cashout-amount")
        const pin = getInputValueById('c-pin-number');
        const accountNumber = document.getElementById('Account-number').value;
        const agentAccount = document.getElementById('c-account-number').value;
        const mainBalance = getInnerTextById('main-balance');
        
        



        if (agentAccount.length === 11 && pin) {

            if (amount) {



                if(amount < 0 ){
                    alert('pls enter valid amount')
                    return;
                }

                if (amount > mainBalance){
                    alert('Insufficient Balance');
                    return;
                }

                if (pin === 1234) {
    
                    const sum = mainBalance - amount;
                    // document.getElementById('main-balance').innerText = sum ;
    
                    setInnerTextByIdAndValue('main-balance', sum)


                    const container = document.getElementById('transaction-container' );
                    

                    // const p = document.createElement("p")
                    // p.innerText = `Cashout $ ${amount} from Account: ${accountNumber}` 

                    // container.appendChild(p)


                    const div = document.createElement("div");

                    div.classList.add("bg-blue-500","text-white" , "text-center" , 'p-4', "mx-1" , 'rounded-md', 'mb-1')

                    div.innerHTML = `
                     <h1>Cashout Money From : ${accountNumber} </h1>
                     <h3> Amount : $ ${amount} </h3>
                     <p>  Agent : ${agentAccount} </p>

                    `

                    container.appendChild(div)

    
                } else {
                    alert('pls enter correct pin');
                }
            } else {
               alert('pls enter amount')
            }
    


        } else {
            alert('PLS Enter Valid Agent Number');
        }

        
    })
