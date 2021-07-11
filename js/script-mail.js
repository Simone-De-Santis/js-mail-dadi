/*

Mail
Chiedi all’utente la sua email,
controlla che sia nella lista di chi può accedere,
stampa un messaggio appropriato sull’esito del controllo.
-********************************************************************-


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