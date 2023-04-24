import axios from "axios";
import { useRouter } from "next/router";


const User = ({ user }) => {
  const router = useRouter();
  const { id } = router.query;
    console.log(user);
  return (
    <>
      <h1>User {id}</h1>
      
      
    </>
  );
};

export const getServerSideProps = async (context) => {
  const { id } = context.params;
  const userRes = await axios.get(
    `https://hacker-news.firebaseio.com/v0/item/${id}.json?print=pretty`
  );
  return {
    props: {
      user: userRes.data,
    },
  };
};

export default User;