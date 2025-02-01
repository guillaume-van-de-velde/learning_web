function quickSort(array) {
    if (array.length <= 1)
        return (array);
    let max = array.length - 1;
    let little = [];
    let bigger = [];
    for (let i = 0; i < array.length; i++)
    {
        if (i != max)
        {
            if (array[i] <= array[max])
                little.push(array[i]);
            else
                bigger.push(array[i]);
        }
    }
    array = [...quickSort(little), array[max], ...quickSort(bigger)];
    return array;
}

console.log(quickSort([2, 452, 65, 4, 7, 98, 2, 3, 1]));