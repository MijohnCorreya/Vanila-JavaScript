/* function getAPI(Callback) {
    setTimeout(() => {
        Callback(5)
    },1000)
}
function getAPI2(Callback) {
    setTimeout(() => {
        Callback(5)
    },2000)
}
function getAPI3(Callback) {
    setTimeout(() => {
        Callback(5)
    },3000)
}

getAPI((value) => {
    getAPI2((value2) => {
        getAPI3((value3) => {
            console.log(value + value2 + value3)
        })
    })
}) */




let calculate = () => {
   setTimeout(()=>{
    return "working"
   },3000)
}

console.log(calculate())