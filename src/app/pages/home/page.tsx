import React from 'react';
// import Logo from '../components/logo/page'
import Header from '@/app/components/header/page'
import Banner from '@/app/assets/img/pages/home/banner-home.svg'
import Image from 'next/image'
import './home.css'
import Link from 'next/link';

// TELA DE PERFIL

const home: React.FC = () => {
  return (
    <div>
        <Header />
        <section>
            <div className="banner-container">
                <Image src={Banner} 
                alt="Banner principal da home" 
                width={1920}
                height={600}
                priority={true}
                />
            </div>
        </section>
    </div>
  );
}

export default home;