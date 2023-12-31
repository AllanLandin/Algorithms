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
    return array ;
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

module.exports.insertionSort = function(array){
    const {length} = array;
    let temp;

    for (let i = 1; i < length; i++){
        let j = i;
        temp = array[i];

        while (j > 0 && (array[j - 1] > temp)){
            array[j] = array[j - 1]
            j--
        }
        array[j] = temp
    }
    return array;
}

//O(n log n)
module.exports.mergeSort = function(array){
    const {length} = array;
    if (length > 1){
        let middle = Math.floor(length / 2);

        let left = this.mergeSort(array.slice(0, middle))
        let right = this.mergeSort(array.slice(middle, length));
        array = merge(left, right)
    }
    return array;
}


function merge(left, right){
    let l = 0;
    let r = 0;
    let result = [];

    while (l < left.length && r < right.length){
        if (left[l] < right[r]){
            result.push(left[l])
            l++;
        } else{
            result.push(right[r])
            r++;
        }
    }
    return result.concat(l < r? left.slice(l): right.slice(r));
}

module.exports.quickSort = function(array){
    return quick(array, 0, array.length - 1);
}

function quick(array, left, right){
    const {length} = array
    if (length > 1){
       let index = partition(array, left, right)
       
       if (left < index - 1){
           quick(array, left, index - 1)
       }
       if (index < right){
           quick(array, index, right)
       }
       
    } 
    return array;
}

function partition(array, left, right){
    let pivot = array[Math.floor((left + right) / 2)]
    let l = left;
    let r = right;
    
    while (l <= r){
        while (array[l] < pivot){
            l++
        }
        while (array[r] > pivot){
            r--;
        }
    
        if (l <= r){
            let temp = array[l];
            array[l] = array[r];
            array[r] = temp
            l++;
            r--;
        }
    }
    return l;
}