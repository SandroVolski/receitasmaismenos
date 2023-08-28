import React from 'react';
import { useParams } from 'react-router-dom';
import useReceitas from '../hooks/useReceitas';
import '../styles.css';
import '../styles/Receita.css';

function Receita() {
  const { id } = useParams();
  const { receitas } = useReceitas();

  const receita = receitas.find(r => r._id.$oid === id);

  if (!receita) {
    return <div>Receita não encontrada!</div>;
  }

  return (
    <div className="receita-container">
      <h1 className="recipe-title">{receita.nome}</h1>
      {receita.secao.map((section, index) => (
        <div key={index} className={`section-content ${section.nome.toLowerCase()}-section`}>
          <h2 className="section-title">{section.nome}</h2>
          <ul>
            {section.conteudo.map((item, idx) => (
              <li key={idx}>{item}</li>
            ))}
          </ul>
          {section.imagem && (
            <img className="recipe-image" src={section.imagem} alt={section.nome} />
          )}
        </div>
      ))}
    </div>
  );
}

export default Receita;
