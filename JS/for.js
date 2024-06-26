// sum = 0

// for(let i = 0; i <= 10;i++){
//     sum+=i
// }
// console.log('Sum = ', sum)

//Take1-100 number using for loop count which is divisible by 2
// num_of_print = 0;
// for (let i=1;i <=100;i++){
//     if(i %2 == 0){
//     num_of_print +=1;
//     } 
// }
// console.log("num_of_print =",num_of_print)

//Take 1-100 numbers in reverse using loop without using inbuilt method


// for (let i=100;i >=1;i--){
//  console.log("i =",i);
// }

//---------------Take 1-100 numbers and Find the all numbers which are divisible by 5 and increase by 5 then print the all numbrs

// for (i=1;i<=100;i++){
//     if(i % 5 ==0 && (i + 5) % 5 === 0){
//         console.log("i=",i)
//     }
// }


//5




// Write a Python program to find those numbers which are divisible by 7 and multiples of 5, between 1500 and 2700 (both included).

// for (let i = 1500 ; i<=2700; i++){
//     if(i %7 ==0 && i %5 ==0){
//         console.log("i=",i)
//     }
// }

//
// let a= 121;
// let len = a.length;
// for(i= 0; i< len/2;i ++){
//     if(a[i] !== a[len - 1 - i]){
//         console.log("is not")
//     }
//     console.log("not")
// }


//-------# Make a list (sum_list = [2,12,21,32,31,33,55,67,65,89,19,17,18,16,12]) print odd and even numbers differently and do the sum of both differently and store them in a new list.
// let even = [];
// let odd = [];
// sum_odd =0;
// sum_even = 0;
// let num = [2, 12, 21, 32, 31, 33, 55, 67, 65, 89, 19, 17, 18, 16, 12];
// for (let obj of num) {
//     if (obj % 2 == 0) {
//         even.push(obj);
//         sum_even += obj;
//     } else {
//         odd.push(obj);
//         sum_odd+= obj
//     }
// }
// sum_all = [sum_odd,sum_even]
// console.log("Odd Numbers:", odd);
// console.log("Even Numbers:", even);
// console.log("Odd Numbers sum:",sum_odd);
// console.log("Even Numbers sum:", sum_even);
// console.log("sum all",sum_all)


//# Make a list(list1 = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50]) and find the numbers and print the numbers which are divisible by 2 in a new list.


// let list1 =  [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50];
// divBy_2 = []
// for (let obj of list1){
//     if (obj %2 == 0){
// divBy_2.push(obj);
//     }
// }
// console.log("divisible by 2",divBy_2)


//Take a range of 100 check the numbers divisible by 3,4,5 and store them in different variables.
// let divBy_3 =[]
// let divBy_4 = []
// let divBy_5 = []
// for(i = 1; i<=100;i++){
//     if(i% 3 == 0){
//         divBy_3.push(i);
//     }

//     if(i% 4 == 0){
//         divBy_4.push(i);
//     }

//     if(i% 5 == 0){
//         divBy_5.push(i);
//     }
// }
// console.log("divisible by 3 =",divBy_3)
// console.log("divisible by 4 =",divBy_4)
// console.log("divisible by 5 =",divBy_5)


//# Reverse a given string using a while loop

// let word = "ABCDE";
// let l = word.length
// let x= l-1
// console.log(l)
// let reversed = "";
// while(x>=0) {
//     reversed += word[x];
//     x--;
// }
// console.log(reversed)

// # MAke a list (fruits = ["apple", "banana", "cherry", "kiwi", "mango"]) , find the fruits which contain "a" or "A" and print all them in a newlist.







// let fruits = ["apple", "banana", "cherry", "kiwihaiAAA", "mmAm"];
// let aList = []

// for(let i = 0;i<fruits.length;i++){
//   let f = fruits[i].toLowerCase()
//   for(let j = 0;j<fruits[i].length;j++){
//       if (f[j] == 'a'){
//         aList.push(fruits[i])
//  break;
//       }
//     }
// }
// console.log(aList)


// let fruits = ["apple", "banana", "cherry", "kiwihaiAAA", "mmAm"];
// let aList = []
// for (let obj of fruits) {
//   for (let char of obj) {
//     c = char.toLowerCase()
//     if (c === 'a') {
//       aList.push(obj);
//       break;
//     }
//   }
// }
// console.log(aList)


//   -----------------------------Take1-100 number using for loop count which is divisible by 2
// let count = 0;
// for(i=1;i<=100;i++){
//     if(i % 2 == 0){
//         count++;
//     }
// }
// console.log('count=',count)

//----------------------------------

//---------------------------# Loop through a string and print each character
// let a ="hello"
// for(char  of  a){
//     console.log(char);
// }

//---------------

//-----------# *Display the first 20 even numbers.

// let even = []
// for(i=1;i<=40;i++){
//         if(i %2 == 0){
//             even.push(i);
//         }
//     }
    
// console.log(even)

//----------------# Take a number from the user and find the factorial of the respected number...

// let num = 5
// let val =1
// for(i = 1;i<=num;i++){  1x2=2
//     val =val * i ;
// }
// console.log(val)

//---# Print the name "Radhika" every single letter in a single line and then after every letter i want "?"...
// let s= "Radhika"
// for(let c of s){
// console.log(c,"?")
// }

//------------Take 1-100 numbers in reverse using loop without using inbuilt method
// for(i=100;i>=1;i--){
//     console.log(i)
// }


//---------Take 1-100 numbers and Find the all numbers which are divisible by 5 and increase by 5 then print the all numbrs
// let list =[]
// for(i=1;i<=100;i++){
//     if((i % 5 == 0) && ((i + 5) % 5 == 0 )){
//         list.push(i)
//     }
// }
// console.log(list)


//----Take number of list and Find maximum & minimum number without using inbult function


// let list=[8,9,2,7]
// let max = [0]
// let min = [6]
// for(i=1;i< list.length;i++){
//     if(list[i]>max){
//         max = list[i]
//     }
//     if(list[i]<min){
//         min = list[i]
//     }

// }
// console.log(min)
// console.log(max)


//----Write a Python program that prints all the numbers from 0 to 6 except 3 and 6.
// for(i=0;i<=6;i++)
//     {
//         if
//         (i !==3 && i!==6){
//             console.log(i)
//         }
//     }


//-------------Take number of list and Find Duplicate values in list without using inbuilt function
// let dup = []
// let a= [1,2,3,4,5,6,3,2,2]
// for(i=0;i<a.length;i++){
//     for(j=0;j<a.length;j++){
//         if(a[j] == a[i] && !dup.includes(a[i])){
//             dup.push(a[i])
//         }
//     }
// }
// console.log(dup)

//  -----------Take number of list and Find Unique number in list without using inbult function


// let dup = []
// let a= [1,2,3,4,5,6,3,2,2]
// for(i=0;i<a.length;i++){
//     for(j=i+1;j<a.length;j++){
//         if(a[j] == a[i] && !dup.includes(a[i])){
//             dup.push(a[i])
//         }
//     }
// }
// console.log(dup)

