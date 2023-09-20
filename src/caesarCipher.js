export function caesarCipher(string, shift) {
  let resultArray = [];

  for (let i = 0; i < string.length; i++) {
    if (isLetter(string[i])) {
      let code = string.charCodeAt(i) + shift;

      while (code > 122) {
        code = code - 122 + 96;
      }
      resultArray.push(String.fromCharCode(code));
    } else {
      resultArray.push(string[i]);
    }
  }
  return resultArray.join("");
}

function isLetter(str) {
  return str.length === 1 && str.match(/[a-z]/i);
}
