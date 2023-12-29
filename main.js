const sortAlg = require("./sort algorithms/sortAlgorithms")
const suport = require("./suport/suport");

// Put the array length as a paramater
let array = suport.createArray(20)

console.log("Array desordenada: "+ array);

let sortedArray = sortAlg.quickSort(array);
console.log("Array ordenada: "+ sortedArray);
