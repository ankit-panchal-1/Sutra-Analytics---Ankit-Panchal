let  student_dt = [
    [72, 85, 87, 90, 69,//0
        [1, 2, 3, 4, 5,
             [6, 7, 8, 9,
                
                [1, 2, 3, 4]
            ]
        ]
    ],
    [80, 87, 65, 89, 85],//1
    [96, 91, 70, 78, 97],
    [90, 93, 91, 90, 94],
    [57, 89, 82, 69, 60]
]

let sum_arr =[]
sum = student_dt[0][5][5][4][0] +student_dt[0][5][5][4][1]+student_dt[0][5][5][4][2]+student_dt[0][5][5][4][3]
sum_arr.push(sum)
console.log(sum_arr)