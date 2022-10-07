// Dati
const basePrice = 0.21;
const youngDiscount = 0.2;
const oldDiscount = 0.4;
let userPrice = 0;

const submitBtn = document.getElementById("submit");

// Prendo gli input
let userDistanceInput = document.getElementById("userDistance");
let userAgeInput =document.getElementById("userAge");

// Submit al click del bottone
submitBtn.addEventListener("click", function() {
    // elaboro gli input
    let userDistance = parseInt(userDistanceInput.value);
    let userAge = parseInt(userAgeInput.value);
    console.log(userDistance, typeof(userDistance));
    console.log(userAge, typeof(userAge));

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

// Stampiamo a schermo il risultato
document.getElementById("result").innerHTML = userPrice;

});

