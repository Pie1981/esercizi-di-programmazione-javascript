/*
  Rombo che stampa!
  Scrivi un programma che dato un numero dispari stampi un rombo di lettere.

  Esempio:
    Input : 5
    Output:
            X
           XXX
          XXXXX
           XXX
            X

  Consiglio:
  Per indentare puoi usare il tab con '\t'.

  http://www.imparareaprogrammare.it
*/
var primaRiga = ' *';
 var secRiga = '';
 var terzRiga = '';

 for( a = 1; a <= 3; a++){
   secRiga+='*';
 }
 for( a = 1; a <= 5; a++){
   terzRiga+='*';
 }

 console.log(' \t\t ' + primaRiga + '\n' + ' \t\t ' + secRiga + '\n' + '\t\t' + terzRiga + '\n' + ' \t\t ' + secRiga + '\n' + ' \t\t ' + primaRiga);
