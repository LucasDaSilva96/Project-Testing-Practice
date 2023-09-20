import { capitalize } from "./capitalize.js";
import { reverseString } from "./reverseString.js";
import { add, subtract, divide, multiply } from "./calculator.js";
import { caesarCipher } from "./caesarCipher.js";
import { analyzeArray } from "./analyzeArray.js";

test("Capitalize fist letter", () => {
  expect(capitalize("hello")).toBe("Hello");
});

test("Takes a string and returns it reversed", () => {
  expect(reverseString("hello")).toBe("olleh");
});

test("Add calculation", () => {
  expect(add(2, 2)).toBe(4);
});

test("Subtract calculation", () => {
  expect(subtract(2, 2)).toBe(0);
});

test("Divide calculation", () => {
  expect(divide(10, 2)).toBe(5);
});

test("Multiply calculation", () => {
  expect(multiply(5, 2)).toBe(10);
});

test("Caesar chipher logic with key = + 3", () => {
  expect(caesarCipher("JAVASCRIPT", 3)).toBe("MDYDVFULSW");
});

test("Caesar chipher logic with key = - 3", () => {
  expect(caesarCipher("MDYDVFULSW.", -3)).toBe("JAVASCRIPT.");
});

test("Analyze array average", () => {
  expect(analyzeArray([1, 8, 3, 4, 2, 6]).average).toBe(4);
});

test("Analyze array min", () => {
  expect(analyzeArray([1, 8, 3, 4, 2, 6]).min).toBe(1);
});

test("Analyze array max", () => {
  expect(analyzeArray([1, 8, 3, 4, 2, 6]).max).toBe(8);
});

test("Analyze array length", () => {
  expect(analyzeArray([1, 8, 3, 4, 2, 6]).length).toBe(6);
});
