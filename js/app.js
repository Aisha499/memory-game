/*-------------------------------- Constants --------------------------------*/
 
/*---------------------------- Variables (state) ----------------------------*/
let Firstchoice=null;
let scendchoice=null;
let msg;


/*------------------------ Cached Element References ------------------------*/
 const Display= document.querySelector("#result-display");
 let card1=document.querySelector("#card1");
 let card2=document.querySelector("#card2");
 let card3=document.querySelector("#card3");
 let card4=document.querySelector("#card4");

/*-------------------------------- Functions --------------------------------*/
  
const plays=(event) =>{
    if(Firstchoice ===null){
    Firstchoice=event.target.id;
    }
    else{
    scendchoice=event.target.id;
    }
};
const compare =() =>{
    if((Firstchoice==='card1' && scendchoice==='card3' )|| (Firstchoice==='card2' && scendchoice==='card4')){
        msg="you win"
    } else {
        msg="you lose! try again "
    }
}

const Dis= () =>{
    Display.textContent= msg;

}
const start =(event)=>{
    plays(event);
    if(Firstchoice,scendchoice){
    compare();
    Dis();
    }
     
}
 

 

/*----------------------------- Event Listeners -----------------------------*/
 
 document.querySelector("#card1").addEventListener('click', start);
 document.querySelector("#card2").addEventListener('click',  start);
 document.querySelector("#card3").addEventListener('click',  start);
 document.querySelector("#card4").addEventListener('click',  start);
 document.querySelector("#restart").addEventListener('click',playAgin);
 

