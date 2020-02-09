function telephoneCheck(str) {
    //let test = str;
    let crazyReg = /\1\s\d{3}\s\d{3}\s\d{4}/g;
    if (str.match(/^\d{3}-\d{3}-\d{4}/g)) {
        return true;

    } else if ((str.length > 14 && str.charAt(0) !== '1') || (!str.includes('(') && !str.includes(' ') && str.length > 10) || str.match(/2\(\d{3}\)\d{3}-\d{4}/g)) {
        return false;

    } else if ((str.length > 13) && (str.search(crazyReg) !== -1) && (str.charAt(0) !== '(') || str.charAt(str.length - 1) == ')' && !str.includes('-')) {
        return false;

    } if (str.match(/1\s\d{3}[\s|-]/g) || str.match(/1\s\(\d{3}\)/g) || str.match(/^\d{3}-\d{3}-\d{4}/g) || str.match(/\(\d{3}\)\d{3}-\d{4}/g) || str.match(/1\s\d{3}\s\d{3}\s\d{4}/g) || (str.match(/\d{10}/g))) {
        return true;
    } else {
        return false;
    }

    //console.log(test);
    //console.log(nextRound);
    //console.log(thirdRound);
}

console.log(telephoneCheck("2(757)622-7382"));
console.log(telephoneCheck("27576227382"));
console.log(telephoneCheck("1 (555) 555-5555"));
console.log(telephoneCheck("1 555 555 5555"));
console.log(telephoneCheck("1 555-555-5555"));
console.log(telephoneCheck("(555)555-5555"));
console.log(telephoneCheck("1 456 789 4444"));
console.log(telephoneCheck("(6054756961)"));
console.log(telephoneCheck("555-555-5555"));
