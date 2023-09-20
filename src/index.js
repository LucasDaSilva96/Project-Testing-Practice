import { capitalize } from "./capitalize.js";

test("Capitalize fist letter", () => {
  expect(capitalize("hello")).toBe("Hello");
});
