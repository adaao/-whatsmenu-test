/**
 * Crie uma automação que remova todas as propriedades do objeto abaixo que não comecem com a letra "j"
 */

var myObject = {
   jason: "Jason",
   thais: "Thaís",
   liz: "Liz",
   jennei: "Jennei",
   jenyffer: "Jennyfer",
   joao: "João",
   bola: "Bola",
   gato: "Gato",
   jaguar: "Jaguar"
}

var properties = Object.keys(myObject);

var startsWithJ = properties.filter(property => (property[0] == 'j'));

var newObject = {};

for(i=0; i<startsWithJ.length; i++){
   newObject[startsWithJ[i]] = myObject[startsWithJ[0]];
}

console.log(newObject);
