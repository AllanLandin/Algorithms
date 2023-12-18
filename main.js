const sortAlg = require("./sort algorithms/sortAlgorithms")
const suport = require("./suport/suport");

let array = suport.createArray(6)

console.log("Array desordenada: "+ array);

let sortedArray = sortAlg.mergeSort(array);
console.log("Array ordenada: "+ sortedArray);
