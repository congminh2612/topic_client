import { Link } from "react-router-dom"
import TextInput from "../input/TextInput"
import { useSelector } from "react-redux"

const Header = () => {
    const user = useSelector(state => state.auth.currentUser)
    console.log(user)
    return (
        <div className='mt-8 px-20 flex items-center justify-between'>
            <div className='flex space-x-10'>
                <img src="https://fullstack.edu.vn/static/media/f8-icon.18cd71cfcfa33566a22b.png" alt="" className='w-[50px]' />
                <TextInput placeholder="Tìm kiếm" />
            </div>
            {user && <p>{user.username}</p>}
            {!user && <div className='flex space-x-4'>

                <Link to={'/sign-up'}>
                    <p>Đăng ký</p>
                </Link>
                <Link to={'/sign-in'}>
                    <p>Đăng nhập</p>
                </Link>
            </div>}
        </div>
    )
}

export default Header