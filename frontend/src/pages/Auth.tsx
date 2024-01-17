import {  FormEvent, useState } from 'react';
// @ts-ignore
// import Typical from 'react-typical';
import logo from '../assets/logo.png'
import { useMediaQuery } from 'react-responsive';
import { Link} from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

// @ts-ignore
const MinWidthWrapper = ({ children }: ReactNode) => {
  const isMobile = useMediaQuery({ maxWidth: 767 });

  return isMobile ? null : children;
}

function Auth(){
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
  const baseUrl = 'http://64.23.149.242:3336'

  const handleSubmit = async (event: FormEvent) => {
    event.preventDefault()

  try{
    const response = await axios.post(`${baseUrl}/login`, {email, password});

    const token = response.data.token;
    localStorage.setItem('token', token);

    navigate('/home')

  } catch(error){
      console.error('Erro durante a autenticação', error)
  }
}

  return(
    <div className='min-h-screen min-w-full flex justify-around align-middle'>
    <MinWidthWrapper>
    <div className="bg-strongPink w-[100%] h-screen flex justify-center items-center invisible;">
      <div className='introText flex font-medium text-3xl text-white p-20'>
        <span>Conheça <span className='text-4xl font-bold'>GastronomIA</span> seu
        {/* <Typical
          className='text-4xl font-bold'
          steps={[' PARCEIRO', 3000, ' AMIGO', 3000, ' ASSISTENTE', 3000]}
          loop={1}
          wrapper={'span'}
        /> */}
        de cozinha virtual!</span>
      </div>
    </div>
    </MinWidthWrapper>
    <div className='w-[50%] flex flex-col justify-center items-center'> 
      <img src={logo} alt="logo" width={100} height={100} className='mb-2'/>
      <h2 className='text-3xl mb-4'>Autenticação</h2>
      <form className='flex flex-col gap-4 border p-5 rounded' onSubmit={handleSubmit}>
        <label>Email: </label>
        <input type="text" required 
        className='border border-black rounded p-1' 
        onChange={(e) => {
          setEmail(e.target.value)
        }}/>
        
        <label>Senha: </label>
        <input type="password" required 
        className='border border-black rounded p-1'
        onChange={(e) => {
          setPassword(e.target.value)
        }}/>
        <button className='bg-medianPink rounded p-2 text-white font-semibold'>Entrar</button>
      </form>
      <br />
      <Link to={'/NewUser'}>
        <p className='cursor-pointer'>Cadastrar-se</p>
      </Link>
    </div>
    </div>
  )
}

export default Auth;