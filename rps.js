let Choice;
let a;
let count = 0;
let computerCount = 0;
let round = 0;
function getComputerChoice(){
    let choice = ['rock','paper','scissors'];
    const randomIndex = Math.floor(Math.random() * choice.length);
    item =  choice[randomIndex];
    return item;
}
function getPlayerChoice(item){
   for(let i = 0 ; i < 5 ; i++)
   {
    let player = prompt("Please input your choice").toLowerCase();
    a = getComputerChoice();
    if ( player === a)
    {
        console.log( "Draw");
    }
    else if (player === 'rock' && a === 'scissors')
    {
        count ++;
        console.log( "PLayer win!");
        
    }
    else if (player === 'paper' && a === 'rock')
    {
        count ++;
        console.log( "PLayer win!");
        
    }
    else if (player === 'scissors' && a === 'paper')
    {
        count ++;
        console.log("PLayer win!");
        
    }
    else
    {
        computerCount ++;
        console.log( "Computer win!");
        
    }
}
    // round ++;
    // if (round === 5)
    // {
        if (computerCount > count)
        {
            return "computer win ! reload page";
        }
        else if (count > computerCount)
        {
            return "player win ! reload page";
        }
        else
        {
            return " draw ! reload page";
        }
   
}
// }

    


