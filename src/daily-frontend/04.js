import { expect, it } from "vitest";


console.log('Daily Frontend Problem - 04');

export const getName = (first, last) => {
  if (last) {
    return `${first} ${last}`;
  }
  return first;
};

it("Should work with just the first name", () => {
  const name = getName("Jon");

  expect(name).toEqual("Jon");
});

it("Should work with the first and last name", () => {
  const name = getName("Jon", "Whittlestone");

  expect(name).toEqual("Jon Whittlestone");
});