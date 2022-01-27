import React from 'react';
import imgMapa from '../../assets/mapa-brasil.png'

export default function BannerMap() {
  return (
    <>
      <div className='banner-map'>
      <img src={imgMapa} alt="mapa do brasil" />

      <div>
        <p>A maior rede de agências <br/> fintechs do Brasil.</p>
        <h1>+ de 300 franquias</h1>
        <p>26 estados + DF</p>

        <button>Encontre a agência mais próxima</button>
      </div>
      </div>
  
    </>
  )
}
