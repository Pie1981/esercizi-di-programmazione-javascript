/*
  Conta il tempo
  Scrivi un programma che dato un numero di secondi, calcoli la quantità di ore, minuti e secondi corrispondenti e
  poi stampi il risultato. L'output avrà solo numeri interi.

  Esempio:
    Input: 12560
    Output: 3 ore, 29 minuti e 20 secondi.

  Consigli:
  In un'ora ci sono 60 minuti, in un minuto 60 secondi. Quindi quanti secondi ci sono in un'ora? ;)

  http://www.imparareaprogrammare.it
*/

var seconditot = 12560;
var sec1h = 60*60;

var ore = Math.floor(seconditot/sec1h);

var minuti = Math.floor((seconditot-(sec1h*ore))/60);

var secondi = Math.floor((seconditot-(sec1h*ore))-(minuti*60));

console.log(`abbiamo ${ore} poi ${minuti} poi ${secondi}`);
