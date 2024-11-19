const boxes = document.querySelectorAll(".box");
const reset = document.querySelector(".reset");
const start = document.querySelector(".start");
const paraWin = document.querySelector("#paraWin");
const sms = document.querySelector(".result");

const winPatterns = [
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8]
]

let turn0 = true;

const resetGame = () => {
    enableBtn();
    sms.classList.add("hide");
};


boxes.forEach((box)=>{
    box.addEventListener("click" ,()=>{
        if(turn0){
            box.innerText = "O";
            turn0 = false;
        }else{
            box.innerText = "X";
            turn0 = true;
        }
        box.disabled = true;
        winCheck();
    })
});

const disabledBtn = () =>{
    for(let box of boxes){
        box.disabled = true;
    }
};

const enableBtn = () =>{
    for(let box of boxes){
        box.disabled = false;
        box.innerText = "";
    }
};

const showWinner = (winner) =>{
    paraWin.innerText= `Winner! player ${winner}`
    sms.classList.remove("hide");
    disabledBtn();
};

const winCheck = () =>{
    for( let pattern of winPatterns){
        if(boxes[pattern[0]].innerText != "" && boxes[pattern[1]].innerText != "" && boxes[pattern[2]].innerText != "" ){
              if(boxes[pattern[0]].innerText === boxes[pattern[1]].innerText &&
                boxes[pattern[1]].innerText === boxes[pattern[2]].innerText){
                showWinner(boxes[pattern[0]].innerText);
                }
         }
    }
};

start.addEventListener("click", resetGame);
reset.addEventListener("click", resetGame);




