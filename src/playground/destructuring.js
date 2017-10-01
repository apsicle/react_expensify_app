// const person = {
//     name: 'Ryan',
//     age: 26,
//     location: {
//         city: 'Philadelphia',
//         temp: 92
//     }
// };

// const { name: firstName = 'Anonymous', age } = person;

// // const name = person.name;
// // const age = person.age;

// console.log(`${name} is ${age}.`);

// const { city, temp: temperature } = person.location;

// console.log(`It's ${temperature} in ${city}`)

// // EXAMPLE BELOW ======================

// const book = {
//     title: 'Ego is the Enemy',
//     author: 'Ryan Holiday',
//     publisher: {
//         name: 'Penguin'
//     }
// };

// const { name: publisherName = 'Self-published' } = book.publisher;

// ARRAY DESCTRUCTURING BELOW

const address = ['1299 S Juniper Street', 'Philadelphia', 'Pennsylvania', '19147'];

const [, city, state] = address; // just leave off names you don't need.

// console.log(`You are in ${address[1]} ${address[2]}.`); // Works but is not descriptive