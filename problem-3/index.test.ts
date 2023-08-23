import { describe, expect, test } from "bun:test";
import { findLargestPrimeFactor } from ".";
import data from "./secret.json";

describe("Solution to problem 3", () => {
  test("Largest prime factor should have the correct value", () => {
    const largestPrimeFactor = findLargestPrimeFactor();
    expect(largestPrimeFactor).toBe(data.answer);
  });
});
