function decypherPhrase(obj, str) {
    str = getTransformedArray(str, function(el) {
        for (key in obj) {
            if (obj[key] === el) {
                return key;
            }
        }
        return el;
    }).join("");
    return str;
}