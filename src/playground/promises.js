const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
//        resolve({
//            name: 'Thomas',
//            age: 50
//        });
        reject('Something went wrong');
    }, 5000);

});

console.log('before')

promise.then((data) => {
    console.log('1', data);
}).catch((error) => {
    console.log('Error: ',error);
});

console.log('after')
