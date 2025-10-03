let num1D = document.getElementById("num1")
let num2D = document.getElementById("num2")
let resultD = document.getElementById("result")


function calculate(operation){

    let num1 = Number(num1D.value);
    let num2 = Number(num2D.value);
    let result = 0;

    if (operation==="add"){
        result = num1 + num2;
    } else if (operation==="sub"){
        result = num1 - num2;
    } else if (operation==="mult"){
        result = num1 * num2;
    } else if (operation==="div"){
        result = num2!==0? num1/num2: "Error: Divided by 0!"
    }

    resultD.innerText = "Result: " + result;


}