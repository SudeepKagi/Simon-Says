let userSeq = [];
let gameSeq = [];
let btns = ["pink","blue","yellow","green"];

let started = false;
let level = 0;

let h4 = document.querySelector("h4")

document.addEventListener("keypress",()=>{
    if(started == false){
        console.log("The game started");
        started = true;
        levelUp();
    }
})
function btnFlash(btn){
    btn.classList.add("flash");
    setTimeout(()=>{
        btn.classList.remove("flash")
    },200)
}

function levelUp(){
    userSeq = [];
    level++;
    h4.innerHTML = `Level: ${level}`;
    let randIdx = Math.floor(Math.random()*3);
    let randColor = btns[randIdx];
    let randBtn = document.querySelector(`#${randColor}`); 
    gameSeq.push(randColor);
    console.log(gameSeq);
    btnFlash(randBtn);
}

function checker(idx){

    if(gameSeq[idx] === userSeq[idx]){
        if(gameSeq.length == userSeq.length){
            setTimeout(levelUp,500)
        }
    }else{
        h4.innerHTML = `Game over! Your score: <b>${level}</b> <br> Press any key to restart`;
        let body = document.querySelector("body");
        body.classList.add("bg-flash");
        setTimeout(()=>{
            body.classList.remove("bg-flash")
        },300)
        reset();
    }
}

function btnPress(){
    userColor = this.getAttribute("id");
    userSeq.push(userColor);
    console.log(userSeq);

    checker(userSeq.length-1);
}
let allBtn = document.querySelectorAll(".btns");
for(btn of allBtn){
    btn.addEventListener("click",btnPress);
}
function reset(){
    started = false;
    gameSeq = [];
    userSeq = [];
    level = 0;
}