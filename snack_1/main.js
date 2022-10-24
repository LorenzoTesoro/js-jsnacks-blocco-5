/* Crea un array di 10 oggetti che rappresentano una zucchina, indicando
per ognuna varietà, peso e lunghezza.
Calcola quanto pesano tutte le zucchine. */

// Crea un array di 10 oggetti che rappresentano una zucchina, indicando per ognuna varietà, peso e lunghezza.

const zucchine = [
    {
        varietà:'Varietà_1',
        peso: 1,
        lunghezza:'10 cm'       
    },
    {
        varietà:'Varietà_2',
        peso: 2,
        lunghezza:'15 cm'       
    },
    {
        varietà:'Varietà_3',
        peso: 3,
        lunghezza:'10 cm'       
    },
    {
        varietà:'Varietà_4',
        peso: 4,
        lunghezza:'5 cm'       
    },
    {
        varietà:'Varietà_5',
        peso: 5,
        lunghezza:'15 cm'       
    },
    {
        varietà:'Varietà_6',
        peso: 6,
        lunghezza:'20 cm'       
    },
    {
        varietà:'Varietà_7',
        peso: 7,
        lunghezza:'10 cm'       
    },
    {
        varietà:'Varietà_8',
        peso: 8,
        lunghezza:'15 cm'       
    },
    {
        varietà:'Varietà_9',
        peso: 9,
        lunghezza:'10 cm'       
    },
    {
        varietà:'Varietà_10',
        peso: 10,
        lunghezza:'5 cm'       
    }
]

// console.log(zucchine);

// Calcola quanto pesano tutte le zucchine

// 1. Dichiaro una variabile "sum" vuota 
let sum = 0;
// 2. Ciclo nell'array "zucchine" per selezionare, ad ogni iterazione, il peso della singola varietà
zucchine.forEach( zucchina => {
// 3. ad ogni iterazione, il valore del peso è sommato al valore di sum + i valori precedenti
    sum += zucchina.peso;
});

console.log(sum);

