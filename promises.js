let promise = new Promise((resolve, reject) => {
    let x = 10;
    if (x == 10) {
        resolve("Success")
    } else {
        reject("Failed")
    }
})

promise.then((value) => {
    console.log(value)
}).catch((Error) => {
    console.log(Error)
})


let promise1 = new Promise((resolve, reject)=>{
    //resolve(["Java","Python"])
    reject("API Failed")
});

promise1.then((response)=>{
    console.log(response)
});

let promise2 = new Promise((resolve, reject)=>{
    resolve(["Angular","React"])
    //reject("API Failed")
});

promise2.then((response)=>{
    console.log(response)
}).catch((error)=>{
    console.log(error)
}) 


let allPromise = Promise.race([promise1, promise2])

allPromise
.then((value)=>{
    console.log(value)
})
.catch((error)=>{
    console.log(error)
});


/* let promise = new Promise((resolve, reject)=>{
    resolve("API Fetched")
})

promise.then(Response=>{
console.log(Response)
}).catch((error)=>{
console.log(error)
}) */



getApiData = (num) =>{
    return new Promise((resolve, reject)=>{
        let sum = num + 5;
        resolve(['API Fetched', sum])
    })
}

getApiData(5).then((res)=>{
    console.log(res)
}).catch((error)=>{
    console.log(error);
})


