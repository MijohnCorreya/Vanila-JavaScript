/* let promise = new Promise((resolve, reject) => {
    reject(["error"])
}) */


/* const getData = async () => {
    try {
        const res = await promise
        console.log(res)
    } catch (error) {

    }
}
getData() */

//IIFE

/* (async () => {
const response = await promise;
console.log(response);
})(); */


/* const fetchAPIData = async () => {
    try {
       const response = await fetch('https://jsonplaceholder.typicode.com/todos/1')
       const data = await response.json()
       console.log(data)
    } catch (error) {
        console.log(error)
     }
}

fetchAPIData(); */



let promise = new Promise((resolve, reject) => {
    resolve(["Javascript", "pyton"]);
})

const getDataAPI = async () => {
    try {
        let res = await fetch('https://jsonplaceholder.typicode.com/todos/1')
        let data = await res.json()
        console.log(data)
    } catch (error) {
        console.log(error)
    }
}

getDataAPI();