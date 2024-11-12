import React from 'react';
import { Link } from 'react-router-dom';

const HomePage = () => (
  <div className="container mt-5">
    <div className="jumbotron">
      <h1 className="display-4">Estante de Livros</h1>
      <p className="lead">Bem-vindo à sua estante pessoal! Explore seus livros, gerencie seu progresso de leitura e muito mais!</p>
      <hr className="my-4" />
      <p>Clique nos links abaixo para navegar para Pesquisa ou Prateleira:</p>
      <Link className="btn btn-primary btn-lg" to="/search" role="button">Ir para Pesquisa</Link>
      <Link className="btn btn-secondary btn-lg ml-2" to="/shelf" role="button">Ir para Prateleira</Link>
    </div>
  </div>
);

export default HomePage;
