const colorBtn = document.getElementById("colorBtn");
const colorText = document.getElementById("colorText");


function getRandomColor(){
    const letters = "0123456789ABCDEF";
    let color = "#";

    for (let i=0; i<6; i++){
        color += letters [Math.floor(Math.random() * 16)];
    }

    return color;
}


colorBtn.addEventListener("click", ()=>{
    const newColor = getRandomColor();
    document.body.style.backgroundColor = newColor;
    colorText.innerText = newColor;
})
