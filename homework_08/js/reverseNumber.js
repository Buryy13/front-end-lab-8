function reverseNumber(numb) {
    var reversedNumb = 0;
    var isNegative = false;
    if (numb < 0) {
        isNegative = true;
        numb = -numb;
    }
    while (numb) {
        reversedNumb *= 10;
        reversedNumb += numb % 10;
        numb = Math.floor(numb / 10);
    }
    if (isNegative) {
        reversedNumb = -reversedNumb;
    }
    return reversedNumb;
}
