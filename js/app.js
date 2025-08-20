 /*-------------------------------- Constants --------------------------------*/
 
/*---------------------------- Variables (state) ----------------------------*/
 let countwin=0;
let countlose=0;
 let cardf=null;
 let cards=null;

/*------------------------ Cached Element References ------------------------*/
  let count=document.querySelector("#countplay");
  let parent = document.querySelector("#button-wrapper");
 /*-------------------------------- Functions --------------------------------*/
 function compare(){
    const Firstchoice=cardf.dataset.value;
    const secendchoice=cards.dataset.value;

    if(Firstchoice=== secendchoice){
         countwin+=1; 
         compare2();
          cardf=null;
          cards=null;
    } else{
        cardf.querySelector("div").classList.add("hidden");
        cards.querySelector("div").classList.add("hidden");
         countlose+=1;
          compare2();
        cardf=null;
        cards=null;
         
     } 
     count.textContent=`win: ${countwin} | lose ${countlose}`;
         
    };

    function compare2(){
        if(countwin>=3){
         window.location.href="win.html";
        }else if(countlose>=4){
         window.location.href="lose.html";
        }
    }

 
function start(event){
    const card =event.currentTarget;
  const emoji =card.querySelector(".hidden");
  if(emoji){
    emoji.classList.remove("hidden");
  }
  if(!cardf){
    cardf=card;
  }else if(!cards && card !==cardf){
    cards=card;
    setTimeout(compare,800);
  }
   
};

     mix();

function mix() {
   let arr = [card1, card2, card3, card4, card5, card6];

  for (let i = arr.length - 1; i > 0; i--) {
    const k = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[k]] = [arr[k], arr[i]];
  }
  parent.innerHTML = "";
  arr.forEach(card => parent.appendChild(card));
}

window.onload = () => {
  mix();
};

 

/*----------------------------- Event Listeners -----------------------------*/
 
document.querySelectorAll("button").forEach(card=>{
    card.addEventListener("click",start)
});
