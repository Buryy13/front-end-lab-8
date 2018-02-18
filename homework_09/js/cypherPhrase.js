function cypherPhrase(obj, str) {
    str = getTransformedArray(str, function(el) {
        for (key in obj) {
            if (key === el) {
                return obj[key];
            }
        }
        return el;
    }).join("");
    return str;
}