// Importing the Link component from the Next.js library
import Link from "next/link";

const StoriesDisplay = ({ data }) => {
  
  // Returning a div with a class name of "card-display-parent" and mapping over the data array received in the props
  return (
    <div className="card-display-parent">
      {data.map((story) => {
        // Returning a Link component for each story item in the array, with its href attribute set to the dynamic route that includes the id of the story being linked to
        return (
          <Link
            href={`/stories/${story.id}`}
            className="card-parent"
            key={story.id}
            data-testid="individual-story"
          >
            <h2>{story.title}</h2>
          </Link>
        );
      })}
    </div>
  );
};

// Exporting the StoriesDisplay component as a default export
export default StoriesDisplay;
