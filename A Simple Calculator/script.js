let num1D = document.getElementById("num1");
let num2D = document.getElementById("num2");
let addBtnD = document.getElementById("addBtn");
let resultD = document.getElementById("result");


let multBtnD = document.getElementById("multbtn");
let divBtnD = document.getElementById("divbtn");


addBtn.addEventListener("click", ()=>{
    let num1 = Number(num1D.value);
    let num2 = Number(num2D.value);

    let sum = num1 + num2;

    resultD.innerText = "Result: " + sum;
})


multBtn.addEventListener("click", ()=>{
    let num1 = Number(num1D.value);
    let num2 = Number(num2D.value);

    let mult = num1 * num2;

    resultD.innerText = "Result: " + mult;
    
})


divBtn.addEventListener("click", ()=>{
    let num1 = Number(num1D.value);
    let num2 = Number(num2D.value);
    
    let div = num1 / num2;
    
    resultD.innerText = "Result: " + div;
    
})