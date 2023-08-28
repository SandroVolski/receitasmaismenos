import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/AddReceita.css';
import receitasData from '../data/receitas.json'; // Supondo que você esteja importando os dados da mesma forma

function AddReceita() {
  const navigate = useNavigate();

  const [nome, setNome] = useState('');
  const [ingredientes, setIngredientes] = useState(['']);
  const [modoPreparo, setModoPreparo] = useState(['']);
  const [observacoes, setObservacoes] = useState(['']);

  const handleAddReceita = () => {
    const novaReceita = {
      _id: { "$oid": new Date().getTime().toString() }, // Apenas para gerar um id único
      nome: nome,
      secao: [
        {
          nome: "Ingredientes",
          conteudo: ingredientes
        },
        {
          nome: "Modo de Preparo",
          conteudo: modoPreparo
        },
        {
          nome: "Outras informações",
          conteudo: observacoes
        }
      ]
    };

    receitasData.push(novaReceita);
    // Aqui você pode salvar o receitasData atualizado em seu backend ou local storage
    navigate('/'); // Redireciona para a página inicial
  };

  return (
    <div className="add-receita-container">
      <h1 className="add-receita-title">Adicionar Nova Receita</h1>
      <div className="add-receita-form">
        <textarea
          value={nome}
          onChange={(e) => setNome(e.target.value)}
          placeholder="Nome da Receita"
          rows="1"
        />
        <textarea
          value={ingredientes[0]}
          onChange={(e) => setIngredientes([e.target.value])}
          placeholder="Ingredientes"
          rows="5"
        />
        <textarea
          value={modoPreparo[0]}
          onChange={(e) => setModoPreparo([e.target.value])}
          placeholder="Modo de Preparo"
          rows="10"
        />
        <textarea
          value={observacoes[0]}
          onChange={(e) => setObservacoes([e.target.value])}
          placeholder="Observações"
          rows="4"
        />
        <button onClick={handleAddReceita}>Adicionar</button>
      </div>
    </div>
  );
}

export default AddReceita;
