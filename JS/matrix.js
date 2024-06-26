let matrix = [
    [1,2,3],
    [4,5,6],
    [7,8,9]
]

let r1 =[]
let r2 =[]
let r3 =[]
let c1 =[]
let c2 =[]
let c3 =[]
let x1=[]
let x2=[]

sum = matrix[0][0]+matrix[0][1]+matrix[0][2]
r1.push(sum)
console.log("row1=",r1)

sum = matrix[1][0]+matrix[1][1]+matrix[1][2]
r2.push(sum)
console.log("row2=",r2)

sum = matrix[2][0]+matrix[2][1]+matrix[2][2]
r3.push(sum)
console.log("row3=",r3)

sum = matrix[0][0]+matrix[0][1]+matrix[0][2]
c1.push(sum)
console.log("row1=",c1)

sum = matrix[1][0]+matrix[1][1]+matrix[1][2]
c2.push(sum)
console.log("cow1=",c2)

sum = matrix[2][0]+matrix[2][1]+matrix[2][2]

c3.push(sum)
console.log("cow1=",c3)


sum = matrix[0][0]+matrix[1][2]+matrix[2][2]

x1.push(sum)
console.log("cross1=",x1)

sum = matrix[0][2]+matrix[1][2]+matrix[2][0]

x2.push(sum)
console.log("cross2=",x2)