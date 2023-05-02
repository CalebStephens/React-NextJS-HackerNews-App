/*
  This page displays a list of stories from the Hacker News API.
  It imports the StoriesDisplay component and the axios library.
  It then renders the StoriesDisplay component and passes the story data as a prop.
*/

// Import the axios library for making HTTP requests
import axios from "axios";
// Import the React library
import React, { useEffect, useState } from "react";
// Import the StoriesDisplay component
import StoriesDisplay from "@/components/StoriesDisplay";

// Define the Stories component
const Stories = () => {
  // Define state variables using the useState hook
  const [isOpen, setIsOpen] = useState(false); // dropdown toggle
  const [isError, setIsError] = useState(false); // error state
  const [isLoading, setIsLoading] = useState(false); // loading state
  const [story, setStory] = useState("askstories"); // selected story type
  const [storyData, setStoryData] = useState([]); // fetched story data

  // Define the maximum number of stories to fetch
  const LIMIT = 50;

  // Use the useEffect hook to fetch story data when the selected story type changes
  useEffect(() => {
    // Set the loading and error states
    setIsLoading(true);
    setIsError(false);
    // Define an async function to fetch the story data
    const fetchData = async () => {
      try {
        // Make a GET request to the Hacker News API to fetch the list of story IDs for the selected story type
        const res = await axios.get(
          `https://hacker-news.firebaseio.com/v0/${story}.json?print=pretty&limitToFirst=${LIMIT}&orderBy="$key"`
        );
        // Use Promise.all to fetch the full data for each story in at the same time
        setStoryData(
          await Promise.all(
            res.data.map(async (storyId) => {
              // Make a GET request to the Hacker News API to fetch the full data for a single story
              const storyRes = await axios.get(
                `https://hacker-news.firebaseio.com/v0/item/${storyId}.json?print=pretty`
              );
              return storyRes.data;
            })
          )
        );
      } catch (error) {
        // Set the error state if the request fails
        setIsError(true);
      }
      // Set the loading state to false
      setIsLoading(false);
    };
    fetchData();
  }, [story]); // Re-run the effect when the selected story type changes

  // When called toggles the dropdown menu
  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="relative">
      <button
        id="dropdownDefaultButton"
        data-dropdown-toggle="dropdown"
        data-testid="dropdown-toggle"
        className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        type="button"
        onClick={toggleDropdown}
      >
        Dropdown button
        <svg
          className="w-4 h-4 ml-2"
          aria-hidden="true"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M19 9l-7 7-7-7"
          ></path>
        </svg>
      </button>
      {isOpen && (
        <div
          id="dropdown"
          className="z-10 block bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700 absolute left-0 mt-2"
        >
          <ul
            className="py-2 text-sm text-gray-700 dark:text-gray-200"
            aria-labelledby="dropdownDefaultButton"
          >
            {/* Each menu item calls a function to set the story type */}
            <li>
              <a
                data-testid="storiesOption"
                onClick={() => {
                  setStory("askstories");
                  toggleDropdown();
                }}
                className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
              >
                Ask Stories
              </a>
            </li>
            <li>
              <a
                data-testid="storiesOption"
                onClick={() => {
                  setStory("beststories");
                  toggleDropdown();
                }}
                className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
              >
                Best Stories
              </a>
            </li>
            <li>
              <a
                data-testid="storiesOption"
                onClick={() => {
                  setStory("jobstories");
                  toggleDropdown();
                }}
                className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
              >
                Job Stories
              </a>
            </li>
            <li>
              <a
                data-testid="storiesOption"
                onClick={() => {
                  setStory("newstories");
                  toggleDropdown();
                }}
                className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
              >
                New Stories
              </a>
            </li>
            <li>
              <a
                data-testid="storiesOption"
                onClick={() => {
                  setStory("showstories");
                  toggleDropdown();
                }}
                className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
              >
                Show Stories
              </a>
            </li>
            <li>
              <a
                data-testid="storiesOption"
                onClick={() => {
                  setStory("topstories");
                  toggleDropdown();
                }}
                className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
              >
                Top Stories
              </a>
            </li>
          </ul>
        </div>
      )}

      {/* Renders different components depending on the state of isLoading and isError */}
      {isLoading ? (
        <p>Loading...</p>
      ) : isError ? (
        <p>Unable to fetch data. lease try again later</p>
      ) : (
        <StoriesDisplay data={storyData} />
      )}
    </div>
  );
};

export default Stories;
