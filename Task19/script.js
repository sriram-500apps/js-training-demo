function splitify(str) {
  // Only change code below this line

  return str.split(/[ ,-.]/);
  // Only change code above this line
}

let result = splitify("Hello World,I-am code");


function getOutput() {
  document.getElementById("output").textContent = result;
}