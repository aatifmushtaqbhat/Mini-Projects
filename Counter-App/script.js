let count = 0;

const counter = document.getElementById("count");
const inc = document.getElementById("increase");
const dec = document.getElementById("decrease");
const reset = document.getElementById("reset");

function update(){
    counter.innerText = count;
}

inc.addEventListener("click", function(){
    count++;
    update();
})
// inc.addEventListener("click", ()=> update(count++));

dec.addEventListener("mouseover", function(){
    count--;
    update();
})

reset.addEventListener("click", function(){
    count=0;
    update();
})
