let input = document.getElementById ("age");
console.log(input);

const age = parseInt(prompt('quanti anni hai?'));
const distance = parseInt(prompt('quanti chilometri devi percorrere?'));

if (isNaN(age) || isNaN(distance)) {
    console.log('uno dei due input non è un numero');
}

const pricekm = 0.21;
let prezzo= 0.21 * distance;
let message;

if (age < 18) {
   prezzo*= 0.8;
   console.log (prezzo);

} else if (age > 65) {
    prezzo*= 0.6;
    console.log (prezzo);
} 
message = 'il prezzo è' +prezzo;
document.getElementById ('message').innerHTML = 'il prezzo è' +prezzo;



