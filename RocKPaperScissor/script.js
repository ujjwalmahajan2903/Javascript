let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");
const userScorePara = document.querySelector("#user-score");
const compScorePara = document.querySelector("#comp-score");

console.log(msg);
const GetCompChoice = () => {
    const option = ["rock","paper","scissor"];
    const randomNum = Math.floor(Math.random() * 3);
    return option[randomNum];
}

const drawGame = () => {
    msg.innerText = "Game was Draw. Play again";
    msg.style.backgroundColor = "#081b31";
}
const showWinner = (userWin) =>
{
    if(userWin){
        userScore++;
        userScorePara.innerText = userScore;
        msg.innerText = "You Win";
        msg.style.backgroundColor ="green";
    }
    else{
        compScore++;
        compScorePara.innerText = compScore;
        msg.innerText = "You Lose";
        msg.style.backgroundColor = "red";
    }
}

const playGame = (userChoice) => {
    //Genrate comp choice 
    const compChoice = GetCompChoice();
    if(userChoice === compChoice)
    {
        drawGame();
    }else{
        let userWin = true;
        if(userChoice === "rock"){
            userWin = compChoice === "paper" ? false : true;
        }else if(userChoice === "paper"){
            userWin = confirm  === "scissor" ? false : true;
        }else {
            userwin = compChoice = "rock" ? false :true;
        }
        showWinner(userWin);
    }
}


choices.forEach((choice) => {
    choice.addEventListener("click", () =>{
        const choiceId = choice.getAttribute("id");
        playGame(choiceId);
    })
});