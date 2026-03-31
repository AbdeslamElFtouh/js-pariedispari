//==============================================================================================
// FUNZIONI
//==============================================================================================

// Funzione che genera un numero randomico da 1 a x
function numero_randomico_positivo(num){
    let random_num = (Math.floor(Math.random() * num) + 1) ;
    return random_num;
}

// Funzione SOMMA
function somma (a, b){
    let somma = a + b;
    return somma;
    
}

//Funzione PARITA'
function parità (a) {
    if (a % 2 === 0){
        return 'pari';
    } else {
        return 'dispari';
    }
}

function confronto (a,b) {
    if (a === b){
        return 'Hai Vinto!!';
    } else {
        return 'Hai perso...';
    }
}
//==============================================================================================
// MAIN
//==============================================================================================

let scelta_parità_user;
// Validazione della parità scelta dall'utente
do {
    scelta_parità_user = prompt("Scegli: pari o dispari?").toLowerCase();
} while (scelta_parità_user !== "pari" && scelta_parità_user !== "dispari");
alert("Hai scelto: " + scelta_parità_user);


let numero_user;
// Validazione del numero scelto dall'utente
do {
    numero_user = parseInt(prompt("Inserisci un numero da 1 a 5:"));
} while (numero_user < 1 || numero_user > 5 || isNaN(numero_user));
alert("Hai scelto: " + numero_user);

let numero_computer = numero_randomico_positivo(5);
console.log(numero_computer);


let somma_corrente = somma(numero_user, numero_computer);
console.log(somma_corrente);


let risultato_parità = parità(somma_corrente);
console.log(risultato_parità);


let dichiarazione_vincitore = confronto(scelta_parità_user, risultato_parità);
alert(dichiarazione_vincitore);







