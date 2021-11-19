/*
    • Crie um Array contendo a lista de palavras abaixo e filtre apenas quais dessas palávras são palíndromos.

    1. arara
    2. amor
    3. asa
    4. longo
    5. ele
    6. dinossáuro
    7. esse
    8. peppa
    9. mamam
    10. tartaruga
    11. bandolin
    12. matam
    13. desodorante
    14. mundo
    15. metem
    16. terra
    17. água
    18. mirim
    19. fogo
    20. sopapos
*/

words = ['arara', 'amor', 'asa', 'longo', 'ele', 'dinossáuro', 'esse', 
   'peppa', 'mamam', 'desodorante', 'mundo', 'metem', 'terra', 'água', 
   'mirim', 'fogo', 'sopapos'];

function getPalidrome(word){
   if(word == reverse(word)){
      return word; 
   }
}

function reverse(word){
   return word.split('').reverse().join('');
}

palindromes = words.filter(getPalidrome);

console.log(palindromes);
