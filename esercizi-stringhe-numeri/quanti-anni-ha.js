/*
  Quanti anni ha?
  Scrivi un programma che dato l'anno corrente e un anno di nascita determini:
    - l'età della persona,
    - quanti anni sono necessari per raggiungere i 100
  Restituisca in output entrambi i risultati.

  Esempio:
    Input: anno corrente = 2018, anno di nascita = 1991
    Ouput: età = 27, anni mancanti = 73

  http://www.imparareaprogrammare.it
*/

var year = 2022;
var born = 1985;
var century = 100;
var age = year - born;
var missing = century - age;

console.log(`mia moglie ha ${age} anni e mancano ${missing} anni per arrivare a 100)` );
