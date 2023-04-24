
import axios from 'axios';
import React, { useEffect, useState } from 'react'
import StoriesDisplay from '@/components/StoriesDisplay';



const Stories = () => {
  
    const [isOpen, setIsOpen] = useState(false);
    const [story, setStory] = useState("askstories");
    const [storyData, setStoryData] = useState([]);

    const LIMIT = 50;

    useEffect(() => {
      console.log("test")
      const fetchData = async () => {
        console.log(story)
        const res = await axios.get(
          `https://hacker-news.firebaseio.com/v0/${story}.json?print=pretty&limitToFirst=${LIMIT}&orderBy="$key"`
          );
          setStoryData(await Promise.all(
          res.data.map(async (storyId) => {
            const res = await axios.get(
              `https://hacker-news.firebaseio.com/v0/item/${storyId}.json?print=pretty`
            );
            return res.data;
          })
        ));


    }
    

      fetchData();  
    }, [story])
  
    const toggleDropdown = () => {
      setIsOpen(!isOpen);
    }
    return (
      <div className="relative">
      <button
        id="dropdownDefaultButton"
        data-dropdown-toggle="dropdown"
        className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        type="button"
        onClick={toggleDropdown}
      >
        Dropdown button
        <svg className="w-4 h-4 ml-2" aria-hidden="true" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
        </svg>
      </button>
      {isOpen && (
        <div
          id="dropdown"
          className="z-10 block bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700 absolute left-0 mt-2">
          <ul className="py-2 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownDefaultButton">
            <li>
              <a onClick={() => setStory("askstories")} className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Dashboard</a>
            </li>
            <li>
              <a onClick={() => setStory("beststories")} className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Settings</a>
            </li>
            <li>
              <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Earnings</a>
            </li>
            <li>
              <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Sign out</a>
            </li>
          </ul>
        </div>
      )}

      <StoriesDisplay data={storyData} />
    </div>
  )
}
// export const getServerSideProps = async () => {
//   const LIMIT = 50;
//   try {
//     const storyRes = await axios.get(
//       `https://hacker-news.firebaseio.com/v0/askstories.json?print=pretty&limitToFirst=${LIMIT}&orderBy="$key"`
//     );
//     const storyData = await Promise.all(
//       storyRes.data.map(async (storyId) => {
//         const res = await axios.get(
//           `https://hacker-news.firebaseio.com/v0/item/${storyId}.json?print=pretty`
//         );
//         return res.data;
//       })
//     );
  
//     return {
//       props: {
//         storyData: storyData,
//       },
//     };
//   } catch (error) {
//     console.error(error);
//     return {
//       props: {
//         storyData: [],
//       },
//     };
//   }
// };


export default Stories;