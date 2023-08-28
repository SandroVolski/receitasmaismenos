import React from 'react';
import { Link } from 'react-router-dom';
import useReceitas from '../hooks/useReceitas';
import '../styles.css';
import '../styles/Home.css';

function Home() {
  const { receitas } = useReceitas();

  return (
    <div className="home-container">
      {/*
      <div className="banner">
        <h1 className="home-title">Receitas da Vovó</h1>
      </div>
      */}
      <div className="header-image-container">
        <img className="header-image" src="/bannercerto.png" alt="Header" />
        <Link to="/add-receita" className="add-receita-button">
          Adicionar Receita
        </Link>
      </div>
      <ul className="recipe-list">
        {receitas.map((receita) => (
          <li key={receita._id.$oid} className="recipe-item">
            <div className="recipe-content">
              <h3>{receita.nome}</h3>
            </div>
            <Link to={`/receita/${receita._id.$oid}`} className="saiba-mais-link saiba-mais-container">
              Saiba Mais
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Home;