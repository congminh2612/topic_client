import BaseButton from "../../components/button/BaseButton"


const HomeScreen = () => {
    return (
        <div className='mt-10 '>
            <div className='py-8 text-right pr-20'>
                <BaseButton title="Tạo Topic" className='px-6 py-2 bg-slate-700 text-gray-200 rounded-xl' />
            </div>
            <p className='py-10 bg-gray-300 text-center font-bold text-3xl'>Danh sách Topic</p>
        </div>
    )
}

export default HomeScreen