const StoryCard = ({ data }) => {
    return (
        <>  
            <div className="card-parent" key={data.id}>
                <h2>{data.title}</h2>
                <p>{data.score}</p>
                <p>{data.by}</p>
            </div>
            
        </>

        
)};

  export default StoryCard;