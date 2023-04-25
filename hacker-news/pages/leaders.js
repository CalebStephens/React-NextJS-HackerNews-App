import leadersJson from "@/json/leaders";
import LeadersDisplay from "@/components/LeadersDisplay";

const leaders = () => {
  return <LeadersDisplay data={leadersJson.names} />;
};

export default leaders;
