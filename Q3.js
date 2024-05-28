// Function to square all elements of the original array
function squareElements(arr) {
    return arr.map(element => element * element);
}

// Function to create mapping for the squares and display it
function displayMapping(arr, squares) {
    let mapping = {};
    arr.forEach((element, index) => {
        mapping[element] = squares[index];
    });
    console.log("Mapping for Squares:", mapping);
}

// Take input from the user and convert it to an array of numbers
let userInput = prompt("Enter numbers separated by commas:");
let originalArray = userInput.split(',').map(Number);

// Square all elements of the original array
let squares = squareElements(originalArray);

// Display the mapping for the squares
displayMapping(originalArray, squares);
