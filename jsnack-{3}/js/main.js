/*
Creare un oggetto che rappresenti un triangolo rettangolo,
con le seguenti proprietà: base e altezza.
Calcolare perimetro e area.
*/

var triangolo = {
  'base': 10,
  'altezza': 5
};

var area = (triangolo.base * triangolo.altezza) / 2;

console.log("L'area è pari a " + area);

var perimetro = (Math.sqrt(triangolo.base ** 2 + triangolo.altezza ** 2)) + triangolo.base + triangolo.altezza;

console.log("il perimetro è pari a " + Math.floor(perimetro));
