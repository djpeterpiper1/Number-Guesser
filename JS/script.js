let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Write your code below:

const generateTarget=()=>{
    return Math.floor(Math.random()*10);
}

const compareGuesses=(h,c,t)=>{
    
    if(Math.abs(h-t) < Math.abs(c-t)){
        return true;
    }

    if(Math.abs(c-t) < Math.abs(h-t)){
        return false;
    }

    if(Math.abs(h-t) === Math.abs(c-t)){
        return true;
    }
};

let updateScore=(score)=>{
    
 if(score==='human'){
        humanScore++;   
} 
 else if(score==='computer'){
        computerScore++;    
    }
 else{
    console.log('Error');
 }  
};


const advanceRound=()=>{
    return currentRoundNumber++;
};
