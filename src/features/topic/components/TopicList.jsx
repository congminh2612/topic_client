import { useQuery } from "@tanstack/react-query"
import { getTopic } from "../services/getTopic"
import TopicCard from "./TopicCard"


const TopicList = () => {
    const { data } = useQuery({ queryKey: ['topics'], queryFn: getTopic })
    console.log(data)
    return (
        <div className='grid grid-cols-4 gap-8 mt-6'>
            {data && data.map(topic => (
                <div key={topic._id}>
                    <TopicCard topic={topic} />
                </div>
            ))}
        </div>
    )
}

export default TopicList