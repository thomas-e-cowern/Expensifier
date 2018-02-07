import * as firebase from 'firebase';

var config = {
    apiKey: "AIzaSyApKbu9pa-SEQDEQw8oiaRKo7GU2z_YvAc",
    authDomain: "expensifier-270a7.firebaseapp.com",
    databaseURL: "https://expensifier-270a7.firebaseio.com",
    projectId: "expensifier-270a7",
    storageBucket: "expensifier-270a7.appspot.com",
    messagingSenderId: "837279317960"
  };
//var config = {
//    apiKey: process.env.FIREBASE_API_KEY,
//    authDomain: process.env.FIREBASE_AUTH_DOMAIN,
//    databaseURL: process.env.FIREBASE_DATABASE_URL,
//    projectId: process.env.FIREBASE_PROJECT_ID,
//    storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
//    messagingSenderId: process.env.FIREBASE_MANAGING_SENDER_ID
//};

firebase.initializeApp(config);

const database = firebase.database();


export { firebase, database as default }

//database.ref('expenses').on('child_changed', (snapshot) => {
//   console.log(snapshot.key, snapshot.val()); 
//});

//database.ref('expenses')
//    .once('value')
//    .then((snapshot) => {
//        const expenses = [];
//
//        snapshot.forEach((childSnapshot) => {
//            expenses.push({
//                id: childSnapshot.key,
//                ...childSnapshot.val()
//            });
//        });
//    
//        console.log(expenses);
//    });


//database.ref('expenses').on('value', (snapshot) => {
//    
//    const expenses = [];
//        
//        snapshot.forEach((childSnapshot) => {
//            expenses.push({
//                id: childSnapshot.key,
//                ...childSnapshot.val()
//            });
//            
//    });
//    
//    console.log('After: ', expenses);
//    
//});

//database.ref('expenses').push({
//    description: 'Rent',
//    amount: 1235.00,
//    note: 'January Rent',
//    createdAt: '123456789'
//});
//
//database.ref('expenses').push({
//    description: 'Insurance',
//    amount: 500.00,
//    note: 'January Insurance',
//    createdAt: '123456789'
//});
//
//database.ref('expenses').push({
//    description: 'Internet',
//    amount: 56.00,
//    note: 'January Internet',
//    createdAt: '123456789'
//});

//database.ref('notes/-L20sJuFfeTM0xWuZerr').remove();

//database.ref('notes').push({
//    title: 'Course Topics',
//    body: 'React, Firebase, SASS'
//});

//database.ref().on('value', (snapshot) => {
//    const val = snapshot.val();
//    console.log(`${val.name} is a ${val.job.title} at ${val.job.company}`);
//});

//const onValueChange = database.ref().on('value', (snapshot) => {
//    console.log(snapshot.val());
//}, (e) => {
//    console.log('Error: ', e)
//});
//
//setTimeout(() => {
//    database.ref('age').set(50);
//}, 3500);
//
//setTimeout(() => {
//    database.ref().off('value', onValueChange);
//}, 7000);
//
//setTimeout(() => {
//    database.ref('age').set(52);
//}, 10500);

//database.ref()
//    .once('value')
//    .then((snapshot) => {
//        const val = snapshot.val();
//        console.log(val);
//    })
//    .catch((error) => {
//        console.log('Error fetching data', error)
//    });
//database.ref('isSingle').remove()
//.then(() => {
//    console.log('Successfully removed')
//}).catch((error) => {
//   console.log('Remove error', error) 
//});

//database.ref().set({
//    name: 'Thomas Cowern',
//    age: 26,
//    stressLevel: 6,
//    job: {
//        title: 'Software Developer',
//        company: 'Loogle'
//    },
//    location: {
//        city: 'Charlotte',
//        country: 'United States'
//    },
//}).then(() => {
//    console.log('Data is saved');
//}).catch((error) => {
//    console.log(error);
//});
//
//
//database.ref().update({
//    stressLevel: 9,
//    'job/company': 'Amazon',
//    'location/city': 'North Haven'
//});

//database.ref('age').set(27);
//database.ref('location/city').set('North Haven');

//database.ref('attributes').set({
//    height: 70,
//    weight: 249
//}).then(() => {
//    console.log('Update successful');
//}).catch((error) => {
//    console.log(error);
//});

//console.log('I made a request to change data');
