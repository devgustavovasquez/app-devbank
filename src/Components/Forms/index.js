import React from 'react';

export default function Forms() {
  return (
    <div className="rect">
      <h2>Fale com a gente</h2>

      <input type="text" placeholder='Nome Completo'/>
      <div className='double-input'>
        <input type="text" placeholder='Telefone'/>
        <input type="text" placeholder='Email'/>
      </div>
      <div className='double-input'>
        <input type="text" placeholder='Escolha um Estado'/>
        <input type="text" placeholder='Escolha uma Cidade'/>
      </div>
      <textarea placeholder='Mensagem'></textarea>

      <div>
      <input type="checkbox" />
      <p>Concordo com a coleta e tratamento dos meus dados para fins de cadastro e elaboração de orçamento, assim como, o contato através do telefone acima informado.</p>
      </div>
      <div>
      <input type="checkbox" />
      <p>Gostaria de receber notícias da Dev$Bank</p>
      </div>

      <button>Enviar</button>
    </div>
  );
}
