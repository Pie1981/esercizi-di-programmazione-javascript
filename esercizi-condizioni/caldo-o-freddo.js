/*
  Caldo o freddo
  Scrivi un programma che dati sette valori relativi alle temperature della settimana
  stabilisca la giornata più calda e quella più fredda.

  Esempio:
    Input: a = 10, b = -2, c = 31, d = 22, e = 15, f = -6, g = 7
    Output: giornata più calda = 31, giornata più fredda = -6

  http://www.imparareaprogrammare.it
*/
var temp = a = 10, b = -2, c = 31, d = 22, e = 15, f = -6 , g = 7;

if(a>=b && a>=c && a>=d && a>=e && a>=f && a>=g)
console.log('Giornata piu calda' + a);
else if (b>=a && b>=c && b>=d && b>=e && b>=f && b>=g){
  console.log('Giornata piu calda' + b);
}else if (c>=a && c>=b && c>=d && c>=e && c>=f && c>=g) {
  console.log('Giornata piu calda' + c);
}else if (d>=a && d>=b && d>=c && d>=e && d>=f && d>=g) {
  console.log('Giornata piu calda' + d);
}else if (e>=a && e>=b && e>=c && e>=d && e>=f && e>=g) {
console.log('Giornata piu calda' + e);
}else if (f>=a && f>=b && f>=c && f>=d && f>=e && f>=g) {
  console.log('Giornata piu calda' + f);
}else {
  console.log('Giornata piu calda' + g);
}
if (a<=b && a<=c && a<=d && a<=e && a<=f && a<=g) {
  console.log('Giornata piu fredda' + a);
}else if (b<=a && b<=c && b<=d && b<=e && b<=f && b<=g){
  console.log('Giornata piu fredda' + b);
}else if (c<=a && c<=b && c<=d && c<=e && c<=f && c<=g) {
  console.log('Giornata piu fredda' + c);
}else if (d<=a && d<=b && d<=c && d<=e && d<=f && d<=g) {
  console.log('Giornata piu fredda' + d);
}else if (e<=a && e<=b && e<=c && e<=d && e<=f && e<=g) {
console.log('Giornata piu fredda' + e);
}else if (f<=a && f<=b && f<=c && f<=d && f<=e && f<=g) {
  console.log('Giornata piu fredda' + f); 

}else {
  console.log('Giornata piu fredda' + g);
}
