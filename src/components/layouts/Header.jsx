import { Link, useNavigate } from "react-router-dom"
import TextInput from "../input/TextInput"
import { useSelector } from "react-redux"
import { IoPerson } from "react-icons/io5";

const Header = () => {
    const navigate = useNavigate()
    const user = useSelector(state => state.auth.currentUser)
    console.log(user)
    return (
        <div className='mt-8 px-[160px] flex items-center justify-between'>
            <div className='flex space-x-10'>
                <img onClick={() => navigate('/')} src="https://fullstack.edu.vn/static/media/f8-icon.18cd71cfcfa33566a22b.png" alt="" className='w-[50px]' />
                <TextInput placeholder="Tìm kiếm" />
            </div>
            {user && (
                <div onClick={() => navigate('/info')} className='flex items-center space-x-6 cursor-pointer'>
                    <IoPerson size='24' />
                    <p className='text-lg font-medium'>{user.username}</p>
                </div>

            )
            }
            {
                !user && <div className='flex space-x-4'>

                    <Link to={'/sign-up'}>
                        <p>Đăng ký</p>
                    </Link>
                    <Link to={'/sign-in'}>
                        <p>Đăng nhập</p>
                    </Link>
                </div>
            }
        </div >
    )
}

export default Header