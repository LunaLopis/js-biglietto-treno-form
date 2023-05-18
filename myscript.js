// let input = document.getElementById ("age");
// console.log(input);

// const age = parseInt(prompt('quanti anni hai?'));
// const distance = parseInt(prompt('quanti chilometri devi percorrere?'));

// if (isNaN(age) || isNaN(distance)) {
//     console.log('uno dei due input non è un numero');
// }

// const pricekm = 0.21;
// let prezzo= 0.21 * distance;
// let message;

// if (age < 18) {
//    prezzo*= 0.8;
//    console.log (prezzo);

// } else if (age > 65) {
//     prezzo*= 0.6;
//     console.log (prezzo);
// } 
// message = 'il prezzo è' +prezzo;
// document.getElementById ('message').innerHTML = 'il prezzo è' +prezzo;

document.getElementById("generate").addEventListener("click", function () {
    console.log("ciao");
    let age = document.getElementById("age").value;
    let km = document.getElementById("km").value;
    let nome = document.getElementById("nome").value;
    console.log(age, km, nome);

    const pricekm = 0.21;
    let prezzo = 0.21 * km;
    let message;
    if (age < 18) {
        prezzo *= 0.8;
        console.log(prezzo);
    } else if (age > 65) {
        prezzo *= 0.6;
        console.log(prezzo);
    } else {
        console.log(prezzo);
    }
    let finalprice = document.getElementById("finalprice").innerHTML = prezzo.toFixed(2);
    let nomeutente = document.getElementById("nomeutente").innerHTML = document.getElementById("nome").value;
})

let cancel = document.getElementById("cancel");
cancel.addEventListener("click", function () {
    console.log("annulla");
    document.getElementById("age").value = "";
    console.log(document.getElementById("age"));
    console.log();
    document.getElementById("km").value = "";
    console.log(document.getElementById("age"));
    console.log();
})





