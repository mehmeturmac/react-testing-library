import React from "react";
import { screen, render, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";

import App from "./App";
import Header from "./Header";

test("Header render", () => {
  render(<Header />);
  const title = screen.getByText(/Emoji Search/i);
  expect(title).toBeInTheDocument();
});

test("Emoji list render", () => {
  render(<App />);
  const items = screen.getAllByText(/Click to copy emoji/i);
  expect(items.length).toEqual(20);
});

test("Emoji list render after filtering", () => {
  render(<App />);
  const input = screen.getByTestId("input-element");
  fireEvent.change(input, { target: { value: "1234" } });
  expect(screen.getByText(/1234/i)).toBeInTheDocument();
});

// test("Copy control", () => {
//   render(<App />);
//   fireEvent.click(screen.getByText(/100/i));
//   const copied = navigator.clipboard.readText();
//   expect(copied).toBe("💯");
// });
