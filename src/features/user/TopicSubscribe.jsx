/* eslint-disable react/prop-types */

import { useQuery } from "@tanstack/react-query"
import { getTopicByUser } from "./services/getTopicByUser"


const TopicSubscribe = ({ userId }) => {
    console.log(userId)
    const { data } = useQuery({ queryKey: ['topics', userId], queryFn: () => getTopicByUser(userId), enabled: !!userId })
    console.log(data)
    return (
        <div>
            {data && data.map(topic => {
                return (
                    <div key={topic._id} className='text-base font-medium'>

                        {topic.name}
                    </div>
                )
            })}
        </div>
    )
}

export default TopicSubscribe