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

import Dropdown from "@/components/Dropdown";

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

  return (
    <div className="relative">
      <Dropdown setOption={setStory}/>
      {/* Renders different components depending on the state of isLoading and isError */}
      {isLoading ? (
        <p data-testid="loading">Loading...</p>
      ) : isError ? (
        <p>Unable to fetch data. lease try again later</p>
      ) : (
        <StoriesDisplay data={storyData} />
      )}
    </div>
  );
};

export default Stories;
