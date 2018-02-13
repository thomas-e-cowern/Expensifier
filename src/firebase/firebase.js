import * as firebase from 'firebase';

//const config = {
//    apiKey: "AIzaSyApKbu9pa-SEQDEQw8oiaRKo7GU2z_YvAc",
//    authDomain: "expensifier-270a7.firebaseapp.com",
//    databaseURL: "https://expensifier-270a7.firebaseio.com",
//    projectId: "expensifier-270a7",
//    storageBucket: "expensifier-270a7.appspot.com",
//    messagingSenderId: "837279317960"
//};

var config = {
    apiKey: process.env.FIREBASE_API_KEY,
    authDomain: process.env.FIREBASE_AUTH_DOMAIN,
    databaseURL: process.env.FIREBASE_DATABASE_URL,
    projectId: process.env.FIREBASE_PROJECT_ID,
    storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.FIREBASE_MANAGING_SENDER_ID
};

firebase.initializeApp(config);

const database = firebase.database();

export { firebase, database as default };

//database.ref('expenses').on('child_changed', (snapshot) => {
//   console.log(snapshot.key, snapshot.val()); 
//});
//
//database.ref('expenses').on('child_added', (snapshot) => {
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
//        console.log(expenses);
//    });

//database.ref('expenses')
//    .on('value', (snapshot) => {
//
//        const expenses = [];
//
//        snapshot.forEach((childSnapshot) => {
//            expenses.push({
//                id: childSnapshot.key,
//                ...childSnapshot.val()
//            });
//        })
//        console.log(expenses);
//
//    });




//database.ref('expenses').push({
//    description: 'Rent',
//    note: 'Feb Rent',
//    amoung: '1234.00',
//    createdAt: 21312323123
//});
//
//database.ref('expenses').push({
//    description: 'Insurancwe',
//    note: 'Feb Ins',
//    amoung: '403.00',
//    createdAt: 21312323123
//});
//
//database.ref('expenses').push({
//    description: 'Food',
//    note: 'Feb Food',
//    amoung: '86.00',
//    createdAt: 21312323123
//});

//database.ref('notes/-L5BWq4vYQ9c1r6aSa4j').update({
//    body: 'But Food'
//});


//database.ref('notes').push({
//    title: 'Course work',
//    body: 'Finish React'
//})

//const onValueChange = database.ref().on('value', (snapshot) => {
//    console.log(snapshot.val());
//}, (e) => {
//    console.log('error fetching data: ', e)
//});
//
//database.ref().on('value', (Snapshot) => {
//    const val = Snapshot.val();
//    console.log(`${val.name} is a ${val.job.title} at ${val.job.company}.`);
//});

//setTimeout(() => {
//    database.ref('age').set(40);
//}, 3500);
//
//setTimeout(() => {
//    database.ref().off(onValueChange);
//}, 7000);
//
//setTimeout(() => {
//    database.ref('age').set(49);
//}, 10500);

//database.ref().once('value')
//    .then((snapshot) => {
//        const val = snapshot.val();
//        console.log(val);
//    }).catch((e) => {
//        console.log('error: ', e)
//    })


//database.ref('isSingle').remove()
//    .then(() => {
//        console.log('Remove succeeded');
//    }).catch((e) => {
//        console.log('Removed failed: ', e);
//    });
//
//database.ref().set({
//    name: 'Thomas Cowern',
//    age: 50,
//    stressLevel: 6,
//    job: {
//        title: 'Junior Developer',
//        company: 'Google'
//    },
//    location: {
//        city: 'Charlotte',
//        country: 'United States'
//    }
//}).then(() => {
//    console.log('Data is saved');
//}).catch((e) => {
//    console.log('Save failed: ', e);
//});
//
//database.ref().update({
//    stressLevel: 9,
//    'job/company': 'Amazon',
//    'location/city': 'Seattle'
//});

//database.ref('age').set(40);
//database.ref('location/city').set('San Antonio');
//database.ref('attributes').set({
//    height: 69.5, 
//    weight: 230
//}).then(() => {
//    console.log("Attributes succeeded");
//}).catch((e) => {
//    console.log('Attrubute Save Failed: ', e)
//});

//export { firebase, database as default }



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
