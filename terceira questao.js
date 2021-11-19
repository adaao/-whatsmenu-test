/*
Crie uma automação que calcule a sequencia fibonacci até o número máximo 100.
*/

var fibonacciSequence = [0];

function fibonacci(n){
   if(n == 1 || n == 2){
      return 1;
   }else{
      return fibonacci(n -1) + fibonacci(n - 2);
   }
}

for(i = 1;; i++){
   nElement = fibonacci(i);
   
   if(nElement < 100){
      fibonacciSequence.push(nElement);
   }else{
      break;
   }
   
}

console.log(fibonacciSequence);
