import Link from "next/link"
import leadersJson from "@/json/leaders";

const leaders = () => {

    return (
        <div>
        <h1>Leaders</h1>
        <ul>
            {leadersJson.names.map((name) => {
                return (
                    <Link href={`/leaders/${name}`}>{name}</Link>
                )
            })}
        </ul>
        </div>
    )
}

export default leaders