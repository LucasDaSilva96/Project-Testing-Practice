import { capitalize } from "./capitalize.js";
import { reverseString } from "./reverseString.js";
import { add, subtract, divide, multiply } from "./calculator.js";
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
