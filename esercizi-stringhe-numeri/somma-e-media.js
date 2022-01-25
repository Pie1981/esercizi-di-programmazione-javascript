/*
  Somma e media
  Scrivi un programma che dati 5 numeri restituisca in output la somma e la media.

  Esempio:
    Input: a = 1, b = 2, c = 3, d = 4, e = 5
    Output: somma = 15, media = 3

  http://www.imparareaprogrammare.it
*/
var a = 25;
var b = 5;
var c = 10;
var d = 3;
var e = 7;

var numTot = 5;
var sum = (a+b+c+d+e);
var diff = sum/numTot;

console.log(`abbiamo ${numTot} numeri totali che sommati ci daranno ${sum} mentre la loro media risulterà ${diff})`);
