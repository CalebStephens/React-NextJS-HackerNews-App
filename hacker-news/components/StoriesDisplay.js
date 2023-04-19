const StoriesDisplay = ({ data }) => {
    return (
        <>
        {data.map((story) => {
            return (
                <div key={story.id}>
                    <h2>{story.title}</h2>
                    <p>{story.score}</p>
                    <p>{story.by}</p>
                </div>
            )
        })}
        </>

        
)};

  export default StoriesDisplay;