/* Crea un array di oggetti che rappresentano delle persone.
Ogni persona ha un nome, un cognome e un’età.
Crea quindi un nuovo array inserendo, per ogni persona, una frase con il nome e cognome e l’indicazione se può guidare, in base all’età. */

// Crea un array di oggetti che rappresentano delle persone. Ogni persona ha un nome, un cognome e un’età.

const people = [
    {
        name:'Mario',
        lastname:'Rossi',
        age: 45
    },
    {
        name:'Luca',
        lastname:'Bianchi',
        age: 26
    },
    {
        name:'Luigi',
        lastname:'Neri',
        age: 58
    },
    {
        name:'Marco',
        lastname:'Cattaneo',
        age: 16
    },
    {
        name:'Lucia',
        lastname:'Verdi',
        age: 14
    }
]

// Crea quindi un nuovo array inserendo, per ogni persona, una frase con il nome e cognome e l’indicazione se può guidare, in base all’età. 

// Ciclo l'array con map per farmi restituire una nuova array con il messaggio richiesto


const message = people.map(person => {

    if(person.age < 18){
        return `Gentile ${person.name} ${person.lastname}, la sua età è di ${person.age} anni: non può guidare`
    } else {
        return `Gentile ${person.name} ${person.lastname}, la sua età è di ${person.age} anni: può guidare`
    }
});

console.log(message);


