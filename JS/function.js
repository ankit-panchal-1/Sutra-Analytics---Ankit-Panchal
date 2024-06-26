function text() {
    return "hello world"
}
console.log(text())

function add() {
    let a = 10
    let b = 11
    return a + b;
}
console.log("add of two number=",add())

function avg() {
    let a = 10;
    let b = 12;
    let c = 3;
    let d = 4;
    let e = 3;
    return a + b + c + d + e / 5
}
console.log("avg of five number=",avg())

let x = multi();
function multi(a = 2, b = 3) {
    return a * b;
}
console.log("multi for two value=",x)

function len() {
    let a = ['a', 'b', 'c']
    return a.length
}
console.log("length of list=",len())



function conv() {
    let usd = 20
    return usd * 82.00
}
console.log("usd amount convert to INd=", conv())

// function fact(a) {
//     a = 5;
//     return a * (a - 1);

// }
// console.log(fact())

function fact(a = 5) {
    return (a != 1) ? a * fact(a - 1) : 1;
}
console.log(fact());


// let Arr = [2, 3, 4, 5, 6, 7, 8, 9, 10, 22, 11, 5, 43, 30, 20, 22]
// let num = 5

//     Arr.reverse()
//     console.log(Arr)

//     Arr.reduce()
//     console.log(Arr)


// function reverseNumber(num) {
//     let reversed = 0;
//     while (num > 0) {
//         reversed = (reversed * 10) + (num % 10);
//         num = Math.floor(num / 10);
//     }
//     return reversed;
// }


//  rev()
// console.log(rev_arr)
// function findNum(Arr, numToFind){
//         console.log(Arr)
//             for(let i=0; i<Arr.length; i++){
//                 if(Arr[i] == numToFind){
//                     console.log(Arr[i])
//                 }
//             }

//     }
//     findNum(Arr, numToFind)
let Arr = [2, 3, 4, 5, 6, 7, 8, 9, 10, 22, 11, 5, 43, 30, 20, 22];
let numToFind = 5;
let rev_arr=[]
let count = 0 
function val(Arr,numToFind){
    for (let i = Arr.length -1;i>=0 ;i--) {
        rev_arr.push(Arr[i])
    }
    console.log(rev_arr) 
    for(a of Arr){
        if(a == numToFind){
            console.log(a)
            count++;
        }
    }
    console.log("count of 5 =",count)
}
val(Arr,numToFind)


//
let b = ['ankit','bilal','mit'];
function l(b){
    for(name1 of b){
        console.log(name1)
    }
}
l(b)


function mul(a=10,b=10){
    return a+b
}
console.log(mul())