import { describe, expect, test } from "bun:test";
import { findSumOfEvenFibonaccis } from ".";
import data from "./secret.json";

describe("Solution to problem 2", () => {
  test("Sum of even Fibonacci numbers should have the correct value", () => {
    const sumOfEvenFibonaccis = findSumOfEvenFibonaccis();
    expect(sumOfEvenFibonaccis).toBe(data.answer);
  });
});
