import React from 'react';
import seta from '../../assets/setinha.png'


export default function FaqList() {
  return (
    <div>
      <h2>Dúvidas Frequentes</h2>
      <ul>
        <li>
          <img src={seta} alt="icon" />
          <a href="#a">O que é a conta do Dev$Bank?</a>
        </li>
        <li>
          <img src={seta} alt="icon" />
          <a href="#a">Vou precisar passar por algum tipo de análise?</a>
        </li>
        <li>
          <img src={seta} alt="icon" />
          <a href="#a">Não tem nenhuma tarifa?</a>
        </li>
        <li>
          <img src={seta} alt="icon" />
          <a href="#a">Para quem é o Cartão de Crédito Dev$Bank?</a>
        </li>
        <li>
          <img src={seta} alt="icon" />
          <a href="#a">Quais são os benefícios do Cartão de Crédito Dev$Bank?</a>
        </li>
        <li>
          <img src={seta} alt="icon" />
          <a href="#a">Quem pode abrir a conta PJ?</a>
        </li>
        <li>
          <img src={seta} alt="icon" />
          <a href="#a">Como faço para abrir uma conta PJ?</a>
        </li>
      </ul>
    </div>
  );
}
