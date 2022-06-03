import { test, expect } from "vitest";
import { greeting } from "./greetings";

test("挨拶が出来る", () => {
  greeting.subscribe((value) => {
    expect(value).toEqual("Hello world!");
  });
});
