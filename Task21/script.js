function urlSlug(title) {
  return title.toLowerCase().trim().split(/ +/).join("-");

}
// Only change code above this line
let result = (urlSlug("A Mind Needs Books Like A Sword Needs A Whetstone"));

function getOutput() {
  document.getElementById("output").textContent = result;
}