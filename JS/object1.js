// let obj = {
//     a : [
//         {
//             id: 1,
//             firstName: "John",
//             lastName: "Doe",
//             age: 50,
//             eyeColor: "blue"
//         },

//         {
//             id: 2,
//             firstName: "Bilal",
//             lastName: "Doe",
//             age: 50,
//             eyeColor: "blue"
//         }

//     ],
//     b : [
//         {
//             id: 1,
//             firstName: "ankit",
//             lastName: "Doe",
//             age: 50,
//             eyeColor: "blue"
//         },

//         {
//             id: 2,
//             firstName: "John",
//             lastName: "Doe",
//             age: 50,
//             eyeColor: "blue"
//         }

//     ]

// }

// // let access = obj.a[0].firstName
// // console.log(access)

// for(let i in obj.a){
//     let data = obj.a[i].firstName
//     let data1 = obj.b[i].firstName

//     console.log(data)
//     console.log(data1)

// }

// Task1 print all keys and values same like Object


// let person = {
//     id:1,
//     f_name:"Pranav",
//     l_name:"Patel",
//     gener:'Male',
//     Birthda:"21/07/2001",
//     hobbise :["Football","Gamming","traweling"]
// }
// console.log("FirstName:"+person.f_name)
// console.log("LastName:"+person.l_name)
// console.log("Gender:"+person.gender)
// console.log("BOD:"+person.Birthda)
// console.log("Hobbbise:"+person.hobbise)


let data = {
    "College": {
        "Silveroak": {
            "Students": [
                { "id": 1, "name": "Amit" }, { "id": 2, "name": "Rahul" }, { "id": 3, "name": "Kishan" }, { "id": 4, "name": "Yash" }, { "id": 5, "name": "maulik" }]
        },
        "Vidhyanagri": {
            "Students": [
                { "id": 1, "name": "Amit" }, { "id": 2, "name": "Rahul" }, { "id": 3, "name": "Kishan" }, { "id": 4, "name": "Yash" }, { "id": 5, "name": "maulik" }
            ]
        },
        "Growmore": {
            "Students": [
                { "id": 1, "name": "Amit" }, { "id": 2, "name": "Rahul" }, { "id": 3, "name": "Kishan" }, { "id": 4, "name": "Yash" }, { "id": 5, "name": "maulik" }]
        },
        "Faith": {
            "Students": [
                { "id": 1, "name": "Amit" }, { "id": 2, "name": "Rahul" }, { "id": 3, "name": "Kishan" }, { "id": 4, "name": "Yash" }, { "id": 5, "name": "maulik" }]
        },
    }
}


// let list1 =[]

// for (let collegeName in data.College) {
//     console.log("College:", collegeName);
//     list1.push(collegeName);
//     let students = data.College[collegeName].Students;
//     for (let i = 0; i < students.length; i++) {
//         console.log("Student ID:", students[i].id, "Name:", students[i].name);
//     }
// }


let list1 = [['College', 'Student_id', 'Student_name']];

for (let collegeName in data.College) {
    let students = data.College[collegeName].Students;
    for (let i = 0; i < students.length; i++) {
        list1.push([collegeName, students[i].id, students[i].name]);
    }
}

console.log(list1);
