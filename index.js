// question 1

let A = 222
let B = 100

if(A > B){
  console.log("A Is Greater than B")
} else{
  console.log("B is Greater than A")
}

// question 2

let val_1 = 12
let val_2 = 13
let val_3 = 14

if(val_1 > val_2 && val_1 > val_3){
  console.log("Val_1 is Greater")
}
else if(val_2 > val_1 && val_2 > val_3){
  console.log("Val_2 is Greater")
}
else{
  console.log("Val_3 is Greater")
}

// question 3

let num = 10

if (num > 0){
  console.log("It is Positive")
}
else if(num < 0){
  console.log("it is negative")
}
else if (num == 0){
  console.log("the number is 0")
}
else{
  console.log("Enter the number this is not number")
}


// quetsion 4

let divisible = 5

if(divisible % 5 == 0 && divisible % 11 == 0){
  console.log("It is divisible by 5 and 11")
}
else if(divisible % 5 == 0){
  console.log("It is divisible by 5")
}
else if(divisible % 11 == 0){
  console.log("It is divisible by 11")
}
else{
  console.log("It is not")
}

// question 5

let even = "A"

if(even % 2 == 0){
  console.log("Its Even Number")
}
else{
  console.log("it is odd number")
}

// question 6

let year =  2020

if(year % 4 == 0){
  console.log("its leap year")
}
else{
  console.log("Its not leap year")
}

// question 7

let alphabet = "A"

if(alphabet >= "A" && alphabet <= "Z"){
  console.log("its is Alphabet")
}
else{
  console.log("its not")
}


// question 8

let vowel = "o"

if(vowel == "a" || vowel == "e" || vowel == "i" || vowel == "o" || vowel == "u"){
  console.log("It is vowel")
}
else if(vowel){
  console.log("it is consonent")
}

//  question 9


let  character = "#44"
    
if(character >= "A" && chaacterr <= "Z"){
  console.log("this Is UpperCase")
}
else if(character >=0 && character <= 9){
  console.log("digit")
}
else{
  console.log("special character")
}


// question 10


let  char = "a"

if(char >= "A" && char <= "Z"){
  console.log("this Is UpperCase")
}
else if(char >="a" && char <= "z"){
  console.log("this is Lowercase ")
}
else{
  console.log("it is not character")
}

// question 11


let week_number = 1
 let week = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","satur"]

if(week_number == 1){
  console.log("Its sunday")
}
else if(week_number == 2){
  console.log("Its monday")
}
else if(week_number == 3){
  console.log("Its tuesday")
}
else if(week_number == 4){
  console.log("Its Wednesday")
}
else if(week_number == 5){
  console.log("Its thursday")
}
else if(week_number == 6){
  console.log("Its friday")
}
else if(week_number == 7){
  console.log("Its saturday")
}
else{
  console.log("it not day")
}

// question 12

let month = 1

if (month == 1){
  console.log("There are 31 days in January")
}
else if(month == 2){
  console.log("There are 28 days in February")
}
else if(month == 3){
  console.log("There are 31 days in March")
}
else if(month == 4){
  console.log("There are 30 days in April")
}
else if(month == 5){
  console.log("There are 31 days in May")
}
else if(month == 6){
  console.log("There are 30 days in June")
}
else if(month == 7){
  console.log("There are 31 days in July")
}
else if(month == 8){
  console.log("There are 31 days in August")
}
else if(month == 9){
  console.log("There are 30 days in September")
}
else if(month == 10){
  console.log("There are 301 days in October")
}
else if(month == 11){
  console.log("There are 30 days in November")
}
else if(month == 12){
  console.log("There are 31 days in December")
}
else{
  console.log("No Month")
}

//  question 14 

let triangle_1 = 60;
let triangle_2 = 60;
let triangle_3 = 60;

let total_value = triangle_1+triangle_2+triangle_3
if(total_value == 180){
  console.log("its triangle")
}
else{
  console.log("Its not")
}

// question 15

let tri_1 = 60;
let tri_2 = 60;
let tri_3 = 180;

if(tri_1 + tri_2 < tri_3){
  console.log("First triangle 3 is biggest")
}
else if(tri_2 + tri_3 < tri_1){
  console.log("Its not")
}

// question 16


let t_1 = 60;
let t_2 = 60;
let t_3 = 60;



