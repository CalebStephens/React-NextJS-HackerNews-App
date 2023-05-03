// Importing the Link component from Next.js to create clickable links
import Link from "next/link";

// A functional component that displays a list of leaders as clickable cards
const LeadersDisplay = ({ data }) => {
  return (
    <div className="card-display-parent">
      {/* Mapping through the list of leaders passed in as props */}
      {data.map((leader, index) => {
        return (
          /* Creating a Link component that points to the page of the individual leader 
             using the dynamic route syntax with the "leader" parameter */
          <Link
            href={`/leaders/${leader}`}
            className="card-parent"
            key={index}
            data-testid="leader-card"
          >
            <h2 data-testid="leader-header">{leader}</h2>
          </Link>
        );
      })}
    </div>
  );
};

export default LeadersDisplay;
