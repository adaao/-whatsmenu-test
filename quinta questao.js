/**
 * a partir do Array abaixo crieu um novo array contendo apenas nome e idade:
 */

var myArray = [
   {id: 1, nome: 'Liz', idade: 2},
   {id: 2, nome: 'Thaís', idade: 32},
   {id: 3, nome: 'Jonathan', idade: 30},
   {id: 4, nome: 'Thainá', idade: 29},
   {id: 5, nome: 'Fabiano', idade: 45},
]

function dropId({id, ...others}){
   return others;
}

var newArray = myArray.map(dropId);
console.log(newArray);
