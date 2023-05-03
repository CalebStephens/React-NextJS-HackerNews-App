import "@testing-library/jest-dom";
import {
  fireEvent,
  render,
  screen,
  waitForElementToBeRemoved,
} from "@testing-library/react";
import Stories from "@/pages/stories";

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

test("show 50 stories for the New Stories option", async () => {
  render(<Stories />);
  const dropdownButton = screen.getByTestId("dropdown-toggle");
  fireEvent.click(dropdownButton);
  const choice = screen.getByText("New Stories");
  fireEvent.click(choice);
  const loadingText = screen.getByTestId("loading");
  waitForElementToBeRemoved(loadingText).then(() => {
    const stories = screen.getAllByTestId("individual-story");
    expect(stories.length).toBe(50);
  });
});

test("show 50 stories for the Top Stories option", async () => {
  render(<Stories />);
  const dropdownButton = screen.getByTestId("dropdown-toggle");
  fireEvent.click(dropdownButton);
  const choice = screen.getByText("Top Stories");
  fireEvent.click(choice);
  const loadingText = screen.getByTestId("loading");
  waitForElementToBeRemoved(loadingText).then(() => {
    const stories = screen.getAllByTestId("individual-story");
    expect(stories.length).toBe(50);
  });
});

test("show 50 stories for the Best Stories option", async () => {
  render(<Stories />);
  const dropdownButton = screen.getByTestId("dropdown-toggle");
  fireEvent.click(dropdownButton);
  const choice = screen.getByText("Best Stories");
  fireEvent.click(choice);
  const loadingText = screen.getByTestId("loading");
  waitForElementToBeRemoved(loadingText).then(() => {
    const stories = screen.getAllByTestId("individual-story");
    expect(stories.length).toBe(50);
  });
});

test("show 50 stories for the Job Stories option", async () => {
  render(<Stories />);
  const dropdownButton = screen.getByTestId("dropdown-toggle");
  fireEvent.click(dropdownButton);
  const choice = screen.getByText("Job Stories");
  fireEvent.click(choice);
  const loadingText = screen.getByTestId("loading");
  waitForElementToBeRemoved(loadingText).then(() => {
    const stories = screen.getAllByTestId("individual-story");
    expect(stories.length).toBe(50);
  });
});

test("show 50 stories for the Show option", async () => {
  render(<Stories />);
  const dropdownButton = screen.getByTestId("dropdown-toggle");
  fireEvent.click(dropdownButton);
  const choice = screen.getByText("Show Stories");
  fireEvent.click(choice);
  const loadingText = screen.getByTestId("loading");
  waitForElementToBeRemoved(loadingText).then(() => {
    const stories = screen.getAllByTestId("individual-story");
    expect(stories.length).toBe(50);
  });
});

test("show 50 stories for the Ask Stories option", async () => {
  render(<Stories />);
  const dropdownButton = screen.getByTestId("dropdown-toggle");
  fireEvent.click(dropdownButton);
  const choice = screen.getByText("Ask Stories");
  fireEvent.click(choice);
  const loadingText = screen.getByTestId("loading");
  waitForElementToBeRemoved(loadingText).then(() => {
    const stories = screen.getAllByTestId("individual-story");
    expect(stories.length).toBe(50);
  });
});

test("show loading when the Ask Stories option has been clicked", async () => {
  render(<Stories />);
  const dropdownButton = screen.getByTestId("dropdown-toggle");
  fireEvent.click(dropdownButton);
  const choice = screen.getByText("Ask Stories");
  fireEvent.click(choice);
  const loadingText = screen.getByTestId("loading");
  expect(loadingText).toBeInTheDocument();
});
test("show loading when the Show Stories option has been clicked", async () => {
  render(<Stories />);
  const dropdownButton = screen.getByTestId("dropdown-toggle");
  fireEvent.click(dropdownButton);
  const choice = screen.getByText("Show Stories");
  fireEvent.click(choice);
  const loadingText = screen.getByTestId("loading");
  expect(loadingText).toBeInTheDocument();
});

test("show loading when the Top Stories option has been clicked", async () => {
  render(<Stories />);
  const dropdownButton = screen.getByTestId("dropdown-toggle");
  fireEvent.click(dropdownButton);
  const choice = screen.getByText("Top Stories");
  fireEvent.click(choice);
  const loadingText = screen.getByTestId("loading");
  expect(loadingText).toBeInTheDocument();
});

test("show loading when the New Stories option has been clicked", async () => {
  render(<Stories />);
  const dropdownButton = screen.getByTestId("dropdown-toggle");
  fireEvent.click(dropdownButton);
  const choice = screen.getByText("New Stories");
  fireEvent.click(choice);
  const loadingText = screen.getByTestId("loading");
  expect(loadingText).toBeInTheDocument();
});

test("show loading when the Job Stories option has been clicked", async () => {
  render(<Stories />);
  const dropdownButton = screen.getByTestId("dropdown-toggle");
  fireEvent.click(dropdownButton);
  const choice = screen.getByText("Job Stories");
  fireEvent.click(choice);
  const loadingText = screen.getByTestId("loading");
  expect(loadingText).toBeInTheDocument();
});

test("show loading when the Best Stories option has been clicked", async () => {
  render(<Stories />);
  const dropdownButton = screen.getByTestId("dropdown-toggle");
  fireEvent.click(dropdownButton);
  const choice = screen.getByText("Best Stories");
  fireEvent.click(choice);
  const loadingText = screen.getByTestId("loading");
  expect(loadingText).toBeInTheDocument();
});
