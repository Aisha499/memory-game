/*-------------------------------- Constants --------------------------------*/
 
/*---------------------------- Variables (state) ----------------------------*/
let Firstchoice=null;
let scendchoice=null;
let setTime=0;


/*------------------------ Cached Element References ------------------------*/
 const Display= document.querySelector("#result-display");
 let card1=document.querySelector("#card1");
 let card2=document.querySelector("#card2");
 let card3=document.querySelector("#card3");
 let card4=document.querySelector("#card4");
 let time=document.querySelector("#setTimer");
 const restart=document.querySelector("#restart");

/*-------------------------------- Functions --------------------------------*/
  
const plays=(event) =>{
    if(Firstchoice ===null){
    Firstchoice=event.target.dataset.value;
    }
    else {
        if(Firstchoice===event.target.dataset.value){
            return;
        }
    scendchoice=event.target.dataset.value;
    }

};
const compare =() =>{

    if((Firstchoice==='card1' && scendchoice==='card3' )|| (Firstchoice==='card2' && scendchoice==='card4') || (Firstchoice==='card5' && scendchoice==='card6') || (Firstchoice==='card3' && scendchoice==='card1' )|| (Firstchoice==='card4' && scendchoice==='card2') || (Firstchoice==='card6' && scendchoice==='card5') ){
        window.location.href="win.html";
    } else {
        window.location.href="lose.html";
     }};


 
const start =(event)=>{
    plays(event);
    if(Firstchoice&&scendchoice){
    compare();
     }
     setInterval(timer,1000);
     
}
 
const playAgain =()=>{
    Firstchoice=null;
    scendchoice=null;
    window.location.href="index.html";
}

function timer(){
setTime +=Math.floor(Math.random()*3);
time.textContent=setTime;

}
 

/*----------------------------- Event Listeners -----------------------------*/
 
 document.querySelector("#card1").addEventListener('click', start);
 document.querySelector("#card2").addEventListener('click',  start);
 document.querySelector("#card3").addEventListener('click',  start);
 document.querySelector("#card4").addEventListener('click',  start);
 document.querySelector("#card5").addEventListener('click',  start);
 document.querySelector("#card6").addEventListener('click',  start);
 document.querySelector("#restart").addEventListener('click',playAgain);
 

