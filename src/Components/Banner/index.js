import React from 'react';
import galvaoImg from '../../assets/galvao.png'

export default function Banner() {
  return (
    <>
      <div className="banner-container">
        <div>
          <h1>Ter um banco é bom, mas ter Dev$Bank é muuuito melhor.</h1>
          <img src={galvaoImg} alt="imagem do anunciante" />
        </div>
      </div>
    </>
  );
}
