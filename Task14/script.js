function nonMutatingPush(original, newItem) {
  // Only change code below this line
  return original.concat(newItem);

  // Only change code above this line
}

const first = [1, 2, 3];
const second = [4, 5];

let result = nonMutatingPush(first, second);


function getOutput() {
  document.getElementById("output").textContent = result;
}