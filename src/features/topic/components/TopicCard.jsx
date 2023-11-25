/* eslint-disable react/prop-types */
import { TfiInfoAlt } from "react-icons/tfi";
import BaseButton from "../../../components/button/BaseButton";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { deleteTopic } from "../services/deleteTopic";
import { subscribe } from "../services/subscribe";
import { unsubscribe } from "../services/unsubscribe";

const TopicCard = ({ topic }) => {
    const navigate = useNavigate()
    const currentUser = useSelector(state => state.auth.currentUser)

    const queryClient = useQueryClient()

    const isSubscribed = topic.subscribers.includes(currentUser?._id)

    const deleteMutation = useMutation({
        mutationFn: (id) => deleteTopic(id),
        onSuccess(data) {
            console.log(data)
            queryClient.invalidateQueries()
        },
        onError(err) {
            console.log(err)
        }
    })
    const subscribeMutation = useMutation({
        mutationFn: (topicId) => subscribe(currentUser._id, topicId),
        onSuccess(data) {
            console.log(data)
            queryClient.invalidateQueries()
        },
        onError(err) {
            console.log(err)
        }
    })
    const unsubscribeMutation = useMutation({
        mutationFn: (topicId) => unsubscribe(currentUser._id, topicId),
        onSuccess(data) {
            console.log(data)
            queryClient.invalidateQueries()
        },
        onError(err) {
            console.log(err)
        }
    })
    const handleSubscribe = (topicId) => {
        if (!currentUser) {
            navigate('/sign-in')
        }
        subscribeMutation.mutate(topicId)
    }
    const handleUnsubscribe = (topicId) => {
        unsubscribeMutation.mutate(topicId)
    }

    return (
        <div>
            <div>
                <img src={topic.image} alt="" />
            </div>
            <div className="pt-2 pl-2">
                <p className='text-xl font-medium'>{topic.name}</p>
            </div>
            <div className='flex items-center justify-between mt-3 mx-2'>
                <button onClick={() => navigate(`/topic/${topic._id}`)} className='bg-slate-600 px-2 py-1 rounded-md text-white'>
                    <div className='flex items-center space-x-2'>
                        <TfiInfoAlt />
                        <p>Chi tiết</p>
                    </div>
                </button>
                {(currentUser && currentUser.isAdmin)
                    ?
                    (<div className='space-x-2'>
                        <BaseButton title="Update" handleClick={() => navigate(`topic/update/${topic._id}`)} className='bg-red-500 px-3 py-1 rounded-md text-white' />
                        <BaseButton title="Delete" handleClick={() => deleteMutation.mutate(topic._id)} className='bg-red-500 px-3 py-1 rounded-md text-white' />
                    </div>)

                    : (
                        <div>
                            {isSubscribed ?
                                <BaseButton handleClick={() => handleUnsubscribe(topic._id)} title='Hủy đăng kí' className='bg-red-500 px-3 py-1 rounded-md' /> :
                                <BaseButton handleClick={() => handleSubscribe(topic._id)} title='Đăng ký' className='bg-red-500 px-3 py-1 rounded-md' />}

                        </div>
                    )

                }
            </div>
        </div>
    )
}

export default TopicCard