import React, { useState } from 'react';
import DefaultLogo from '../../assets/logo-devbank.png'
import WhiteLogo from '../../assets/logo-branca-devbank.png'


export default function NavBar() {

  const [classesNav, setClassesNav] = useState('nav-container')
  const [logo, setLogo] = useState(WhiteLogo)

  window.onscroll = () => handleScroll()

  function handleScroll() {
    if (document.documentElement.scrollTop !== 0) {
      setClassesNav('nav-container scroll') 
      setLogo(DefaultLogo)
    } else {
        setClassesNav('nav-container')
        setLogo(WhiteLogo) 
    }   
  } 

  return (

    <div className={classesNav}>
      <div>
        <img src={logo} alt="Logo da Dev$Bank" />
        <nav>
          <a href="#home">Home</a>
          <a href="#home">Unidades</a>
          <a href="#home">Sobre nós</a>
          <a href="#home">Suporte</a>

          <button>Simular Empréstimo</button>
        </nav>
      </div>
    </div>
  )
};
