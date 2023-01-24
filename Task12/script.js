function nonMutatingSplice(cities) {
  // Only change code below this line
  let newArray = [...cities]
  
  return newArray.slice(0,3);

  // Only change code above this line
}

const inputCities = ["Chicago", "Delhi", "Islamabad", "London", "Berlin"];
let result = (nonMutatingSplice(inputCities));


function getOutput() {
  document.getElementById("output").textContent = result;
}