import React from "react";
import { render, fireEvent, getByTestId } from "@testing-library/react";
import "@testing-library/react/cleanup-after-each";
//import "@testing-library/jest-dom/extend-expect";
import RegForm from "../RegForm";

describe("<RegForm/>", () => {
  it("mounts to screen without crashing", () => {
    render(<RegForm />);
  });

  it("displays h1 User Registration Text", () => {
    const comp = render(<RegForm />);
    comp.getByText(/User Registration/i);
  });
  it("console.logs submit button clicked", () => {
    const { getByText } = render(
      <RegForm onClick={() => console.log("submit button clicked")} />
    );
    const submitButton = getByText(/submit/i);
    fireEvent.click(submitButton);
  });
});
