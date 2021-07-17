let guessBtn=document.getElementById("guess-btn");
let input =document.getElementById("input");
let currentValue=document.getElementById("value");
score =20;
let randomValue=Math.floor(Math.random()*100)+1;
let msg=document.getElementById("msg");
let scoreCount=document.getElementById("score-count");
let again =document.getElementById("again");
let againBtn = document.getElementById("again-btn");
let body = document.getElementsByTagName("body");
let highScoreEle=document.getElementById("highest");
let highScore =0;
guessBtn.addEventListener("click",function(){

    
    if (score>0){
         score-=1;
         scoreCount.innerText="SCORE = "+ score;
         currentValue.innerText=input.value;
    }
         if (input.value>randomValue){
             msg.innerText="TOO HIGH";   
        }
         else if (input.value==randomValue){
            msg.innerText="YOU GUESSED THE NUMBER";
            input.style.display="none";
            guessBtn.style.display="none";
            again.style.display="block";
            document.body.style.backgroundColor="yellow";
            if (score>=highScore)
            highScore=score;
            highScoreEle.innerText="BEST SCORE = " + highScore ;
          



            

    }
         else {
            msg.innerText="TOO LOW";
             
    }
    if (score===0){
    again.style.display="block";
    input.style.display="none";
    guessBtn.style.display="none";
    msg.innerText="CORRECT NUMBER NOT GUESSED";
    document.body.style.backgroundColor="red";
    }

})
againBtn.addEventListener("click", function(){
     score = 20;
     scoreCount.innerText="SCORE = "+ score;
     currentValue.innerText="";
     input.style.display="block";
     input.value="NUMBER";
     guessBtn.style.display="block";
     msg.innerText="GUESS THE  NUMBER ";   
        
     
})