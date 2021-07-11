/* 
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



//! generare un numero random da 1 a 6

var player1 = Math.floor(Math.random() * 6) + 1;
var player2 = Math.floor(Math.random() * 6) + 1;
console.log("tiro giocatore 1 : ", player1)
console.log("tiro giocatore 2 : ", player2)

if (player1 > player2) {
    console.log("giocatore 1 vince")

} else if (player1 < player2) {
    console.log("giocatore 2 vince")

} else {
    console.log("Pareggio")

}
