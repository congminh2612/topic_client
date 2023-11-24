import { useForm } from "react-hook-form"
import { useDispatch, useSelector } from "react-redux"
import TextInput from "../../components/input/TextInput"
import BaseButton from "../../components/button/BaseButton"
import { useEffect } from "react"
import { logoutSuccess } from "../auth/authSlice"


const InfoScreen = () => {
    const currentUser = useSelector(state => state.auth.currentUser)
    const dispatch = useDispatch()
    const { register, handleSubmit, setValue } = useForm()
    const onSubmit = () => {

    }
    useEffect(() => {
        if (currentUser) {
            setValue('username', currentUser.username)
            setValue('email', currentUser.email)

        }

    }, [setValue, currentUser])
    return (
        <div>
            <p className='py-10 text-center text-2xl font-bold bg-gray-200'>Information</p>
            <div className='pt-10 flex flex-col justify-center items-center'>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className='space-y-10'>
                        <div className='flex items-center space-x-16'>
                            <p className='text-xl font-medium'>Username</p>
                            <TextInput className='py-2 w-[400px]' {...register('username')} />
                        </div>
                        <div className='flex items-center space-x-[106px]'>
                            <p className='text-xl font-medium'>Email</p>
                            <TextInput className='py-2 w-[400px]' {...register('email')} />
                        </div>

                    </div>

                    <div className='text-left pt-10'>
                        <BaseButton title="Logout" handleClick={() => (dispatch(logoutSuccess()))} className='bg-red-500 px-8 py-2 rounded-2xl text-lg text-white' />
                    </div>

                </form>
            </div>
        </div>
    )
}

export default InfoScreen