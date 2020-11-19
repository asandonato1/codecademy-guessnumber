let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Write your code below:

function generateTarget(){
  console.log(Math.floor(Math.random() * 10))
  return Math.floor(Math.random()) * 10
}
function compareGuesses(human, computer, num){
  if(human > 9 || human < 0){
    alert("Number out of range!")
    return 0;
  }
  if (Math.abs(human) - Math.abs(num) < Math.abs(computer) - Math.abs(num) || Math.abs(human) === Math.abs(num)){
  humanScore++
  return true
}
else if(Math.abs(human) - Math.abs(num) > Math.abs(computer) - Math.abs(num)){
  computerScore++
  return false
}
else if(Math.abs(human) === Math.abs(computer) && Math.abs(human) === Math.abs(num)){
  return true
}
else {
  return false

};
}

function updateScore(winner){ 
if(winner === "human"){
  humanScore++
  return humanScore
}
else{
  computerScore++
  return computerScore
}
}
function advanceRound(){
  currentRoundNumber++
}



