/* function main() {
    [1, 2, 3, 4, 5].forEach(val => {
        console.log(val)
    })
}

main(); */

/* function minYOB(...arg){
    let arr = arg.map(item=>item.age)
    console.log(Math.min(...arr))
} */


/* class Student {
    name;
    age;
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    studentName() {
        return this.name;
    }
}

Student.minYOB = (...arg) => {
    let arr = arg.map(item => item.age)
    console.log(Math.min(...arr))
}

var student_1 = new Student("Mijohn", 28);
let student_2 = new Student("Jeena", 27);

Student.minYOB(student_1, student_2);

console.log(student_1.name, student_2.studentName()); */




/* class employee {
    empID;
    empName;
    empSalary;
    constructor(empId, empName, empSalary) {
        this.empId = empId;
        this.empName = empName;
        this.empSalary = empSalary;
    }
    
}

employee.getSalaryDetails = (...arg) => {
    let arr = arg.map(item => item.empSalary)
    return Math.max(...arr)
}

let emp_1 = new employee(1, "Mijohn", 5000);
let emp_2 = new employee(2, "Jeena", 3000);

console.log(employee.getSalaryDetails(emp_1,emp_2)); */


/* class Dogs{
    constructor(name,type){
        this.name = name;
        this.type = type;
    }
}

let pug = new Dogs('Ikkru', 'pug');
let doberMan = new Dogs ('Tyson','doberMan');

console.log(pug.name, doberMan.name); */

/* 
const myArray = [];

// Only change code below this line
let i = 5;
while(i >= 0){
myArray.push(i);
i--;
}

console.log(myArray) */


/* let obj = [{
    name : "Mijohn"
},{
    name : "Mijohn"
},{
    name : "Mijohn"
},{
    name : "Mijohn"
}]

obj.forEach((val)=>{
    console.log(val.name)
})
 */


/* let arr = [1,2,3,4,5];

let arr_1 = arr.map(x => x*2);

console.log(arr_1)

let res = arr.filter(value => value>3);
console.log(res); */


function Bird(name) {
    this.name = name;
    this.numLegs = 2;
  }
  
  let canary = new Bird("Tweety");
  let ownProps = [];
  // Only change code below this line
  for(let property in canary){
    console.log(property)
    if(canary.hasOwnProperty(property)){
        
      ownProps.push(property);
    }
  }

  console.log(ownProps)