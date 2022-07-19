const { Observable } = require("rxjs");
const { map } = require("rxjs/operators");

const user = {
    data: [{
        name: "Mijohn",
        age: 28
    }, 
    {
        name: "Jeena",
        age: 27
    }]
}
const observable = new Observable((subscriber) => {
    subscriber.next(user);
}).pipe(
    map((value)=>{
        console.log(value.data);
        return value.data
    }),map((value)=>{
        return value.filter((user) => user.name === "Mijohn")
    }),map((value)=>{
        console.log("after filter:"+value.data)
    })
)

const observer = {
    next: (value) => {
        console.log("The value is::" + value)
    }, error: (err) => {
        console.log(err)
    }, complete: () => {
        console.log("Observer got a complete notification")
    }
}

observable.subscribe(observer);