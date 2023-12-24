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
    }, 250);
}
function userFlash(btn) {
    btn.classList.add("userFlash");
    setTimeout(function () {
        btn.classList.remove("userFlash");
    }, 250);
}

function levelUp() {
    userSeq = [];
    level++;
    h2.innerText = `Level ${level}`;

    let ranIdx = Math.floor(Math.random() * 4);
    let randClr = btns[ranIdx];
    gameSeq.push(randClr);
    let randBtn = document.querySelector(`.${randClr}`);
    btnFlash(randBtn);
}

function checkAns(idx){
    
    if(userSeq[idx] === gameSeq[idx]){
        if(userSeq.length == gameSeq.length){
            setTimeout(levelUp, 750);
        }
    }
    else{
        h2.innerHTML = `Game Over! Your Score was <b>${level}</b>. <br> Press Any Key to Start.`;
        document.querySelector("body").style.backgroundColor = "red";
        setTimeout(function (){
            document.querySelector("body").style.backgroundColor = "cyan";
        },250)
        reset();
    }
}

function btnPress(){
    let btn = this;
    userFlash(btn);

    let userColor = btn.getAttribute("id");
    userSeq.push(userColor);
    checkAns(userSeq.length-1);
}

let allBtns = document.querySelectorAll(".btn");
for(btn of allBtns){
    btn.addEventListener("click", btnPress);
}

function reset(){
    started = false;
    gameSeq = [];
    userSeq = [];
    level = 0;
}


