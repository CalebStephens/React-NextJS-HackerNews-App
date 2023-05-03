import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import Index from "@/pages/index";
// import StoriesDisplay from "@/components/StoriesDisplay";

test("Should be two page links", () => {
  render(<Index />);
  const buttons = screen.getAllByTestId("page-button");
  expect(buttons.length).toBe(2);
});
