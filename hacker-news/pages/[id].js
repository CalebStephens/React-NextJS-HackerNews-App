import axios from "axios";
import { useRouter } from "next/router";


const Story = ({ story }) => {
  const router = useRouter();
  const { id } = router.query;
  console.log(story.kids)
  return (
    <>
      <h1>User {id}</h1>
      <p>by: {story.by}</p>
      { story.kids ?
        story.kids.slice(0,5).map((kid, index) => {
          return (
            <p key={index}>{kid}</p>
          )
        }
        ): <p>N/A</p>}
      <p>score: {story.score}</p>
      <p>title: {story.title}</p>
      <p>type: {story.type}</p>
      <p>time: {story.time}</p>




      
    </>
  );
};

export const getServerSideProps = async (context) => {
  const { id } = context.params;
  const storyRes = await axios.get(
    `https://hacker-news.firebaseio.com/v0/item/${id}.json?print=pretty`
  );
  return {
    props: {
      story: storyRes.data,
    },
  };
};

export default Story;