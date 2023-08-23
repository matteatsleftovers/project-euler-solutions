import { describe, expect, test } from "bun:test";
import { findSumOfMultiples } from ".";
import data from "./secret.json";

describe("Solution to problem 1", () => {
  test("Sum of multiples of 3 and 5 should have the correct value", () => {
    const sumOfMultiples = findSumOfMultiples();
    expect(sumOfMultiples).toBe(data.answer);
  });
});
