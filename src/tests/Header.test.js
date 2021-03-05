import { render, screen } from "@testing-library/react";
import Header from "../components/Header";
test("renders Rick and Morty", () => {
  render(<Header />);
  const linkElement = screen.getByText(/Rick and Morty/i);
  expect(linkElement).toBeInTheDocument();
});
/*
test("renders learn react link", () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
*/
