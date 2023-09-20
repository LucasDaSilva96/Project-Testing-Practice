import { capitalize } from "./capitalize.js";
import { reverseString } from "./reverseString.js";

test("Capitalize fist letter", () => {
  expect(capitalize("hello")).toBe("Hello");
});

test("Takes a string and returns it reversed", () => {
  expect(reverseString("hello")).toBe("olleh");
});
