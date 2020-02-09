function rot13(str) {
    let words = str.split(' ');
    let converted = [];
    let ch = [63, 46, 33, 32]; //codes for . ? !

    for (var i = 0; i < words.length; i++) {

        for (var j = 0; j < words[i].length; j++) {
            if (!ch.includes(words[i].charCodeAt(j)) && words[i].charCodeAt(j) < 78) {
                converted.push(String.fromCharCode(words[i].charCodeAt(j) + 13));
            } else if (!ch.includes(words[i].charCodeAt(j)) && words[i].charCodeAt(j) >= 78) {
                converted.push(String.fromCharCode(words[i].charCodeAt(j) - 13));
            }
        }
        converted.push(' ');
    }
    words = words.join(' ');
    let regexPunc = /[?.!]/g;
    if (words.match(regexPunc)) {
        converted = converted.join('').concat(words.charAt(words.length - 1));
    } else {
        converted = converted.join('');
    }
    converted = converted.replace(/(\s\?)/g, '?').replace(/(\s\.)/g, '.').replace(/(\s!)/g, '!').trim();
    return converted;
}

console.log(rot13("SERR PBQR PNZC"));
console.log(rot13("SERR YBIR?"));
console.log(rot13("SERR CVMMN!"));
console.log(rot13("GUR DHVPX OEBJA SBK WHZCF BIRE GUR YNML QBT."));
console.log(rot13("TVG VF FB NAABLVAT FBZRGVZRF!"));