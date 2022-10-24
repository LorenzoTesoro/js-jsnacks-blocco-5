/* Scrivi una funzione che accetti una stringa come argomento e la ritorni
girata (es. Ciao -> oaiC) */

// Funzione(stringa)

function invertWord (word){
    // trasforma la stringa in un array- split ()
    wordReverted = word.split('').reverse().join('');
    // inverti l'ordine dei caratteri - array.reverse()
    // ritrasforma l'array in una stringa - .join()
    // restituisci la parola al contrario
    return wordReverted
}

// console.log(invertWord('snacks'));