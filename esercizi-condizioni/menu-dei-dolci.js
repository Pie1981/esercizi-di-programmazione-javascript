/*
  Menu dei dolci
  Scrivi un programma che dato il seguente menu (da stampare):
    MENU:
    1. Tiramisù
    2. Torta della nonna
    3. Cheesecake alla nutella
    4. Macedonia

  Prenda in input un valore numerico che rappresenti la scelta e restituisca:
    - se la scelta non è tra quelle elencate la scritta 'Dolce non disponibile',
    - altrimenti la scelta effettuata 'Hai scelto il dolce X'.


  Esempi:
    Input: scelta = 4
    Output: Hai scelto il dolce Macedonia

    Input: scelta = 7
    Output: Dolce non disponibile

  http://www.imparareaprogrammare.it
*/
var Menu = `Menu:
1.Tiramisu
2.Torta della nonna
3.Cheesecake alla nutella
4.Macedonia`;

console.log(Menu);
var scelta = 4;
switch (scelta) {
  case 1:
  console.log('Hai scelto il dolce Tiramisu');
  break;
  case 2:
  console.log('Hai scelto il dolce Torta della nonna');
  break;
  case 3:
  console.log('Hai scelto il dolce Cheesecake alla nutella');
  break;
  case 4:
  console.log('Hai scelto il dolce Macedonia');
  break;
  default:
  console.log('Dolce non disponibile');

}
