// var num = prompt("enter number");
// if(num % 2 == 0){
//     console.log("divided by 2");
// }
// else{
//     console.log("not divided by 2");

// }


//----- divided by 3 program --------------------------//


// var num = prompt("enter number");
// if(num % 3 == 0){
//     console.log("divided by 3");
// }
// else{
//     console.log("not divided by 3");

// }
// var num = prompt("enter number");
// if(num % 2 == 0 && num % 3 == 0 ){
//     console.log("divided by 2 and 3");
// }
// else{
//     console.log("not divided by 2 and 3");

// }

// var num = prompt("enter number");
// if(num % 2 == 0 ){
//     console.log("divided by 2");
// }
// else if(num % 3 == 0 ){
//     console.log("divided by 3");
// }
// else{
//     console.log("not divided by 2 or 3");

// }


// var age = prompt("enter age");
// if(age < 18){
//     console.log("you are child.");
// }
// else if(age >=18 && age < 60){
//     console.log("you are adult.");
// }
// else{
//     console.log("you are oldeg");

// }

// var age = prompt("enter age");
// if(age > 60){
//     console.log("the person is senior citizen");
// }
// else{
//     console.log("the person is senior citizen not");

// }

// var num = prompt("enter one number in  1 to 7  ")
// if (num == 1) {
//     console.log("sunday");
// }
// else if (num == 2) {
//     console.log("monday");
// }
// else if (num == 3) {
//     console.log("tuesday");
// } 
// else if (num == 4) {
//     console.log("wednesday");
// } 
// else if (num == 5) {
//     console.log("thursday")

// } 
// else if (num == 6) {
//     console.log("friday");

// }
// else if (num == 7) {
//     console.log("saturday");

// }
// else {
//     console.log(prompt("enter correct number "));
// }

// var num1 = prompt("Enter first number");
// var num2 = prompt("Enter second number");
// console.log("num1 =", num1)
// console.log("num2 =", num2)

// if (num1 > num2) {
//     console.log(num1, "is largest number");

// }
// else if (num2 > num1) {
//     console.log(num2, "is largest number");

// }
// else {
//     console.log(num1, "&", num2, "is same number")

// }

//------------Write a program to find the largest number from 3 values.--------------//


// var num1 = prompt("Enter first number");
// var num2 = prompt("Enter second number");
// var num3 = prompt("Enter third number");

// console.log("num1 =",num1)//10
// console.log("num2 =",num2)//11
// console.log("num3 =",num3)//12

// //10<11
// if(num1 > num2 && num1 > num3){
//     console.log( num1 ,"is largest number")

// }//10<12
// else if(num2 > num3 && num2 > num1){
//     console.log(num2,"is largest number")

// }//10
// else if(num3 > num1 && num3 > num2){
//     console.log(num3,"is largest number")

// }
// else{
//     console.log(num1,"&",num2,"&",num3,"is same number")

// }

//-------------------------Write a program to find the smallest number from 3 values.---//


// var num1 = prompt("Enter first number");
// var num2 = prompt("Enter second number");
// var num3 = prompt("Enter third number");

// console.log("num1 =",num1)//10
// console.log("num2 =",num2)//11
// console.log("num3 =",num3)//12

// //10<11
// if(num1 < num2 && num1 < num3){
//     console.log( num1 ,"is smallest number")

// }//10<12
// else if(num2 < num3 && num2 < num1){
//     console.log(num2,"is smallest number")

// }//10
// else if(num3 < num1 && num3 < num2){
//     console.log(num3,"is smallest number")

// }
// else{
//     console.log(num1,"&",num2,"&",num3,"is same number")

// }




// --------Write a program to check whether the number is positive or negative.--------------//

// var a = prompt("enter number")
// console.log(a)
// if (a > 0){
//     console.log(a ,'is postive value')
// }
// else if (a < 0){
//     console.log(a ,'is nagative value')
// } else{
//     console.log(a ,"is not  postive & nagative value ")
// }

//-------Write a program to check whether the number is even or odd.-----------------//

// var a = prompt("enter number")
// console.log("a = ",a)
// if(a %2 == 0){
//     console.log(a,"even number")
// }
// else{
//     console.log(a,"is odd number")
// }




//--------------------Accept the age of 4 people and display the older one.-----------------------//


// let p1 = prompt("enter person1 age")
// let p2 = prompt("enter person2 age")
// let p3 = prompt("enter person3 age")
// let p4 = prompt("enter person4 age")
// console.log("p1 =",p1)
// console.log("p2 =",p2)
// console.log("p3 =",p3)
// console.log("p4 =",p4)


// if(p1 > p2 && p1 >p3 && p1 > p4){
//     console.log("person1 is oldeg ")
// }


// else if(p2 > p1 && p2 >p3 && p2 > p4){
//     console.log("person2 is oldeg ")
// }

// else if(p3 > p2 && p3 >p1 && p3 > p4){
//     console.log("person3 is oldeg ")
// }

// else if(p4 > p2 && p4 >p3 && p4 > p1){
//     console.log("person4 is oldeg ")
// }
// else{
//     console.log("all budy old")
// }



//-------------------Accept the age of 4 people and display the younger one.-----------------//

// let p1 = prompt("enter person1 age")
// let p2 = prompt("enter person2 age")
// let p3 = prompt("enter person3 age")
// let p4 = prompt("enter person4 age")
// console.log("p1 =",p1)
// console.log("p2 =",p2)
// console.log("p3 =",p3)
// console.log("p4 =",p4)


// if(p1 < p2 && p1 <p3 && p1 < p4){
//     console.log("person1 is younger ")
// }


// else if(p2 < p1 && p2 <p3 && p2 < p4){
//     console.log("person2 is younger ")
// }

// else if(p3 < p2 && p3 <p1 && p3 < p4){
//     console.log("person3 is younger ")
// }

// else if(p4 < p2 && p4 <p3 && p4 < p1){
//     console.log("person4 is younger ")
// }
// else{
//     console.log("all budyounger")
// }


//------------------Accept the age of 4 people and display the younger one and the older one.-----------//

// let p1 = prompt("enter person1 age")
// let p2 = prompt("enter person2 age")
// let p3 = prompt("enter person3 age")
// let p4 = prompt("enter person4 age")
// console.log("p1 =",p1)
// console.log("p2 =",p2)
// console.log("p3 =",p3)
// console.log("p4 =",p4)


// if(p1 > p2 && p1 >p3 && p1 > p4   ){
//     oldest = p1
// }

// else if(p2 > p1 && p2 >p3 && p2 > p4 ){
//     oldest = p2
// }

// else if(p3 > p2 && p3 >p1 && p3 > p4 ){
//     oldest = p3
// }

// else{
//     oldest = p4
// }

// if(p1 < p2 && p1 <p3 && p1 < p4){
//     younger = p1
// }


// else if(p2 < p1 && p2 <p3 && p2 < p4){
//     younger = p2
// }

// else if(p3 < p2 && p3 <p1 && p3 < p4){
//     younger = p3
// }

// else if(p4 < p2 && p4 <p3 && p4 < p1){
//     younger = p4
// }
// console.log("younger age =",younger)
// console.log("older age =",oldest)
// age = 18
// voter_id = 'yEs'.toLocaleLowerCase()
// if (age >= 18){
//     if(voter_id == 'yes'){
//         console.log('You can give vote')
//     }
//     else {
//         console.log("You are Not eligable")
//     }
// }
// else{
//     console.log('You are age is under 18 you are not eligale')
// }

