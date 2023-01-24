const globalArray = [5, 6, 3, 2, 9];

function nonMutatingSort(arr) {
  // Only change code below this line
    let newArray = [...arr];
    return newArray.sort(function(a,b) {
      return a === b ? 0 : a > b ? 1 : -1;
    })

  // Only change code above this line
}

let result = (nonMutatingSort(globalArray));


function getOutput() {
  document.getElementById("output").textContent = result;
}