import Logo from '../assets/logo.png'
import { Link } from 'react-router-dom';
import { BiLogOut } from "react-icons/bi";

function Navbar({ userName, onLogout }: {userName: string, onLogout: any}){

    return(
        <nav className= "flex p-4 border-b-medianPink border-b-2 justify-between">
            <div className='flex'>
            <img src={ Logo } alt="My logo image" width={70} height={70} className='rounded'/>
            <span className='my-4 ml-2 font-bold text-lg hidden md:block'>GastronomIA</span>
            </div>
            <div className='p-4'>
            <Link to="/" onClick={onLogout}>
            <span className=" font-semibold text-lg">Bem vindo, {userName}!</span>
            <button className='ml-5 font-semibold'>Sair <BiLogOut className='ml-1'/> </button>
            </Link>
            </div>
        </nav>
    )
}
export default Navbar;