import React from 'react'
import Logo from '../logo/page'
import Link from 'next/link';

import './login.css'

const page: React.FC = () => {
  return (
    <div className='login-page-wrapper'>
        <Logo />
        <div className='login-form-wrapper'>
          <form className='login-form' action="">
            <h2>Login</h2>
            <input placeholder='Email' className='login-form-input' type="email" />
            <input placeholder='Senha' className='login-form-input' type="password" />
            <input className='login-form-button login-form-input' type="submit" value="Entrar" />
          </form>
          <span>Não tem cadastro? <Link href="/register">Cadastre-se</Link></span>
        </div>
    </div>
  )
}

export default page