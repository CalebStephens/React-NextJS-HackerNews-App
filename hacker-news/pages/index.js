/*
  This is the index page, which is the first page that will be loaded when the application is started.
  It will display two links, one to the stories page and one to the leaders page.
  It will be responsible for rendering the StoriesDisplay and LeadersDisplay components.
*/

// Importing the Link component from the Next.js framework
import Link from "next/link";

// Defining the Home component, which will be exported as the default
export default function Home() {
  return (
    // A div with a class of "card-display-parent" and "center", which are used for styling
    <div className="card-display-parent center">
      {/* Link component that will navigate to the "stories" page when clicked */}
      <Link href="./stories" className="card-parent" data-testid="page-button">
        <h1>Go To Stories</h1>
      </Link>
      {/* Link component that will navigate to the "leaders" page when clicked */}
      <Link href="./leaders" className="card-parent" data-testid="page-button">
        <h1>Go To Leaders</h1>
      </Link>
    </div>
  );
}
