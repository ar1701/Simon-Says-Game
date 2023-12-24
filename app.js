let gameSeq = [];
let userSeq = [];
let h2 = document.querySelector("h2");

let btns = ["one", "two", "three", "four"];

let started = false;
let level = 0;

document.addEventListener("keypress", function () {
    if (started == false) {
        started = true;
        levelUp();
    }


});

function btnFlash(btn) {
    btn.classList.add("flash");
    setTimeout(function () {
        btn.classList.remove("flash");
    }, 300);
}
function userFlash(btn) {
    btn.classList.add("userFlash");
    setTimeout(function () {
        btn.classList.remove("userFlash");
    }, 300);
}

function levelUp() {
    level++;
    h2.innerText = `Level ${level}`;

    let ranIdx = Math.floor(Math.random() * 3);
    let randClr = btns[ranIdx];
    let randBtn = document.querySelector(`.${randClr}`);
    btnFlash(randBtn);
}

function btnPress(){
    let btn = this;
    console.log(this);
    userFlash(btn);
}

let allBtns = document.querySelectorAll(".btn");
for(btn of allBtns){
    btn.addEventListener("click", btnPress());
}




