function sentensify(str) {
  // Only change code below this line
  if (str.includes("-")) {
    return str.split("-").join(" ");
  } else if (str.includes(".")) {
    return str.split(".").join(" ");
  } else if (str.includes(",")) {
    return str.split(",").join(" ");
  }

  // Only change code above this line
}

console.log(sentensify("May-the-force-be-with-you"));
console.log(sentensify("The.force.is.strong.with.this.one"));

let result = (sentensify("There,has,been,an,awakening"));


function getOutput() {
  document.getElementById("output").textContent = result;
}