/* Scrivi una funzione che accetti tre argomenti:
un array e due numeri (“a” più piccolo di “b” e “b” grande al massimo
quanto il numero di elementi dell’array).
La funzione ritornerà un nuovo array con i valori che hanno la posizione
compresa tra “a” e “b” */

// 1. Funzione con 3 argomenti:
    // 1.1 array[]
    // 1.2 num1 < num2
    // 1.3 num2 <= array.length
function newArrayPosition(array1, num1, num2){

    return  array1.slice(num1,num2);

}

const colors = ['red', 'white', 'yellow', 'green', 'purple', 'orange', 'blue'];

console.log(newArrayPosition(colors, 1, 4));
