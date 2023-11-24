import { useNavigate } from "react-router-dom"
import BaseButton from "../../components/button/BaseButton"
import TopicList from "../topic/components/TopicList"


const HomeScreen = () => {
    const navigate = useNavigate()
    return (
        <div className='mt-6 '>
            <div className='py-6 text-right pr-[140px]'>
                <BaseButton
                    className='px-6 py-2 bg-slate-700 text-gray-200 rounded-xl'
                    title="Tạo Topic"
                    handleClick={() => navigate('/topic/create')}
                />
            </div>
            <p className='py-10 bg-gray-300 text-center font-bold text-3xl'>Danh sách Topic</p>
            <div className='mx-[100px]'>
                <TopicList />
            </div>
        </div>
    )
}

export default HomeScreen