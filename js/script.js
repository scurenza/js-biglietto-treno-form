// Dati
const basePrice = 0.21;
const youngDiscount = 0.2;
const oldDiscount = 0.4;
let userPrice = 0;

const submitBtn = document.getElementById("submit");
const cancelBtn = document.getElementById("cancel");

// Prendo gli input
let userDistanceInput = document.getElementById("userDistance");
let userAgeInput = document.getElementById("userAge");
let userNameInput = document.getElementById("userNameInput");

// Submit al click del bottone submitBtn
submitBtn.addEventListener("click", function() {
    // elaboro gli input
    let userDistance = parseInt(userDistanceInput.value);
    let userAge = parseInt(userAgeInput.value);
    let userName = userNameInput.value;
    let unicCode = Math.trunc( (Math.random() * (10000 - 1 + 1) + 1));
    console.log(userDistance, typeof(userDistance));
    console.log(userAge, typeof(userAge));
    console.log(userName, typeof(userName));

    // Elaborazione ed output
    userPrice = basePrice * userDistance ;

if (userAge < 18 ) {
    userPrice = ( userPrice - (userPrice * youngDiscount));
    userPrice = Math.trunc(userPrice*100)/100; 
}

else if (userAge >= 65 ) {
    userPrice = ( userPrice - (userPrice * oldDiscount));
    userPrice = Math.trunc(userPrice*100)/100; 
}

else {
    userPrice = Math.trunc(userPrice*100)/100; 
}


// Ripulisco l'input
userDistanceInput.value = "";
userAgeInput.value = "";
userNameInput.value ="";


// Stampiamo a schermo il risultato
if (document.getElementById('currency').value === 'euro') {
    document.getElementById("result").innerHTML = userPrice + '€';
    }

if (document.getElementById('currency').value === 'pound') {
document.getElementById("result").innerHTML = (Math.trunc( (userPrice * 0.88)*100)/100) + '£';
}

if (document.getElementById('currency').value === 'dollar') {
    document.getElementById("result").innerHTML = (Math.trunc( (userPrice * 0.98)*100)/100) + '$';
    }

if (document.getElementById('userNameInput').value != 0 ) {
    document.getElementById('UserName').innerHTML = userName;
}

if (userNameInput.lenght != 0) {
    document.getElementById('userName').innerHTML = userName;
    document.getElementById('unicCode').innerHTML = unicCode;
}
// Ripulisco campo valuta
currency.value = "";
});

// Submit al click del bottone cancelBtn
cancelBtn.addEventListener("click", function() {
    // Ripulisco campi
    userDistanceInput.value = "";
    userAgeInput.value = "";
    currency.value = "";
});

