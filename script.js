let boxes=document.querySelectorAll(".box");
let resetbtn=document.querySelector("#reset-btn");
let newbtn=document.querySelector("#new-btn");
let msgContainer=document.querySelector(".msg-container");
let msg=document.querySelector("#msg");
let turnO=true
const winningPattrens =[
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8]
];
const ResetGame =() =>{
    turnO=true;
    enableBoxes();
    msgContainer.classList.add("hide");
};
boxes.forEach((box)=>{
    box.addEventListener("click" ,()=>{
        console.log("box was clicked")
        if(turnO)
        {
            box.innerText ="O";
            turnO=false;
        }
        else
        {
            box.innerText ="X";
            turnO=true;
        }
        box.disable=true;
        CheckWinner();
    });

   
    
});

const disableBoxes =() =>{
        for(let box of boxes)
        {
            box.disable=true;
            
        }
};
const enableBoxes =() =>{
        for(let box of boxes)
        {
            box.disable=false;
            box.innerText="";
            
        }
}
const shootFullScreenConfetti = () => {
  const duration = 1.5 * 1000;
  const end = Date.now() + duration;

  (function frame() {
    confetti({
      particleCount: 10,
      angle: 60,
      spread: 360,
      startVelocity: 10, 
      decay: 0.92,
      origin: { x: Math.random(), y: Math.random() - 0.5 },
      colors: ['#FFD700', '#FFFACD', '#FFA500']
    });

    if (Date.now() < end) {
      requestAnimationFrame(frame);
    }
  })();
};
const showWinner = (winner) => {

  msg.innerText = ` Congratulations! Winner is Player ${winner} `;
  msgContainer.classList.remove("hide");
  disableBoxes();
  shootFullScreenConfetti();

};
 const CheckWinner =() =>{
        for(pattern of winningPattrens)
        {
                let pos1val=boxes[pattern[0]].innerText;
                let pos2val=boxes[pattern[1]].innerText;
                let pos3val=boxes[pattern[2]].innerText;

            if(pos1val != "" && pos2val !="" && pos3val !="")
            {
                if(pos1val==pos2val && pos2val==pos3val)
                {
                    console.log(" Winner",pos1val);
                    showWinner(pos1val);
                }
            }
        }

    }

newbtn.addEventListener("click",ResetGame);
resetbtn.addEventListener("click",ResetGame);