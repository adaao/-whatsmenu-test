/**
 * Utilize o mesmo array do desafio anterior para criar um array 
 * que contenha os valores abaixo dentro de uma tag h3 como no exemplo abaixo:
 * <h3> {id} - {nome} - {idade}</h3>
 */

 var myData = [
   {id: 1, nome: 'Liz', idade: 2},
   {id: 2, nome: 'Thaís', idade: 32},
   {id: 3, nome: 'Jonathan', idade: 30},
   {id: 4, nome: 'Thainá', idade: 29},
   {id: 5, nome: 'Fabiano', idade: 45},
]

var h3Array = [];

for(i = 0; i < myData.length; i++){
   h3Array.push('<h3>' + myData[i].id + ' - ' + myData[i].nome + ' - ' + myData[i].idade + '</h3>');
}

console.log(h3Array);
