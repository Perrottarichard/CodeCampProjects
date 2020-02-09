function convertToRoman(num) {
    let s = num.toString().split('');
    let romanArr = [];

    for (var z = 0; z <= s.length + 5; z++) {
        let splitter = s;
        if (splitter.length == 1) {
            for (var j = 0; j < splitter[0]; j++) {
                if (splitter[0] < 4) {
                    romanArr.push("I");
                } else if (splitter[0] == 4) {
                    romanArr.push("IV");
                    splitter[0] -= 4;
                } else if (splitter[0] >= 5 && splitter[0] < 9) {
                    romanArr.push("V");
                    splitter[0] -= 5;
                    j--;
                } else if (splitter[0] == 9) {
                    romanArr.push("IX");
                    splitter[0] -= 9;
                }
            }
            splitter = splitter.shift();
        }

        else if (splitter.length == 2) {
            for (var j = 0; j < splitter[0]; j++) {
                if (splitter[0] < 4) {
                    romanArr.push("X");
                } else if (splitter[0] == 4) {
                    romanArr.push("XL");
                    splitter[0] -= 4;
                } else if (splitter[0] >= 5 && splitter[0] < 9) {
                    romanArr.push("L");
                    splitter[0] -= 5;
                    j--;
                } else if (splitter[0] == 9) {
                    romanArr.push("XC");
                    splitter[0] -= 9;
                }
            }
            splitter = splitter.shift();
        }
        else if (splitter.length == 3) {
            for (var j = 0; j < splitter[0]; j++) {
                if (splitter[0] < 4) {
                    romanArr.push("C");
                } else if (splitter[0] == 4) {
                    romanArr.push("CD");
                    splitter[0] -= 4;
                } else if (splitter[0] >= 5 && splitter[0] < 9) {
                    romanArr.push("D");
                    splitter[0] -= 5;
                    j--;
                } else if (splitter[0] == 9) {
                    romanArr.push("CM");
                    splitter[0] -= 9;
                }
            }
            splitter = splitter.shift();
        }
        else if (splitter.length == 4) {
            for (var j = 0; j < splitter[0]; j++) {
                if (splitter[0] < 4) {
                    romanArr.push("M");
                } else if (splitter[0] == 4) {
                    romanArr.push("DM");
                    splitter[0] -= 4;
                }
            }
            splitter = splitter.shift();
        }
    }
    romanArr = romanArr.join('');
    return romanArr;
}

console.log(convertToRoman(36));
console.log(convertToRoman(2));
console.log(convertToRoman(3));
console.log(convertToRoman(4));
console.log(convertToRoman(5));
console.log(convertToRoman(8));
console.log(convertToRoman(9));
console.log(convertToRoman(12));
console.log(convertToRoman(16));
console.log(convertToRoman(29));
console.log(convertToRoman(44));
console.log(convertToRoman(45));
console.log(convertToRoman(68));
console.log(convertToRoman(83));
console.log(convertToRoman(97));
console.log(convertToRoman(99));
console.log(convertToRoman(400));
console.log(convertToRoman(500));
console.log(convertToRoman(501));
console.log(convertToRoman(649));
console.log(convertToRoman(798));
console.log(convertToRoman(891));
console.log(convertToRoman(1000));
console.log(convertToRoman(1004));
console.log(convertToRoman(1006));
console.log(convertToRoman(1023));
console.log(convertToRoman(2014));
console.log(convertToRoman(3999));