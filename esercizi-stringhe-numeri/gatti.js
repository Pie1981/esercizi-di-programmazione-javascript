var cats = 15;

var inLine = 2;

var numLines = Math.ceil(cats/inLine);


var missing = (numLines*inLine)-cats;

console.log(`Ci sono ${cats} gatti disposti in ${inLine} file. Manca ${missing} gatto per riempire tutte le file` );
