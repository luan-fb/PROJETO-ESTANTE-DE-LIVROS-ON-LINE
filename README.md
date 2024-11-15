
 <h1><strong>Estante de Livros Online 📚</strong></h1>

   <a href="https://seu-usuario.github.io/PROJETO-ESTANTE-DE-LIVROS-ON-LINE/" target="_blank">
            <img src="https://img.shields.io/badge/GitHub-Pages-blue" alt="GitHub Pages">
        </a>
    

<p>Acesse o projeto online: 
        <a href="https://seu-usuario.github.io/PROJETO-ESTANTE-DE-LIVROS-ON-LINE/" target="_blank">
     Estante de Livros Online
    </a>
    </p>
    <hr />

 <h2><strong>Descrição</strong></h2>
    <p>A <strong>Estante de Livros Online</strong> é uma aplicação web desenvolvida com <strong>React</strong> que permite aos usuários gerenciar seus livros em diferentes categorias:</p>
    <ul>
        <li><strong>Estou lendo</strong></li>
        <li><strong>Quero ler</strong></li>
        <li><strong>Já lido</strong></li>
    </ul>
    <p>Além disso, é possível pesquisar novos livros para adicionar à sua biblioteca, personalizar as prateleiras e visualizar o progresso de leitura.</p>
    <hr />

<h2><strong>Preview</strong></h2>
    <h3>Página Inicial</h3>
    <img src="assets/homepage.png" alt="Página Inicial" />

<h3>Página de Busca</h3>
    <img src="assets/searchpage.png" alt="Página de Busca" />

<h3>Movimentação de Livros</h3>
    <img src="assets/move-books.gif" alt="Movimentação de Livros" />
    <hr />

 <h2><strong>Funcionalidades</strong></h2>
    <ul>
        <li>📖 <strong>Gerenciar Livros:</strong> Mover livros entre categorias com facilidade.</li>
        <li>🔍 <strong>Busca Interativa:</strong> Encontre livros rapidamente usando a pesquisa dinâmica com debounce.</li>
        <li>💾 <strong>Persistência:</strong> O progresso é salvo automaticamente no navegador usando <code>localStorage</code>.</li>
        <li>🚀 <strong>Interface Responsiva:</strong> Design moderno utilizando <strong>Bootstrap</strong>.</li>
        <li>🌀 <strong>Carregamento Suave:</strong> Spinner para melhorar a experiência de busca.</li>
    </ul>
    <hr />

 <h2><strong>Tecnologias Utilizadas</strong></h2>
    <ul>
        <li><a href="https://reactjs.org/" target="_blank">React</a></li>
        <li><a href="https://getbootstrap.com/" target="_blank">Bootstrap</a></li>
        <li><a href="https://reactrouter.com/" target="_blank">React Router</a></li>
        <li><a href="https://fkhadra.github.io/react-toastify/" target="_blank">Toastify</a></li>
        <li><a href="https://api-books-dot-api-samples-423102.uc.r.appspot.com/api-docs" target="_blank">API de Livros</a></li>
    </ul>
    <hr />

<h2><strong>Como Executar o Projeto</strong></h2>
    <ol>
        <li>Acesse a pasta do projeto:
            <pre><code>cd PROJETO-ESTANTE-DE-LIVROS-ON-LINE</code></pre>
        </li>
        <li>Instale as dependências:
            <pre><code>npm install</code></pre>
        </li>
        <li>Inicie a aplicação:
            <pre><code>npm start</code></pre>
        </li>
        <li>Abra no navegador:
            <pre><code>http://localhost:3000</code></pre>
        </li>
    </ol>
    <hr />

<h2><strong>Estrutura de Pastas</strong></h2>
    <pre><code>
src/
├── components/
│   ├── Book.js          # Exibição de livros
│   ├── Shelf.js         # Exibição de prateleiras
│   └── ShelfSelector.js # Controle para mover livros entre prateleiras
├── pages/
│   ├── HomePage.js      # Página inicial
│   ├── SearchPage.js    # Página de busca
├── utils/
│   └── utils.js         # Função de debounce
├── App.js               # Componente principal
├── index.js             # Ponto de entrada
    </code></pre>
    <hr />

   <h2><strong>Melhorias Futuras</strong></h2>
    <ul>
        <li>🌙 <strong>Tema Escuro/Claro:</strong> Adicionar suporte para temas personalizados.</li>
        <li>📊 <strong>Estatísticas de Leitura:</strong> Exibir progresso de leitura com gráficos.</li>
        <li>🔄 <strong>Sincronização:</strong> Integração com uma base de dados online para salvar o progresso.</li>
    </ul>
    <hr />

<h2><strong>Contribuidores</strong></h2>
    <ul>
        <li><strong>Luan Ferreira</strong></li>
    </ul>
    <hr />

<h2><strong>Licença</strong></h2>
    <p>Este projeto está licenciado sob a <a href="LICENSE" target="_blank">MIT License</a>.</p>
    <hr />


</body>
</html>
