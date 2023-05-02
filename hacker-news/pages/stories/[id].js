/*
  This page will display the details of a story
  It will import the useRouter hook from Next.js to get the ID from the URL
  It will then use the ID to fetch the story data from the Hacker News API
  It will then render the story data
*/

// Import the axios library for making HTTP requests
import axios from "axios";
// import useRouter hook from Next.js
import { useRouter } from "next/router";

import TimeConverter from "@/utils/timeConverter";

// create a functional component called Story that accepts story as props
const Story = ({ story }) => {
  // initialize the useRouter hook
  const router = useRouter();
  // get the ID from the router query
  const { id } = router.query;
  
  // return the JSX for the Story component
  return (
    <>
      <h1>User {id}</h1>
      <p>By: {story.by}</p>
      <p>Title: {story.title}</p>
      <p>Type: {story.type}</p>
      {story.kids ? ( // if the story has kids, display them
      <div>Kids:{
        story.kids.slice(0, 5).map((kid, index) => {
          return <p key={index}> &emsp;<a href={`https://hacker-news.firebaseio.com/v0/item/${kid}.json?print=pretty`} target="_blank">{`https://hacker-news.firebaseio.com/v0/item/${kid}.json?print=pretty`}</a></p>;
        })}</div>
      ) : (// otherwise, display N/A
        <p>N/A</p>
      )}
      <p>Score: {story.score}</p>
      {/*Calls a time conversion method with the epoch time from api */}
      <p>Date/Time: {TimeConverter(story.time).props.children}</p>
      {/*If the story has a text property, display it, otherwise display N/A */}
      {story.url ? <p>Url: <a href={`${story.url}`} target="_blank">{story.url}</a></p> : <p>N/A</p>}
    </>
  );
};

export const getServerSideProps = async (context) => {
  // get the ID from the context parameters
  const { id } = context.params;
  // fetch the story data using Axios
  const storyRes = await axios.get(
    `https://hacker-news.firebaseio.com/v0/item/${id}.json?print=pretty`
  );
  // return the story data as props
  return {
    props: {
      story: storyRes.data,
    },
  };
};

// export the Story component as default
export default Story;
