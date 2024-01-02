import logo from '../assets/logo.png'
import icecream from '../assets/icecream.jpg'
import { useMediaQuery } from 'react-responsive';
import { Link } from 'react-router-dom';
import CadastroForm from '../components/CadastroForm';
import { SlArrowLeft } from "react-icons/sl";

// @ts-ignore
const MinWidthWrapper = ({ children }: ReactNode) => {
    const isMobile = useMediaQuery({ maxWidth: 767 });
    return isMobile ? null : children;
}
  
function NewUser(){
    return(
        <div className='min-h-screen min-w-full flex justify-around align-middle'>
        <Link to={'/'}>
        <div className="returnButton absolute top-2 left-1 p-1 flex font-bold cursor-pointer">
        <SlArrowLeft />    
        <p className='absolute -right-12 -top-0'>Voltar</p>
        </div>
        </Link>
        <div className="bg-white w-[100%] h-screen flex flex-col justify-center items-center invisible;">
        <img src={logo} alt="logo" width={100} height={100} className='mb-2'/>
          <h2 className='text-3xl mb-4'>Criar Acesso</h2>
          <CadastroForm />
        </div>
        <MinWidthWrapper>
        <div className='w-[50%] flex flex-col justify-center items-center'> 
            <img src={icecream} alt="An Icecream picture" className='max-h-screen min-w-full' />
        </div>
        </MinWidthWrapper>
        </div>
    )
}
export default NewUser;