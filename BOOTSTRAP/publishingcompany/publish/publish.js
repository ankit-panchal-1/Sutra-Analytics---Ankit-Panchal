let valueDisplays = document.querySelectorAll(".number");
let interval =10;
valueDisplays.forEach((valueDisplays)=>{
    let startvalue= 0;
    let endValue = parseInt(valueDisplays.getAttribute("data-num"));
    let duration = Math.floor(interval/endValue);
    let counter = setInterval(function(){
        startvalue +=1;
        valueDisplays.textContent = startvalue;
        if(startvalue == endValue){
            clearInterval(counter);
        }
    },duration);


})