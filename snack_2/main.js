/* Crea 10 oggetti che rappresentano una zucchina.
Dividi in due array separati le zucchine che misurano meno o più di 15cm.
Infine stampa separatamente quanto pesano i due gruppi di zucchine. */

// 1. Crea 10 oggetti che rappresentano una zucchina.

const zucchine = [
    {
        varietà:'Varietà_1',
        peso: 1,
        lunghezza:10       
    },
    {
        varietà:'Varietà_2',
        peso: 2,
        lunghezza:15      
    },
    {
        varietà:'Varietà_3',
        peso: 3,
        lunghezza:10       
    },
    {
        varietà:'Varietà_4',
        peso: 4,
        lunghezza:5       
    },
    {
        varietà:'Varietà_5',
        peso: 5,
        lunghezza:15       
    },
    {
        varietà:'Varietà_6',
        peso: 6,
        lunghezza:20       
    },
    {
        varietà:'Varietà_7',
        peso: 7,
        lunghezza:10      
    },
    {
        varietà:'Varietà_8',
        peso: 8,
        lunghezza:15       
    },
    {
        varietà:'Varietà_9',
        peso: 9,
        lunghezza:10       
    },
    {
        varietà:'Varietà_10',
        peso: 10,
        lunghezza:5       
    }
]

console.log(zucchine);
// 2. Dividi in due array separati le zucchine che misurano meno o più di 15cm.
// 2.1 Creo una nuova array di "ZucchineGrandi" usando filter per ciclare nell'array e prendere solo le zucchine di più di 15cm
// 2.2 Creo una nuova array di "ZucchinePiccole" usando filter per ciclare nell'array e prendere solo le zucchine di meno di 15cm
 
const zucchineGrandi = zucchine.filter( zucchina => {
    if(zucchina.lunghezza >= 15){
        return true
    }
    return false
})
const zucchinePiccole = zucchine.filter( zucchina => {
    if(zucchina.lunghezza < 15){
        return true
    }
    return false
})
console.log(zucchineGrandi, zucchinePiccole);

