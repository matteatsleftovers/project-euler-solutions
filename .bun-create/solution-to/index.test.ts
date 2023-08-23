import { describe, expect, test } from "bun:test";
import data from "./secret.json";

describe("Solution to problem <Insert problem number>", () => {
  test("<Insert description of correct behavior>", () => {
    /**
     * This should compare the output of one of your solver functions
     * to the secret answer you set in secret.json.
     * You'll only know the answer after solving the problem the first time!
     */
    expect(0).toBe(data.answer);
  });
});
