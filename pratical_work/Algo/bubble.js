function isSorted(array) {
    for (let i = 0; i + 1 < array.length; i++)
        if (array[i] > array[i + 1])
            return false;
    return true;
}

function bubbleSort(array) {
    let i = 0;
    while (!isSorted(array))
        for (i = 0; i + 1 < array.length; i++)
            if (array[i] > array[i + 1])
                [array[i], array[i + 1]] = [array[i + 1], array[i]];
    return array;
}
  
console.log(bubbleSort([2, 452, 65, 4, 7, 98, 2, 3, 1]));