const squareList = arr => {
  // Only change code below this line
  let neArr = [];
  arr =  arr.filter(num => {
    if(num === parseInt(num)){
      if(num > 0){
        neArr.push(num*num);
      }
      
    }
  
  });
  // Only change code above this line
  //console.log(neArr)
  return neArr
};

const result = squareList([4, 5.6, -9.8, 3.14, 42, 6, 8.34, -2]);


function getOutput() {
  document.getElementById("output").textContent = result;
}