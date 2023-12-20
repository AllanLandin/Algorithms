const sortAlg = require("./sort algorithms/sortAlgorithms")
const suport = require("./suport/suport");

// Coloque o tamanho da array como parâmetro
let array = suport.createArray(4)

console.log("Array desordenada: "+ array);

let sortedArray = sortAlg.quickSort(array);
console.log("Array ordenada: "+ sortedArray);
