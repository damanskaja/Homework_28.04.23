let number = prompt("enter number")
let number_10 = number*0.10
alert("10% from "+number+" is "+number_10)

let number1 = prompt("enter number1")
let number2 = prompt("enter number2")
let numberGreater = 0
if (number1 < number2) {
    numberGreater = number2
} else {
    numberGreater = number1
}

alert(numberGreater+" is greater") 

number = prompt("enter number")
if (number < 100) {
    alert("number is less 100")
} else if (number == 100) {
    alert("number is  equal 100")
}else {
    alert("number is greater 100")
}


let userName = prompt("enter name")
let age = prompt("enter age")
if (age < 18) {
    alert("Hi, "+userName)
} else {
    alert("Hello, "+userName)
}