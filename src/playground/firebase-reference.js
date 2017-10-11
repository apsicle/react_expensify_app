import * as firebase from 'firebase';
import expenses from '../tests/fixtures/expenses';

const config = {
    apiKey: "AIzaSyAok9DoT4aSQvAhe27TJY8TSrgcrrLTm78",
    authDomain: "expensify-6c90a.firebaseapp.com",
    databaseURL: "https://expensify-6c90a.firebaseio.com",
    projectId: "expensify-6c90a",
    storageBucket: "expensify-6c90a.appspot.com",
    messagingSenderId: "608497379204"
};

firebase.initializeApp(config);

const database = firebase.database();

const notes = [{text: 'This is a note', id: '111'}, {text: 'Help me.', id: '112'}]

// database.ref('notes').set(null);
// expenses.forEach((expense) => {
//     database.ref('expenses').push(expense);
// });

// database.ref('expenses')
//     .on('value', (snapshot) => {
//         const expenses = [];
//         snapshot.forEach((childSnapshot) => {
//             expenses.push({
//                 id: childSnapshot.key,
//                 ...childSnapshot.val
//             });
//         });
//         console.log(expenses);
//     });

database.ref('expenses')
    .on('child_changed', (snapshot) => {
        console.log(snapshot.key, snapshot.val());
    });

database.ref('expenses')
    .on('child_removed', (snapshot) => {
        console.log(snapshot.key, snapshot.val());
    });

database.ref('expenses')
    .on('child_added', (snapshot) => {
        console.log(snapshot.key, snapshot.val());
    });

// database.ref().set(null);
// database.ref('notes').set(notes);

// ref or 'references' ~ similar to collections from MongoDB. Defaults to root, works like a tree,
// as opposed to an array.
// can reference objects like 'childOfRoot/childOfChild/etc';

//Create Read Update Delete
// database.ref().set({
//     name: 'Ryan Yan',
//     age: 23,
//     job: {
//         title: 'Software Developer'
//     },
//     location: {
//         city: 'Washington, DC',
//         country: 'United States'
//     }
// }).then(() => {
//     console.log('Data is saved!');
// }).catch((e) => {
//     console.log('This failed.', e);
// });

// Delete - or use ref().set(null);
// database.ref('isSingle').remove();

// // Update
// database.ref().update({
//     name: 'Clive',
//     age: 54,
//     job: 'Jazz pianist',
//     location: {
//         city: 'Unknown',
//         country: 'Chile'
//     }
// });

// database.ref().update({
//     'job/company': 'DoSomething'
// })

// database.ref().on('value', (snapshot) => {
//     const val = snapshot.val();
//     console.log(`${val.name} is a ${val.job.title} @ ${val.job.company}`)
// });