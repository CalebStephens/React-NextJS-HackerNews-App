/*
  This page is responsible for rendering the leaders page.
  It imports the LeadersDisplay component and the leaders JSON data.
  It then renders the LeadersDisplay component and passes the leaders JSON data as a prop.
*/

// Importing JSON data from "@/json/leaders"
import leadersJson from "@/json/leaders";
// Importing LeadersDisplay component from "@/components/LeadersDisplay"
import LeadersDisplay from "@/components/LeadersDisplay";

// Defining a functional component named "leaders"
const Leaders = () => {
  // Rendering the LeadersDisplay component and passing the "names" data from the leadersJson as a prop
  return <LeadersDisplay data={leadersJson.names} />;
};

// Exporting the leaders component as the default export of this module
export default Leaders;
