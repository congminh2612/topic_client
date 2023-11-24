import { useQuery } from '@tanstack/react-query'

import { useParams } from 'react-router-dom'
import { getTopicById } from '../services/getTopicById'
import { getUserByTopic } from '../services/getUserByTopic'

const TopicDetailScreen = () => {
    const { id } = useParams()
    const { data: topic } = useQuery({ queryKey: ['topic', id], queryFn: () => getTopicById(id) })
    const { data: users } = useQuery({ queryKey: ['user', id], queryFn: () => getUserByTopic(id) })
    console.log(users)
    return (
        <div className='pt-10 '>
            <p className="text-3xl font-medium text-center py-10 bg-gray-200">Topic Detail</p>
            {topic &&
                <div className='pt-10 mx-[160px] grid grid-cols-2 gap 2'>
                    <div >
                        <p className='pl-20 text-xl font-medium'>Topic Information</p>
                        <div className='pt-8'>
                            <img src={topic?.image} alt="" />
                        </div>
                        <div className="space-x-4 pt-6">
                            <span className='text-lg font-medium'>Name:</span>
                            <span>{topic?.name}</span>
                        </div>
                        <div className="space-x-4 pt-6">
                            <span className='text-lg font-medium'>Description:</span>
                            <span>{topic?.description}</span>
                        </div>
                    </div>
                    <div>
                        <p className='pl-20 text-xl font-medium'>User Subscribes</p>
                        <div className='pt-10'>
                            <table className='table-auto w-full border-collapse '>
                                <thead>
                                    <tr key="">
                                        <th>Username</th>
                                        <th>Email</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {users && users.map(user => (
                                        <tr key={user._id}>
                                            <td align='center'>{user.username}</td>
                                            <td align='center'>{user.email}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>

                </div>}
        </div>
    )
}

export default TopicDetailScreen