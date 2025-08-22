import React from "react";
import { render, screen } from "@testing-library/react";
import App from "../App";

test("renders Typemaster Speedtester title", () => {
  render(<App />);
  expect(screen.getByText(/Typemaster Speedtester/i)).toBeInTheDocument();
});