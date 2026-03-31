//==============================================================================================
// FUNZIONI
//==============================================================================================

function palindromo (stringa){
    if (stringa === ''){
        alert('inserisci una parola');
    } else {
        let stringa_rovesciata = '';
        for (i = stringa.length - 1; i >= 0; i--){
            const current_char = stringa.charAt(i);
            stringa_rovesciata += current_char;
        }
        if (stringa === stringa_rovesciata){
            alert("E' palindromo");
        } else {
            alert('Non è palindromo');
        }
    }
}

//=============================================================================
// MAIN
//=============================================================================

const parola_inserita = prompt('Ciao! Inserisci una parola.');

const verdetto = palindromo(parola_inserita);

