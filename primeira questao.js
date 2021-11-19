/*Crie um Array contendo os numerais de 0 à 30 e filtre quais desses números são ímpares*/

fromZeroToThirdyArray = [];

for (var i = 0; i <= 30; i++){
    fromZeroToThirdyArray.push(i);
}

function getOddNumbers(number){
    if(number % 2 != 0){
        return number;
    }
}

var oddNumbers = fromZeroToThirdyArray.filter(getOddNumbers);

console.log(oddNumbers);
