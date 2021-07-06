//insertion sort function to elements in array

function insertionSort(items) {
    let i, j, currentVal;
    for ( i = 0; i < items.length; i++){
         currentVal = items[i];
        for ( j = i - 1; j >= 0 && items[j] > currentVal; j--){
            items[j + 1] = items[j];
        }
        items[j + 1] = currentVal
    }
    return items;
}

console.log(insertionSort([2,1,9,76,4,20,111]))