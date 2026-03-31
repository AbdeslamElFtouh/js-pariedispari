Il programma vuole chiedere all'utente una parola da inserire e in risposta gli dirà se suddetta parola è palindroma oppure no.


FUNZIONE

La funzione accorperà un algoritmo che verificherà se la parola inserita si legga sia da sinistra verso destra che viceversa:

FUNCTION {
    IF ---> stringa vuota ---> errore
    ELSE ---> stringa piena {
        FOR (per scorrere la parola inserita dall'utente){
            creazione variabile (parola rovesciata)
            assegnazione variabile (parola rovesciata)
        }
        IF ---> parola inserita e parola rovesciata siano uguali
            alert (palindromo)
        ELSE ---> sono diversi
            alert (non è palindromo)
    }
}