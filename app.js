let userScore=0;
let compScore=0;

const choices=document.querySelectorAll(".choice");
const msg=document.querySelector("#msg");

const userScorePara=document.querySelector("#user-score");
const compScorePara=document.querySelector("#comp-score");


const genComputerChoice=()=>{
    const options=["rock","paper","scissors"];
    //rock ,paper,scissors
    const randomIdx=Math.floor(Math.random()*3);
    return options[randomIdx];
}

const Draw=()=>{
    console.log("Match  Draw");
    msg.innerHTML="Game Draw";
    

}

const showWinner=(userWin,userChoice,compChoice)=>{
    if(userWin){
        msg.innerHTML=`you win your ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor="green";
        userScore++;
        userScorePara.innerHTML=userScore;

    }
    else{
        msg.innerHTML=`you lose ${userChoice} beats your ${compChoice}`;
        msg.style.backgroundColor="red";
        compScore++;
        compScorePara.innerHTML=compScore;
    }
}


const playGame=(userChoice)=>{
    console.log("user choice=",userChoice);
    //generate computer choice
    const compChoice=genComputerChoice();
    console.log("compuetr choice=",compChoice);

    if(userChoice===compChoice){
        Draw();

    }
    else{
        let userWin=true;
        if(userChoice==="rock"){
            //comp--scissor,paper
            userWin=compChoice==="paper"?false:true;
        }
        else if(userChoice==="paper"){
            userWin=compChoice==="scissors"?false:true;
        }
        else{
            userWin=compChoice=="rock"?false:true;
        }

        showWinner(userWin,userChoice,compChoice);
    }


}

choices.forEach((choice)=>{
    // console.log(choice);
    choice.addEventListener("click",()=>{
        const userChoice=choice.getAttribute("id");
        console.log("click",userChoice);
        playGame(userChoice);
    })
})