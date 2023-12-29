function createArray(len = 10){
    let array = [];
    for (let i = 0; i < len; i++){
        let randomN = Math.floor(Math.random() * 1000)
        array.push(randomN)
    }
    return array;
}

function swapNumbers(array, num1, num2){
    [array[num1], array[num2]] = [array[num2], array[num1]]
    return true;
}

module.exports = {createArray, swapNumbers}