const sortAlg = require("./sort algorithms/sortAlgorithms")
const suport = require("./suport/suport");

let array = suport.createArray(5)

console.log("Array desordenada: "+ array);

let sortedArray = sortAlg.insertionSort(array);
console.log("Array ordenada: "+ sortedArray);
