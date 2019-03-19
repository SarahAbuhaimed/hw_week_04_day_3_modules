
//Q1
const sayHello = (name)=> {
    console.log("Hi " + name);
}
sayHello("Sarah")



let getOlder = (age) =>{ 
    console.log(age + 50);
}
getOlder(20)

//Q2
const multiply =  (num1,num2)=>{
    console.log(num1 * num2); }
    multiply(12,5)

const subtractFive = num => {
	const diff = num - 5 ; 
	console.log(diff);
}
subtractFive(10)

const printName = (name) =>{
    console.log(name)
}
printName("Sa")
//Q3
module.exports = {
    getOlder : getOlder,
    sayHello:sayHello
}