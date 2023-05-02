// Importing JSON data from "@/json/leaders"
import leadersJson from "@/json/leaders";
// Importing LeadersDisplay component from "@/components/LeadersDisplay"
import LeadersDisplay from "@/components/LeadersDisplay";

// Defining a functional component named "leaders"
const leaders = () => {
  // Rendering the LeadersDisplay component and passing the "names" data from the leadersJson as a prop
  return <LeadersDisplay data={leadersJson.names} />;
};

// Exporting the leaders component as the default export of this module
export default leaders;
