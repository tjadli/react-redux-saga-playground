import React from "react";
import { render } from "@testing-library/react";
import App from "./App";

test("renders This is a playground", () => {
  const { getByText } = render(<App />);
  const linkElement = getByText(/This is a playground/i);
  expect(linkElement).toBeInTheDocument();
});
