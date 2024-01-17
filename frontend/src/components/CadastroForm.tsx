import { useFormik } from 'formik';
import * as yup from 'yup';
import axios from 'axios';
import { useNavigate } from "react-router-dom";

const CadastroForm = () => {
  const baseUrl = 'https://gastronomiaapi.cloud';
  const navigate = useNavigate()

  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      password: '',
      repeatPassword: '',
    },
    validationSchema: yup.object({
      name: yup.string().required('Campo obrigatório'),
      email: yup.string().email('Formato de email inválido').required('Campo obrigatório'),
      password: yup.string().required('Campo obrigatório'),
      repeatPassword: yup
        .string()
        // @ts-ignore
        .oneOf([yup.ref('password'), null], 'Senhas não coincidem')
        .required('Campo obrigatório'),
    }),
    onSubmit: async (values) => {
      try{
        const response = await axios.post(`${baseUrl}/create`, values);

        if(response.status === 200){
          alert('Credencial gerada! Clique em OK para ser redirecionado à sessão de login de login.')
          navigate('/')
        }
      }catch(error){
        alert('Email já em uso!')
      } 
    },
  });

  return (
    <form onSubmit={formik.handleSubmit} className='flex flex-col gap-3 border p-5 rounded'>
      <label>
        Nome:
        <br />
        <input type="text" name="name" value={formik.values.name} onChange={formik.handleChange} className='border border-black rounded p-1'/>
        {formik.touched.name && formik.errors.name ? (
          <div style={{ color: 'red' }}>{formik.errors.name}</div>
        ) : null}
      </label>
      <label>
        Email:
        <br />
        <input
          type="email"
          name="email"
          value={formik.values.email}
          onChange={formik.handleChange}
          className='border border-black rounded p-1'
        />
        {formik.touched.email && formik.errors.email ? (
          <div style={{ color: 'red' }}>{formik.errors.email}</div>
        ) : null}
      </label>
      <label>
        Senha:
        <br />
        <input
          type="password"
          name="password"
          value={formik.values.password}
          onChange={formik.handleChange}
          className='border border-black rounded '
        />
        {formik.touched.password && formik.errors.password ? (
          <div style={{ color: 'red' }}>{formik.errors.password}</div>
        ) : null}
      </label>
      <label>
        Repetir Senha:
        <br />
        <input
          type="password"
          name="repeatPassword"
          value={formik.values.repeatPassword}
          onChange={formik.handleChange}
          className='border border-black rounded'
        />
        {formik.touched.repeatPassword && formik.errors.repeatPassword ? (
          <div style={{ color: 'red' }}>{formik.errors.repeatPassword}</div>
        ) : null}
      </label>
      <button type="submit" className='bg-medianPink rounded p-2 text-white font-semibold'>Cadastrar</button>
    </form>
  );
};

export default CadastroForm;
