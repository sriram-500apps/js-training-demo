let fixedValue = 4;

// Only change code below this line
function incrementer(fixedValue) {
  return ++fixedValue;

  // Only change code above this line
}

let result = incrementer(fixedValue);

function getOutput() {
  document.getElementById("output").textContent = result;
}