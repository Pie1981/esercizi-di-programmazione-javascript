/*
  Fai il professore
  Scrivi un programma che converta un voto numerico (v) in un giudizio seguendo questi parametri:
    v < 18: insufficiente
    18 <= v < 21: sufficiente
    21 <= v < 24: buono
    24 <= v < 27: distinto
    27 <= v <= 29: ottimo
    v = 30: eccellente
  Utilizza costrutto If.

  Esempio:
    Input: v = 29
    Output: Distinto

  Variante
  Realizzare una versione con il costrutto Switch-Case. In questo caso gestire anche il caso in cui il voto inserito non sia valido.

  http://www.imparareaprogrammare.it
*/

var teach = `18,21,24,27,29,30`;
var voto = 19;
switch (voto) {
  case 1:
    console.log('insufficiente');
    break;
    case 2:
    console.log('sufficiente');
    break;
    case 3:
    console.log('buono');
        break;
        case 4:
        console.log('distinto');
        break;
        case 5:
        console.log('ottimo');
              break;
              case 6:
              console.log('eccellente');
              break;
  default: console.log('Esame non superato');

}