if(t_1 == t_2 && t_1 == t_3){
  console.log("its triangle")
}
else if(t_1 == t_2 || t_1 == t_3 || t_2 == t_3 || t_3 == t_1){
  console.log("its isoceles")
}
else{
  console.log("Its scalene")
}

// question 18

let sell = 5000
let cost = 2500

if(sell > cost){
  let profit = sell - cost
  console.log("Profit is " + profit)
}
else{
  let loss = cost - sell
  console.log("Loss is " + loss)
}


// question 19


  let biology =80
  let maths = 81
  let Physics = 81
  let chemistry = 71
  let computer_science = 84


let  marks_total = biology+maths+Physics+chemistry+computer_science
let Percentage = marks_total/5

console.log(Percentage)


if(Percentage >= 90){
  console.log("Grade A")
}
else if (Percentage >= 80){
  console.log("Grade B")
}
else if (Percentage >= 70){
  console.log("Grade C")
}
else if (Percentage >= 60){
  console.log("Grade D")
}
else if (Percentage >= 50){
  console.log("Grade E")
}
else if (Percentage >= 40){
  console.log("Grade F")
}
else{
  console.log("You Are Fail")  
}


// question 20

let basic_salary = 2000
let hra = 0; 
let da = 0;
if(basic_salary <= 10000){
  hra = 20;
  da = 80;
}
else if(basic_salary <= 20000){

  hra = 25;
  da =  90;
  
}
else if(basic_salary <= 20000){ 
  hra = 30;
  da = 95;
}

let based_amount = basic_salary * hra / 100
console.log(based_amount)
let da_amount = basic_salary * da / 100
console.log(da_amount)
let gross_salary = based_amount + da_amount + basic_salary
console.log("Gross Salary is " + gross_salary)




let t1 = 12

let month_array = [
  {
  name:"january",
  days:31,
  },
   {
  name:"february",
  days:30
  },
   {
  name:"March",
  days:31
  },
   {
  name:"April",
  days:30,
  },
   {
  name:"May",
  days:31,
  },
   {
  name:"june",
  days:30,
  },
   {
  name:"july",
  days: 31
  },
   {
  name:"August",
  days:31,
  },
   {
  name:"September",
  days:30,
  },
   {
  name:"October",
  days:31,
  },
   {
  name:"November",
  days:30,
  },
  {
  name:"November",
  days:31,
  },

]

console.log(month_array[t1-1].name)



// question 12



let cash = 150

if(cash >= 500){
  let total = Math.floor(cash / 500)
  console.log("total cash 500 is " + total)
  cash = cash % 500
}
if(cash >= 200){
  let total =  Math.floor(cash / 200)
  console.log("total cash 200 is " + total)
  cash = cash % 200
}
if(cash >= 100){
  let total =  Math.floor(cash / 100)
  console.log("total cash 100  is " + total)
  cash =  cash % 100
}
if(cash >= 50){
  let total =  Math.floor(cash / 50)
  console.log("total cash 50  is " + total)
  cash =  cash % 50
}
if(cash >= 20){
  let total =  Math.floor(cash / 20)
  console.log("total cash 20  is " + total)
  cash =  cash % 20
}
if(cash >= 10){
  let total =  Math.floor(cash / 10)
  console.log("total cash 10  is " + total)
  cash =  cash % 10
}
if(cash >= 5){
  let total =  Math.floor(cash / 5)
  console.log("total rupees 5  is " + total)
  cash =  cash % 5
}
if(cash >= 2){
  let total =  Math.floor(cash / 2)
  console.log("total rupee 2  is " + total)
  cash =  cash % 2
}
if(cash >= 1){
  let total =  Math.floor(cash / 1)
  console.log("total rupee 1  is " + total)
  cash =  cash % 1
}

// question 21


let units = 101
let price = 0

if(units > 250){
  price = 25 + 75 + 120+(units - 250) * 1.50
}
else if (units > 150){
  price = 25 + 75 + (units - 150) * 1.2
}
else if (units > 100){
  price = 25 + (units - 50) * 0.75
}
else if (units > 50){
  price = 25 + (units - 50) * 0.75
}
else{
  price = units * 0.5
}

console.log(price)

let electricity = price * 20 / 100
console.log(electricity)
let surcharge = price + electricity
console.log(surcharge)