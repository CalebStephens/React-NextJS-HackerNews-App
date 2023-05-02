import axios from "axios";
import { useRouter } from "next/router";
import ErrorPage from "next/error";
import leaders from "@/json/leaders";
import TimeConverter from "@/utils/timeConverter";

const Leader = ({ account }) => {
  const router = useRouter();
  const { id } = router.query;
  const MAXSUBMITTED = 10;
  return (
    <>
      {leaders.names.includes(id) ? (
        <div>
          <h1>User: {id}</h1>
          <p>About: {account.about}</p>
          <p>Created: {TimeConverter(account.created).props.children}</p>
          <p>ID: {account.id}</p>
          <p>Karma: {account.karma}</p>
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

export const getServerSideProps = async (context) => {
  const { id } = context.params;
  const leaderRes = await axios.get(
    `https://hacker-news.firebaseio.com/v0/user/${id}.json?print=pretty`
  );
  return {
    props: {
      account: leaderRes.data,
    },
  };
};

export default Leader;
