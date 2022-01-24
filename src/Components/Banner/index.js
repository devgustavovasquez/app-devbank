import React from 'react';
import galvaoImg from '../../assets/galvao.png'

export default function Banner() {
  return (
    <>
      <div className="banner-container">
        <div>
          <span>Ter um banco é bom, mas ter Dev$Bank é muuuito melhor.</span>
          <img src={galvaoImg} alt="imagem do anunciante" />
        </div>
      </div>
    </>
  );
}
