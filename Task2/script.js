let divElement = document.getElementById("output");
// Function that returns a string representing a cup of green tea
const prepareGreenTea = () => 'greenTea';

// Function that returns a string representing a cup of black tea
const prepareBlackTea = () => 'blackTea';

/*
Given a function (representing the tea type) and number of cups needed, the
following function returns an array of strings (each representing a cup of
a specific type of tea).
*/
const getTea = (prepareTea, numOfCups) => {
  const teaCups = [];

  for(let cups = 1; cups <= numOfCups; cups += 1) {
    const teaCup = prepareTea();
    teaCups.push(teaCup);
  }
  return teaCups;
};

// Only change code below this line
const tea4GreenTeamFCC = getTea(prepareGreenTea, 27 );
const tea4BlackTeamFCC = getTea(prepareBlackTea, 13 );

function getOutput() {
   let para1 = document.createElement("p")
   para1.textContent = `Green Tea Team : ${tea4GreenTeamFCC.length}`;
   divElement.appendChild(para1);

  let para2 = document.createElement("p")
  para2.textContent = `Black Tea Team : ${tea4BlackTeamFCC.length}`;
  divElement.appendChild(para2);

}
// Only change code above this line

//let arr = [tea4GreenTeamFCC, tea4BlackTeamFCC]



/*function getOutput() {
  for(let teaTeam of arr) {
    console.log(teaTeam);
    /*for( let i=1; i<= teaTeam.length; i++) {
      let result = (` ${i}: ${teaTeam[i]}`);
      document.getElementById("output").innerText = result;
    }*/

    /*for( let item of teaTeam) {
      console.log(item);
      // document.getElementById("output").innerText = item;
      let paraElement = document.createElement("p");
      paraElement.textContent = item;
      divElement.appendChild(paraElement);
    }

  }
  
}

/*document.getElementById("output").innerText = tea4GreenTeamFCC;
document.getElementById("output2").innerText = tea4BlackTeamFCC;*/


