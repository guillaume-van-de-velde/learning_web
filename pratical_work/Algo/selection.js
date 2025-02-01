function selectionSort(array) {
    let little;

    for (let i = 0; i + 1 < array.length; i++)
    {
        little = i + 1;
        for (let j = i + 1; j < array.length; j++)
            if (array[j] < array[little])
                little = j;
        if (array[i] > array[little])
            [array[i], array[little]] = [array[little], array[i]];
    }
    return array;
}

console.log(selectionSort([2, 452, 65, 4, 7, 98, 2, 3, 1]));