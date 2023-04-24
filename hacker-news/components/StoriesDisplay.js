import StoryCard from '@/components/StoryCard';

const StoriesDisplay = ({ data }) => {
    return (
        <div className='card-display-parent'>
            {data.map((story) => {
                return (
                <StoryCard data={story}/>
                )
            })}
        </div>

        
)};

  export default StoriesDisplay;