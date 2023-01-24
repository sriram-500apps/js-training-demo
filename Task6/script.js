// The global variable
const bookList = ["The Hound of the Baskervilles", "On The Electrodynamics of Moving Bodies", "Philosophiæ Naturalis Principia Mathematica", "Disquisitiones Arithmeticae"];


// Change code below this line
function add(bookList,bookName) {
  let newArray = [...bookList];
  newArray.push(bookName);
  return newArray;
  
  // Change code above this line
}

// Change code below this line
function remove(bookList,bookName) {
  let newArray = [...bookList];
  const book_index = newArray.indexOf(bookName);
  if (book_index >= 0) {

    newArray.splice(book_index, 1);
    return newArray;

    // Change code above this line
    }
}

let array = (add(bookList,"A Brief History of Time"));





function getOutput() {
  document.getElementById("output").textContent = array;
}