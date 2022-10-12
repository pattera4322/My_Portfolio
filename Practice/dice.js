// object
let player1 = {
    name: "Somchai",
    diceP1: [],
    scoreP1: [],
  };
  let player2 = {
    name: "Somying",
    diceP2: [],
    scoreP2: [],
  };
  let dice = {
    numDice: [1, 2, 3, 4, 5, 6]
  };
   
  //randomDice เป็นfunction ที่ไว้ใ
  function randomDice(items) {
    return items[Math.floor(Math.random() * items.length)];
  }
   
  //
  function play(maxTurn) {
    let sum = 0; 
    for (let turn = 1; turn <= maxTurn; turn++) {
      console.log("Turn " + turn);
      p1 = randomDice(dice.numDice);
      p2 = randomDice(dice.numDice);
      score = compare(p1, p2);
      player1.diceP1.push(p1);
      player2.diceP2.push(p2);
      setScore(score);
      sum = sum+score;
    }
    sum_fin = sum;
  }
  function compare(p1, p2) {
    if (p1 < p2) return 1;
    else if (p2 < p1) return -1;
    else if (p2 == p1) return 0;
  }
   
  function setScore(score) {
    if (score == 1) {
      player1.scoreP1.push("lose");
      player2.scoreP2.push("win");
      console.log(`${player2.name} is win in this round`);
    } else if (score == -1) {
      player1.scoreP1.push("win");
      player2.scoreP2.push("lose");
      console.log(`${player1.name} is win in this round`);
    } else if (score == 0) {
      player1.scoreP1.push("Draw");
      player2.scoreP2.push("Draw");
      console.log(`${player1.name} is draw with ${player2.name} in this round`);
    }
  }
  
  function main(maxturn) {
    play(maxturn);
    console.log("-----------------RESULT---------------------")
    if(sum_fin<0){
      console.log(`${player1.name} is win`);
    }
    else if(sum_fin>0){
      console.log(`${player2.name} is win`);
    }
    else if(sum_fin==0){
      console.log(`${player1.name} is draw with ${player2.name}`);
    }
  
    console.log("------------------DATA----------------------")
    for(data1 in player1){
        console.log(player1[data1])
    }
    for(data2 in player2){
        console.log(player2[data2])
    }
  }
      
  let prompt = require('prompt-sync')();
  let maxturn =  parseInt(prompt("จงระบุจำนวนรอบที่อยากเล่น >> "));
  main(maxturn);
  
  