import React from 'react';
import Logo from '../logo/page'
import './register.css'
import Link from 'next/link';

// TELA DE PERFIL

const Register: React.FC = () => {
  return (
    <div className='register-page-wrapper'>
        <Logo />
        <div className='register-form-wrapper'>
          <form className='register-form' action="">
            <h2>Cadastre-se</h2>
            <input placeholder='Nome completo' className='register-form-input' type="text" />
            <input placeholder='Email' className='register-form-input' type="email" />
            <input placeholder='Senha' className='register-form-input' type="password" />
            <input className='register-form-button register-form-input' type="submit" value="Finalizar Cadastro" />
          </form>
          <span>Já tem cadastro? <Link href="/login">Conecte-se</Link></span>
        </div>
    </div>
  );
}

export default Register;