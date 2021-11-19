/**
 *  * crie um Array contendo números de 1 à 10
    * insira o número 0 no início do array
    * insira o número 11 no final do array
    * remova o número 5 do array
    * remova o número 8 do array e no lugar adicione uma sequencia de 
    *números: 20, 21, 22. Nesse ponto seu Array deve estar dessa forma: 0, 1, 2, 3, 4, 6, 7, 20, 21, 22, 9, 10, 11.
*/

//crie um Array contendo números de 1 à 10
var myArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

//insira o número 0 no início do array
myArray = [0, ...myArray];

//insira o número 11 no final do array
myArray.push(11);

//remova o número 5 do array
var i = myArray.indexOf(5);
myArray.splice(i, 1);

//remova o número 8 do array e no lugar adicione uma sequencia de 
//números: 20, 21, 22. Nesse ponto seu Array deve estar dessa forma: 0, 1, 2, 3, 4, 6, 7, 20, 21, 22, 9, 10, 11.
i = myArray.indexOf(8);
var myList = [20, 21, 22];

myArray.fill(myList, i, i + 1);

myArray = myArray.flat();

console.log(myArray);
