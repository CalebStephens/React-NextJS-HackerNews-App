import Link from "next/link";

const StoriesDisplay = ({ data }) => {
  return (
    <div className="card-display-parent">
      {data.map((story) => {
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

export default StoriesDisplay;
