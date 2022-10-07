// Dati
const basePrice = 0.21;
const youngDiscount = 0.2;
const oldDiscount = 0.4;
let userPrice = 0;

const submitBtn = document.getElementById("submit");



// Submit al click del bottone
submitBtn.addEventListener("click", function() {
    // Prendo gli input
    const userDistance = parseInt( document.getElementById("userDistance") );
    const userAge =parseInt( document.getElementById("userAge") );
    console.log(userDistance, typeof(userDistance));
})