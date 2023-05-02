import Stories from "@/pages/stories";
import StoriesDisplay from "@/components/StoriesDisplay";
import "@testing-library/jest-dom";
import { fireEvent, render, screen, waitFor } from "@testing-library/react";

test("dropdown button should be rendered", () => {
    render(<Stories />);
    const dropdownButton = screen.getByTestId("dropdown-toggle");
    expect(dropdownButton).toBeInTheDocument();
});

test("check there are 6 options in the drop down", () => {
  render(<Stories />);
  const dropdownButton = screen.getByTestId("dropdown-toggle");
  fireEvent.click(dropdownButton);
  const menuItem = screen.getAllByTestId("storiesOption");
  expect(menuItem.length).toBe(6);
});

test("show 50 stories for the default option", async () => {
  render(<Stories />);
  const dropdownButton = screen.getByTestId("dropdown-toggle");
  fireEvent.click(dropdownButton);
  const choice = screen.getByText("New Stories");
  fireEvent.click(choice);

  await waitFor(() => {	
    const stories = screen.getAllByTestId("individual-story");
    expect(stories.length).toBe(50);
  })
})