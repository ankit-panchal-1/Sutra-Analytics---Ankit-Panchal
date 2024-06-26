list1 = [
    [
        [1, 2, 3, 4],
        [5, 6, 7],
        [
            [8, 9, 10],
            [20, 21, 21]
        ]
    ],
    [
        ["Shakti", "Harsh"],
        ["Prem", "Smit", "Kishan"]
    ]
]

s1 = []
let a = list1[0][0][0] + list1[0][0][1] + list1[0][0][2] + list1[0][0][3]
s1.push(a)
console.log(s1)

s2=[]
a = list1[0][1][0] + list1[0][1][1] + list1[0][1][2]
s2.push(a)
console.log(s2)

s3=[]
a = list1[0][2][0][0] + list1[0][2][0][1] + list1[0][2][0][2] + list1[0][2][1][0] + list1[0][2][1][1] + list1[0][2][1][2]
s3.push(a)
console.log(s3)


sum = []
a = s1[0]+s2[0]+s3[0]
sum.push(a)
console.log("Sum=",sum)


list =[]
a= list1[1][0].concat(list1 [1][1])
list.push(a)
console.log(list)
a.sort(); 
console.log("ALPHABET WISE",list)

