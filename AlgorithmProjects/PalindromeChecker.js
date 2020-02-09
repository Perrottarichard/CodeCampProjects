function palindrome(str) {

  let onlyAlpha = str.replace(/[\W]/g, '');
  onlyAlpha = onlyAlpha.replace(/_/g, '');
  onlyAlpha = onlyAlpha.toLowerCase();
  let count = 0;

  for (var i = 0; i < onlyAlpha.length; i++) {
    if (onlyAlpha.charAt(i) === onlyAlpha.charAt((onlyAlpha.length - 1) - i)) {
      count++;
    }
  }

  if (count === onlyAlpha.length) {
    return true;
  } else {
    return false;
  }
}

console.log(palindrome("eye"));
console.log(palindrome("1 eye for of 1 eye."));
console.log(palindrome("0_0 (: /-\ :) 0-0"));
console.log(palindrome("_eye"));
console.log(palindrome("five|\_/|four"));
console.log(palindrome("A man, a plan, a canal. Panama"));
console.log(palindrome("almostomla"));
console.log(palindrome("My age is 0, 0 si ega ym."));
