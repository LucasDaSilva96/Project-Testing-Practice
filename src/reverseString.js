export function reverseString(string) {
  const stringArray = string.split("");

  const reverse = stringArray.reverse();

  return reverse.join("");
}
