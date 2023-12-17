const {swapNumbers} = require("../suport/suport") 

exports.bubbleSort = function (array){
    const {length} = array
    for (let i = 0; i < length; i++){
        for (let j = 0; j < length - 1; j++){
            if (array[j] > array[j + 1]){
                swapNumbers(array, j, j + 1);
            }
        }
    }
    return array;
}

exports.bubbleSortImproved = function (array){
    const {length} = array
    for (let i = 0; i < length; i++){
        for (let j = 0; j < (length - i); j++){
            if (array[j] > array[j + 1]){
                swapNumbers(array, j, j + 1);
            }
        }
    }
    return array;
}

exports.selectionSort = function(array){
    const {length} = array;
    let indexMin;

    for (let i = 0; i < length - 1; i++){
        indexMin = i;

        for (let j = i; j < length; j++){
            if (array[j] < array[indexMin]){
                indexMin = j;
            }
        }
        if (i !== indexMin){
            swapNumbers(array, i, indexMin);
        }
    }
    return array;
}

exports.insertionSort = function(array){
    const {length} = array;
    let temp;
    for (let i = 1; i < length; i++){
        let j = i
        temp = array[i];
        
        while(j > 0 && (array[j - 1] > temp)){
            array[j] = array[j - 1]
            j--;
        }
        array[j] = temp
    }
    return array;
}
