

function getFormvalue(){
    let fName1 = document.getElementById('fname');
    let lName1 = document.getElementById('lname');

    let value1 = fName1.value;
    let value2 = lName1.value;
    console.log(value1);
    console.log(value2);   
    document.getElementById("out").innerHTML = value1 + ',';
    document.getElementById("out").innerHTML = value2;
}
