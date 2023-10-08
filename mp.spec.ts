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
  it("resolve,reject不能同时使用", () => {
    let m = new MPromise((resolve, reject) => {
      resolve("hello,world");
      reject("reject");
    });
    expect(m.status).toBe(State.FULFILLED);
  });
  it("如果在函数执行过程中出错,会直接调用reject", () => {
    let m = new MPromise((resolve, reject) => {
      //@ts-ignore
      console.log(asd);
      resolve("hello");
    });

    expect(m.status).toBe(State.REJECTED);
  });
});
