import * as firebase from 'firebase';

const config = {
    apiKey: process.env.FIREBASE_API_KEY,
    authDomain: process.env.FIREBASE_AUTH_DOMAIN,
    databaseURL: process.env.FIREBASE_DATABASE_URL,
    projectId: process.env.FIREBASE_PROJECT_ID,
    storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID
};

firebase.initializeApp(config);

const database = firebase.database();

export { firebase, database as default };

// database.ref('expenses').on('child_removed', (snapshot) => {
//     console.log(snapshot.key, snapshot.val())
// });

// database.ref('expenses').on('child_changed', (snapshot) => {
//     console.log(snapshot.key, snapshot.val())
// });

// database.ref('expenses').on('child_added', (snapshot) => {
//     console.log(snapshot.key, snapshot.val())
// });


// database.ref('expenses')
//     .on('value', (snapshot) => {
//         const expenses = [];

//         snapshot.forEach((childSnapshot) => {
//             expenses.push({
//                 id: childSnapshot.key,
//                 ...childSnapshot.val()
//             });
//         });

//         console.log(expenses);
//     });

// database.ref('expenses')
//     .once('value')
//     .then((snapshot) => {
//         const expenses = [];

//         snapshot.forEach((childSnapshot) => {
//             expenses.push({
//                 id: childSnapshot.key,
//                 ...childSnapshot.val()
//             });
//         });

//         console.log(expenses);
//     });


// database.ref('expenses').push({
//     description: "Rent",
//     note: 'May',
//     amount: 60000,
//     createdAt: 0
// });

// database.ref('notes/-LIVH6nwGokRl5gBKu2u').remove();

// database.ref('notes').push({
//     title: 'Courese topics',
//     body: 'React Natvie, Angular, Json'
// });

// const firebaseNotes = {
//     notes: {
//         id1: {
//             title: 'Fo'
//         }
//     }
// };

// const onValueChange = database.ref().on('value', (snapshot) => {
//     const val = snapshot.val();
//     console.log(`${val.name} is a ${val.job.title} at ${val.job.company}`);
// }, (error) => {
//     console.log('Error with data fetching', error);
// });

// const onValueChange = database.ref().on('value', (snapshot) => {
//     console.log(snapshot.val());
// }, (error) => {
//         console.log('Error with data fetching', error);
// });

// setTimeout(() => {
//     database.ref('age').set(31);
// }, 3500);

// setTimeout(() => {
//     database.ref().off(onValueChange);
// }, 7000);

// setTimeout(() => {
//     database.ref('age').set(32);
// }, 10500);

// database.ref('location/city')
//     .once('value')
//     .then((snapshot) => {
//         const val = snapshot.val();
//         console.log(val);
//     })
//     .catch((error) => {
//         console.log('Error fetching data', e);
//     });


// database.ref().set({
//     name: 'Arvid Zetterberg',
//     age: 30,
//     stressLevel: 6,
//     job:{
//         title: 'Software developer',
//         company: 'Google'
//     },
//     location: {
//         city: 'Uppsala',
//         country: 'Sweden'
//     }
// }).then(() => {
//     console.log('Data is saved');
// }).catch((error) => {
//     console.log('This failed.', error);
// });


// database.ref().update({
//     stressLevel: 9,
//     'job/company' : 'Amazon',
//     'location/city' : 'Seattle'
// });

// database.ref('isSingle')
//     .remove()
//     .then(() => {
//         console.log('Data was removed');
//     }).catch((error) => {
//         console.log('Did not remove the data', error);
//     });