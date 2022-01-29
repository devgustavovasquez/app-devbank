import React from 'react';
import whiteLogo from '../../../assets/logo-branca-devbank.png'
import icoFace from '../../../assets/ico-face.png'
import icoInsta from '../../../assets/ico-insta.png'
import icoTwitter from '../../../assets/ico-twitter.png'
import icoYtb from '../../../assets/ico-ytb.png'

export default function Footer() {
  return (
    <div className="footer">
      <div>
        <img src={whiteLogo} alt="logo devbank" />
        <p>Rua dos Anjos, 999 - Jardim Santo Elias, São Paulo - SP, 09990999</p>
        <div className='follow-us'>
          <h1 className='title'>Siga a Dev$Bank</h1>
          <div className='icons'>
            <img src={icoFace} alt="icone facebook" />
            <img src={icoInsta} alt="icone facebook" />
            <img src={icoTwitter} alt="icone facebook" />
            <img src={icoYtb} alt="icone facebook" />
          </div>
        </div>
      </div>
      <div>
        <ul>
          <h1 className="title">Informações</h1>
          <li>Caixas Eletrônicos</li>
          <li>Cotação do Dólar da sua fatura</li>
          <li>Código de Defesa do Consumidor</li>
        </ul>
        <ul>
          <h1 className="title">Empresa</h1>
          <li>Dev$Bank Invest</li>
          <li>Seguros</li>
          <li>Carreiras</li>
        </ul>
      </div>
    </div>
  );
}
