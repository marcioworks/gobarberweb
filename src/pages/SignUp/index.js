import { Form, Input } from '@rocketseat/unform';
import React from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import * as Yup from 'yup';
import logo from '../../assets/logo.svg';
import { signUpRequest } from '../../store/modules/auth/actions';

const schema = Yup.object().shape({
  name: Yup.string().required('Nome è Obrigatório'),
  email: Yup.string()
    .email('insira um e-mail válido')
    .required('O e-mail é obrigatório'),
  password: Yup.string()
    .min(6, 'Senha muito curta')
    .required(' A Senha é obrigatoria'),
});

function SignUp() {
  const dispatch = useDispatch();
  function handleSubmit({ name, email, password }) {
    dispatch(signUpRequest(name, email, password));
  }
  return (
    <>
      <img src={logo} alt="logo" />
      <Form schema={schema} onSubmit={handleSubmit}>
        <Input name="name" type="text" placeholder="nome completo" />
        <Input name="email" type="email" placeholder="seu email" />
        <Input name="password" type="password" placeholder="sua senha" />

        <button type="submit">Criar conta</button>
        <Link to="/">já tenho uma conta</Link>
      </Form>
    </>
  );
}

export default SignUp;
