import Link from "next/link";

const LeadersDisplay = ({ data }) => {
    return (
        <div className='card-display-parent'>
            {data.map((leader,index) => {
                return (
                <Link href={`/leaders/${leader}`} className="card-parent" key={index}>
                    <h2>{leader}</h2>
                </Link>
                )
            })}
        </div>
        

        
)};

  export default LeadersDisplay;