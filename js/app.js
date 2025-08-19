 /*-------------------------------- Constants --------------------------------*/
 
/*---------------------------- Variables (state) ----------------------------*/
let Firstchoice=null;
let secendchoice=null;
let countTry=0;
let countwin=0;
let countlose=0;
 let wincard=null;
 let losecard=null;

/*------------------------ Cached Element References ------------------------*/
 const Display= document.querySelector("#result-display");
 let card1=document.querySelector("#card1");
 let card2=document.querySelector("#card2");
 let card3=document.querySelector("#card3");
 let card4=document.querySelector("#card4");
 let card5=document.querySelector("#card5");
 let card6=document.querySelector("#card6");
 let ctry=document.querySelector("#setTimer");
 let parent = document.querySelector("#button-wrapper");
 /*-------------------------------- Functions --------------------------------*/
  
const plays=(event) =>{
    if(Firstchoice ===null){
    Firstchoice=event.target.dataset.value;
    }else if( secendchoice===null){
     secendchoice=event.target.dataset.value;
    }
 };
 function compare(event){
      const emoji =event.target.querySelector(".hidden");
    if(Firstchoice=== secendchoice){
         countwin+=1;
         wincard=[Firstchoice,secendchoice];
         compare2();
         Firstchoice=null;
         secendchoice=null;
    } else if(Firstchoice !==secendchoice){
         countlose+=1;
          wincard=[Firstchoice,secendchoice];
           compare2();
         Firstchoice=null;
         secendchoice=null;
     } 
     
    };

    function compare2(){
        if(countwin>=3){
         window.location.href="win.html";
        }else if(countlose>=2){
         window.location.href="lose.html";
        }
    }

 
const start =(event)=>{
  const emoji =event.target.querySelector(".hidden");
  if(emoji){
    emoji.classList.remove("hidden");
  }
     plays(event);
    if(Firstchoice&& secendchoice){
      setTimeout(compare,300);
}
 
};
const playAgain =()=>{
    Firstchoice=null;
     secendchoice=null;
     countwin=0;
     countlose=0;
     mix();
}
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
 
 document.querySelector("#card1").addEventListener('click', start);
 document.querySelector("#card2").addEventListener('click',  start);
 document.querySelector("#card3").addEventListener('click',  start);
 document.querySelector("#card4").addEventListener('click',  start);
 document.querySelector("#card5").addEventListener('click',  start);
 document.querySelector("#card6").addEventListener('click',  start);
 document.querySelector("#restart").addEventListener('click',playAgain);
 