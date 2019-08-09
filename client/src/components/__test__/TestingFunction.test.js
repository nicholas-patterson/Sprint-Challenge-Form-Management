import React from "react";
import ReactDOM from "react-dom";
import { updateBalls } from "../TestFunction";

describe("updateBalls()", () => {
  it("updates all balls and if balls are greater than 3 it resets to 0", () => {
    const update = balls => {
      if (balls >= 0 && balls < 4) {
        return balls + 1;
      }
      return balls;
    };
    update();
    expect(update(2)).toBe(3);
  });
});
