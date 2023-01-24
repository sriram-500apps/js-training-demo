let fixedValue = 4;

function incrementer() {
  // Only change code below this line
  let value = fixedValue
  return value+1;

  // Only change code above this line
}

let result = (incrementer());

function getOutput() {
  document.getElementById("output").textContent = result;
}