import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import Leader from "@/pages/leaders";

test("Should be 20 leaders", () => {
  render(<Leader />);
  const cards = screen.getAllByTestId("leader-card");
  expect(cards.length).toBe(20);
});

test("Should be 20 headers", () => {
  render(<Leader />);
  const titles = screen.getAllByTestId("leader-header");
  expect(titles.length).toBe(20);
});
