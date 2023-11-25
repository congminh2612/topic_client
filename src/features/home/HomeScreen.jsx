import { useNavigate } from "react-router-dom"
import BaseButton from "../../components/button/BaseButton"
import TopicList from "../topic/components/TopicList"
import { useSelector } from "react-redux"
import toast, { Toaster } from "react-hot-toast"


const HomeScreen = () => {
    const navigate = useNavigate()
    const currentUser = useSelector(state => state.auth.currentUser)
    const handleCreate = () => {
        if (!currentUser.isAdmin) {
            toast.error("Hãy đăng nhập với tài khoản quản trị viên ")
        } else {
            navigate('/topic/create')
        }

    }
    return (
        <div className='mt-6 '>
            <div><Toaster position="top-center"
                reverseOrder={false} /></div>
            {currentUser.isAdmin && (<div className='py-6 text-right pr-[140px] space-x-4'>
                <BaseButton
                    className='px-6 py-2 bg-slate-700 text-gray-200 rounded-xl'
                    title="Tạo Topic"
                    handleClick={handleCreate}
                />
                <BaseButton
                    className='px-6 py-2 bg-slate-700 text-gray-200 rounded-xl'
                    title="Quản lí người dùng"
                    handleClick={() => navigate('/user')}
                />
            </div>)}
            <p className='py-10 bg-gray-300 text-center font-bold text-3xl'>Danh sách Topic</p>
            <div className='mx-[100px]'>
                <TopicList />
            </div>
        </div>
    )
}

export default HomeScreen