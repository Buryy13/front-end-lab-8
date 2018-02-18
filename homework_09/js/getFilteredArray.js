function getFilteredArray(arr, predicate) {
    var newArr = [];
    forEach(arr, function(el) {
        if (predicate(el)) {
            newArr.push(el);
        }
    });
    return newArr;
}