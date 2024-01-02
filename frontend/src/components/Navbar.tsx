import Logo from '../assets/logo.png'

function Navbar({ userName }: {userName: string}){

    return(
        <nav className= "flex p-4 border-b-medianPink border-b-2 justify-between">
            <div className='flex'>
            <img src={ Logo } alt="My logo image" width={70} height={70} className='rounded'/>
            <span className='my-4 ml-2 font-bold text-lg'>GastronomIA</span>
            </div>
            <span className="p-4 font-semibold text-lg">Bem vindo, {userName}!</span>
        </nav>
    )
}
export default Navbar;