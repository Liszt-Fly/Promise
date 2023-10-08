import "vitest";
import { describe, it, expect } from "vitest";
import { MPromise, State } from "../HD";

describe("MPromise", () => {
  it("happy path", () => {
    let m = new MPromise((resolve, reject) => {
      resolve("hello,world");
    });
    expect(m.status).to.equal(State.FULFILLED);
  });
});
