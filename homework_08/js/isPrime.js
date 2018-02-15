function isPrime(numb) {
    if (numb < 2) return false;
    for (var i = 2; i <= Math.sqrt(numb); i++) {
        if (numb % i === 0) {
            return false;
        }
    }
    return true;
}
