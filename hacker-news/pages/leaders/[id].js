// Import the axios library for making HTTP requests
import axios from "axios";
// Import the useRouter hook from the Next.js router library
import { useRouter } from "next/router";
// Import the ErrorPage component from Next.js to display HTTP error pages
import ErrorPage from "next/error";
// Import the leaders data from a local JSON file
import leaders from "@/json/leaders";
// Import the TimeConverter utility function from a local file
import TimeConverter from "@/utils/timeConverter";

// Define the Leader component as an arrow function that takes a single object argument (account)
const Leader = ({ account }) => {
  // Get the current router object from the useRouter hook
  const router = useRouter();
  // Extract the "id" property from the router query object
  const { id } = router.query;
  // Define a constant for the maximum number of submitted items to display
  const MAXSUBMITTED = 10;
  return (
    <>
    {/* If the "names" property of the "leaders" object includes the current "id" value display page otherwise show 404 */}
      {leaders.names.includes(id) ? (
        <div>
          <h1>User: {id}</h1>
          <p>About: {account.about}</p>
          {/* Render the user's "created" timestamp, converted to a human-readable format using the TimeConverter function */}
          <p>Created: {TimeConverter(account.created).props.children}</p>
          <p>ID: {account.id}</p>
          <p>Karma: {account.karma}</p>
          {/* Render a list of the user's submitted items, with links to their respective pages */}
          <div>Submitted:
          {account.submitted.slice(0, MAXSUBMITTED).map((kid, index) => {
            return (
              <p key={index}>&emsp;
                <a
                  href={`https://hacker-news.firebaseio.com/v0/item/${kid}.json?print=pretty`}
                >{`https://hacker-news.firebaseio.com/v0/item/${kid}.json?print=pretty`}</a>
              </p>
            );
          })}</div>
        </div>
      ) : (
        <ErrorPage statusCode={404} />
      )}
    </>
  );
};

// Define a function to fetch data from the Hacker News API and pass it to the Leader component as props
export const getServerSideProps = async (context) => {
  // Extract the "id" parameter from the context object
  const { id } = context.params;
  // Fetch the user data for the given ID from the Hacker News API using the axios library
  const leaderRes = await axios.get(
    `https://hacker-news.firebaseio.com/v0/user/${id}.json?print=pretty`
  );
  // Return the user data as props for the Leader component
  return {
    props: {
      account: leaderRes.data,
    },
  };
};

// Export the Leader component as the default export of this module
export default Leader;
