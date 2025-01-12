import express from 'express'; // Importando a biblioteca express que é responsável por criar o servidor
import morgan from 'morgan'; // Importando a biblioteca morgan que é responsável por fazer o log das requisições
import routes from './routes.js'; // Importando as rotas

const app = express(); // Criando o servidor
const PORT = 3001; // Definindo a porta do servidor

app.use(morgan('dev')); // Utilizando a biblioteca morgan para fazer o log das requisições
app.use(express.json()); // Utilizando a biblioteca express para converter as requisições em JSON

app.use('/', routes); // Utilizando as rotas

app.listen(PORT, () => { // Iniciando o servidor
  console.log(`Server is running at http://localhost:${PORT}`); // Mostrando a porta do servidor
});
