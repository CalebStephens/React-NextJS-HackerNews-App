import axios from "axios";
import { useRouter } from "next/router";
import ErrorPage from "next/error";
import leaders from "@/json/leaders";

const Leader = ({ account }) => {
  const router = useRouter();
  const { id } = router.query;
  return (
    <>
      {leaders.names.includes(id) ? (
        <div>
          <h1>User {id}</h1>
          <p>about: {account.about}</p>
          <p>created: {account.created}</p>
          <p>id: {account.id}</p>
          <p>karma: {account.karma}</p>
          {account.submitted.slice(0, 5).map((kid, index) => {
            return (
              <p key={index}>
                <a
                  href={`https://hacker-news.firebaseio.com/v0/item/${kid}.json?print=pretty`}
                >{`https://hacker-news.firebaseio.com/v0/item/${kid}.json?print=pretty`}</a>
              </p>
            );
          })}
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
