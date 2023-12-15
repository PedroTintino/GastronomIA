import { useFormik } from 'formik';
import * as yup from 'yup';

const CadastroForm = () => {
  const formik = useFormik({
    initialValues: {
      nome: '',
      email: '',
      senha: '',
      repetirSenha: '',
    },
    validationSchema: yup.object({
      nome: yup.string().required('Campo obrigatório'),
      email: yup.string().email('Formato de email inválido').required('Campo obrigatório'),
      senha: yup.string().required('Campo obrigatório'),
      repetirSenha: yup
        .string()
        // @ts-ignore
        .oneOf([yup.ref('senha'), null], 'Senhas não coincidem')
        .required('Campo obrigatório'),
    }),
    onSubmit: (values) => {
      // VOU ENVIAR OS DADOS DAQUI
      alert(`Dados enviados com sucesso!`)
      console.log(values);
    },
  });

  return (
    <form onSubmit={formik.handleSubmit} className='flex flex-col gap-3 border p-5 rounded'>
      <label>
        Nome:
        <br />
        <input type="text" name="nome" value={formik.values.nome} onChange={formik.handleChange} className='border border-black rounded p-1'/>
        {formik.touched.nome && formik.errors.nome ? (
          <div style={{ color: 'red' }}>{formik.errors.nome}</div>
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
          name="senha"
          value={formik.values.senha}
          onChange={formik.handleChange}
          className='border border-black rounded '
        />
        {formik.touched.senha && formik.errors.senha ? (
          <div style={{ color: 'red' }}>{formik.errors.senha}</div>
        ) : null}
      </label>
      <label>
        Repetir Senha:
        <br />
        <input
          type="password"
          name="repetirSenha"
          value={formik.values.repetirSenha}
          onChange={formik.handleChange}
          className='border border-black rounded'
        />
        {formik.touched.repetirSenha && formik.errors.repetirSenha ? (
          <div style={{ color: 'red' }}>{formik.errors.repetirSenha}</div>
        ) : null}
      </label>
      <button type="submit" className='bg-medianPink rounded p-2 text-white font-semibold'>Cadastrar</button>
    </form>
  );
};

export default CadastroForm;
