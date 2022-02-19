/*
  Vinci tu!
  Scrivi un programma che dato il numero dei tiri da effettuare per ciascun giocatore (N),
  simuli un gioco di dadi tra due utenti, stampando il giocatore che ha totalizza più punti.
  Supponendo che ogni dado abbia al massimo 6 facce.

  Ogni giocatore tirerà il dado N volte, ciò significa che verrà generato un numero casuale
  ad ogni tiro che sarà sommato ai precedenti per calcolare il punteggio del giocatore.


  Consigli:
  Il numero casuale generato, deve essere convertito nel tuo intervallo (min = 1, max = 6).
  Se non ti ricordi come si fa puoi rivedere l'esercizio sulle condizioni "Chi l'azzecca?".

  http://www.imparareaprogrammare.it
*/

 var tiri = 7;
var player1 = 0;
var player2 = 0;
var x = Math.floor((Math.random()*(6-1) +1));
var y = Math.floor((Math.random()*(6-1)+1));
for (i=0; i<tiri; i++){
  player1+=x;
  player2+=y;
}
if (player1===player2){
  console.log(`I due giocatori dopo ${tiri} tiri hanno pareggiato con il punteggio di ${player1}`);
}else if (player1<player2) {
  console.log(`il giocatore 1 ha vinto effettuando ${tiri} tiri con il punteggio di ${player1} `);
}else {
  console.log(`il giocatore 2 ha vinto effettuando ${tiri} tiri con il punteggio di ${player2}`);

}
