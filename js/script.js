// Consegna:
// Scrivi un programma che stampi in console i numeri da 1 a 100.
// MILESTONE 1
// Per i multipli di 3 stampi “Fizz” al posto del numero e per i multipli di 5 stampi Buzz.
// Per i numeri che sono sia multipli di 3 che di 5 stampi FizzBuzz.
//     MILESTONE 2
// Dato un container nel DOM, appendi un elemento html con il numero o la stringa corretta.
//     MILESTONE 3
// Applica uno stile differente a seconda del valore dell’indice per i multipli di 3, per i multipli di 5 e per i valori che sono sia multipli di 3 che di 5.


// ciclo da 1 a 100
const ul = document.querySelector('.squares');

for (let i = 1; i < 101; i++ ){
    const li = document.createElement('li');

    if ((i % 3 == 0) && (i % 5 == 0)) {
        li.append('fizzbuzz');
        li.classList.add('red', 'box');
        console.log('FizzBuzz');
    }
    else if (i % 3 == 0) {
        li.append('fizz');
        li.classList.add('green', 'box');
        console.log('Fizz');
    }
    else if (i % 5 == 0) {
        li.append('buzz');
        li.classList.add('yellow', 'box');
        console.log('Buzz');
    }
    else {
        li.append(i);
        li.classList.add('blue', 'box');
        console.log(i);
    }

    ul.append(li);
}
// MILESTONE 1
// Per i multipli di 3 stampi “Fizz”

// for (let i=0; i < 101; i += 3){
//     console.log('Fizz', i);
// }

// // per i multipli di 5 stampi Buzz.
// for (let i=0; i < 101; i += 5){
//     console.log('Buzz', i);
// }



