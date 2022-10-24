/* Scrivi una funzione che fonda due array (aventi lo stesso numero di
    elementi) prendendo alternativamente gli elementi da uno e dall’altro
    es. [a,b,c], [1,2,3] → [a,1,b,2,c,3]. */

// function (array1, array2)

function mixArray (array1, array2){
    // 1. Creo un array vuota in cui pushare i valori
    newArray = [];
    // 2. Ciclo for each all'interno della prima array (2 parametri: element1 == primo elemento dell'array, i = index)/ ad ogni iterazione, mi prende gli elementi in posizione i di entrambe le array
    array1.forEach((element1, i) => {
       const element2 = array2[i];
       newArray.push(element1,element2); // 3. pusho gli elementi nella nuova array
    });

    return newArray;
} 

const array1 = [10,12,23,34]

const array2 = [4,5,6,7]

console.log(mixArray(array1,array2)); 
