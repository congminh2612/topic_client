import { useQuery } from '@tanstack/react-query'
import { useParams } from 'react-router-dom'
import { getTopicById } from '../services/getTopicById'
import { getUserByTopic } from '../services/getUserByTopic'
import { useSelector } from 'react-redux'

const TopicDetailScreen = () => {
    const currentUser = useSelector((state) => state.auth.currentUser)
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
                        <p className='pl-20 text-xl font-medium'>Những người đăng ký topic này</p>
                        {
                            currentUser.isAdmin ? (
                                <div className='pt-10'>
                                    <table className='table-auto w-full border-collapse border-2'>
                                        <thead>
                                            <tr key="">
                                                <th className="border-[1px] bg-slate-700 text-white py-2" >Username</th>
                                                <th className="border-[1px] bg-slate-700 text-white py-2">Email</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {users && users.map(user => (
                                                <tr key={user._id}>
                                                    <td className='border-[1px] pl-4 py-2'>{user.username}</td>
                                                    <td className='border-[1px] pl-4 py-2' >{user.email}</td>
                                                </tr>
                                            ))}
                                        </tbody>
                                    </table>
                                </div>
                            ) : (
                                <div className="text-center pt-10">
                                    <p className='text-xl font-medium text-red-500'>Chỉ tài khoản quản trị viên mới có thể xem được nội dung này</p>
                                </div>
                            )
                        }

                    </div>

                </div>}
        </div>
    )
}

export default TopicDetailScreen