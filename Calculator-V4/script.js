let num1D = document.getElementById("num1");
let num2D = document.getElementById("num2");
let resultD = document.getElementById("result");

let historyList = document.getElementById("historyList");

let history = [];



function calculate(operation){
    let num1 = Number(num1D.value);
    let num2 = Number(num2D.value);
    let result = 0;
    
    let symbol = "";


    if (operation==="add"){
        result = num1 + num2;
        symbol = "+";
    } else if (operation==="sub"){
        result = num1 - num2;
        symbol = "-";
    } else if (operation==="mult"){
        result = num1 * num2;
        symbol = "*";
    } else if (operation==="div"){
        result = num2!==0? num1/num2 : "Can't be divided by Zero";
        symbol = "/";
    }

    resultD.innerText = "Result: " + result;


    if (typeof result === "number"){
        if (result > 0){
            resultD.style.color = "green";
        } else if (result < 0){
            resultD.style.color = "red";
        } else {
            resultD.style.color = "purple";
        }
    } else {
        resultD.style.color = "black";
    }



    if (typeof result === "number"){
        let entry = `${num1} ${symbol} ${num2} = ${result}`;
        history.push(entry);

        let li = document.createElement("li")
        li.innerText = entry;
        historyList.appendChild(li);
    }



}


function clearSc(){
    document.getElementById("num1").value = " ";
    document.getElementById("num2").value = " ";
    document.getElementById("result").innerText = `"Result will appear here"`;
    resultD.style.color = "black";
}



function clearHistory(){
    history = [];
    historyList.innerHTML = "";
}






document.addEventListener("keydown", function (event){
    if (event.key === "Enter")
        calculate("add");
})
