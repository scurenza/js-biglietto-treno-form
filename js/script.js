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
if (userAge < 18 ) {
    userPrice = basePrice * userDistance ;
    let userDiscountedPrice = ( userPrice - (userPrice * youngDiscount));

}

else if (userAge >= 65 ) {
    userPrice = basePrice * userDistance ;
    let userDiscountedPrice = ( userPrice - (userPrice * oldDiscount));
    console.log("Prezzo da troncare:",userDiscountedPrice);
    userDiscountedPrice = Math.trunc(userDiscountedPrice*100)/100;
    console.log("Prezzo troncato:",userDiscountedPrice);
}

else {
    userPrice = basePrice * userDistance ;
    let userDiscountedPrice = userPrice;
    console.log("Prezzo da troncare:",userDiscountedPrice);
    userDiscountedPrice = Math.trunc(userDiscountedPrice*100)/100;
    console.log("Prezzo troncato:",userDiscountedPrice);
}

console.log("Prezzo da troncare:",userDiscountedPrice);
userDiscountedPrice = Math.trunc(userDiscountedPrice*100)/100;
console.log("Prezzo troncato:",userDiscountedPrice);
});

