/*

Mail
Chiedi all’utente la sua email,
controlla che sia nella lista di chi può accedere,
stampa un messaggio appropriato sull’esito del controllo.
-********************************************************************-
Gioco dei dadi
Generare un numero random da 1 a 6, sia per il giocatore sia per il computer.
Stabilire il vincitore, in base a chi fa il punteggio più alto e stampare il risultato.
Prima di partire a scrivere codice poniamoci qualche domanda:
Che ci sia un array da qualche parte?
Se dobbiamo confrontare qualcosa che "cosa" ci serve?
Consigli del giorno:
1. scriviamo sempre prima dei commenti in italiano per capire cosa vogliamo fare
2. javascript non fa nulla da solo, dobbiamo dirgli noi cosa vogliamo fare
3. si ma noi cosa vogliamo fare?
4. torniamo a scrivere in italiano
5. proviamo ad immaginare le operazioni che vogliamo far svolgere al nostro programma così come lo faremmo "a mano"
Buon lavoro,  buon weekend e... forza azzurri :it:! :faccia_leggermente_sorridente: (modificato) 


*/

console.log("js ok")
// ! 1-creazione di un array contenente una lista di e-mail
// ! 2-chiediamo all'utente la sua email 
// ! 3-controlliamo se l'email inserita è contenuta nella lista
// ! 4-se contenuta nella lista messaggio di benvenuto
// ! 5-se non contenuta nella lista messaggio di errore


var mailList = ["simone-desantis@gmail.com", "simonedesantis@gmail.com", "simone92desantis@gmail.com", "simone.desantis@gmail.com",]
console.table(mailList)
var userEmail = prompt("inserisci la tua email :")
console.log(userEmail)

if (userEmail == mailList) {
    alert("benvenuto")
} else {
    alert("utente non riconosciutoa")
}