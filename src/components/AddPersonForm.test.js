import React from "react";
import { render, fireEvent, screen } from "../test-utils";
import AddPersonForm from "./AddPersonForm";

describe("AddPersonForm", () => {
  beforeEach(() => {
    render(<AddPersonForm />);
  });

  test("has a Add new person button that is initially disabled", () => {
    const button = screen.getByRole("button");
    expect(button).toBeInTheDocument();
    expect(button).toBeDisabled();
  });

  test("Check the name input field", () => {
    const textInput = screen.getByRole("textbox");
    expect(textInput).toBeInTheDocument();

    fireEvent.change(textInput, { target: { value: "Adam" } });
    expect(textInput.value).toBe("Adam");
  });

  test("Check if number input field is present", () => {
    expect(screen.getByRole("spinbutton")).toBeInTheDocument();
  });

  test("Test if form gets cleared after submitting", () => {
    const button = screen.getByRole("button");
    const textInput = screen.getByRole("textbox");
    const numberInput = screen.getByRole("spinbutton");

    fireEvent.change(textInput, { target: { value: "Adam" } });
    fireEvent.change(numberInput, { target: { value: 17 } });
    fireEvent.click(button);

    expect(textInput.value).toBe("");
    expect(numberInput.value).toBe("");
  });
});
