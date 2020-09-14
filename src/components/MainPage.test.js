import React from "react";
import { render, fireEvent, screen } from "../test-utils";
import MainPage from "./MainPage";
import Person from "../models/Person";

describe("MainPage", () => {
  test("Displays Please add a new person prompt with empty people array", () => {
    render(<MainPage />, {
      initialState: { people: [] },
    });

    expect(screen.getByText(/Please add a new person/i)).toBeInTheDocument();
  });

  test("Displays Manage people when people array contains a person", () => {
    const mockPerson = new Person();
    const { getByText } = render(<MainPage />, {
      initialState: { people: [mockPerson] },
    });
    expect(getByText(/Manage people/i)).toBeInTheDocument();
  });

  test("A person can be added via AddPersonForm and gets displayed", () => {
    render(<MainPage />, {
      initialState: { people: [] },
    });

    const button = screen.getByRole("button");
    const textInput = screen.getByRole("textbox");
    const numberInput = screen.getByRole("spinbutton");

    fireEvent.change(textInput, { target: { value: "Adam" } });
    fireEvent.change(numberInput, { target: { value: 17 } });
    fireEvent.click(button);

    expect(screen.getByText(/Adam/i)).toBeInTheDocument();
    expect(screen.getByText(/(17)/i)).toBeInTheDocument();

    expect(screen.getAllByRole("button")).toHaveLength(3);
  });

  test("Person savings level can be checked and correct message is displayed", () => {
    const mockPerson = new Person();
    mockPerson.setName("Fred");
    mockPerson.setAge(21);
    render(<MainPage />, {
      initialState: { people: [mockPerson] },
    });
    const queryInput = screen.getByRole("spinbutton", {
      name: "Amount",
    });
    const queryButton = screen.getByRole("button", { name: "Check Savings" });
    const paycheckButton = screen.getByRole("button", {
      name: "Give Paycheck",
    });

    fireEvent.change(queryInput, { target: { value: 1 } });
    fireEvent.click(queryButton);

    expect(
      screen.getByText(/Fred does not have enough savings/i)
    ).toBeInTheDocument();

    fireEvent.click(paycheckButton);

    expect(
      screen.queryByText(/Fred does not have enough savings/i)
    ).not.toBeInTheDocument();
    expect(screen.getByText(/Fred has enough savings/i)).toBeInTheDocument();
  });
});
