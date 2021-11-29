# Primeiro projeto em ReactJs

## Este é o primeiro projeto em reactJs que estou desenvolvendo, o projeto está sendo desenvolvido pensando em um problema que uma agencia de viagens tem de cadastros de certas informações onde atualmente usam tudo em papel.

Este projeto esta usando ReactJs + NodeJs + Mysql, boa parte do projeto foi usando este material para estudos:
https://dev.to/nasreenkhalid/simple-react-js-and-mysql-integration-crud-app-frontend-3i0l

De momento ele está cadastrando somente 1 tabela no banco de dados para um procedimento simples com 1 coluna somente.

Junto estou usando Axios para fazer os post e get, biblioteca para conexão com Mysql, material Ui com os comandos:
npm install axios
npm install mysql
npm install @material-ui/core@next @emotion/react @emotion/styled

Junto instalado o NodeJs

Dentro do servidor precisa ser criado uma pasta chamado *config* e criar um arquivo chamado *db.js*, ali dentro vamos colocar estas configurações para criar a conexão com o banco de dados:

------
const mysql = require('mysql');

const db = mysql.createConnection({
host: "ipDoServidor",
user: "UsuariodoBancoDeDados",
password: "SenhaDoBancoDeDados",
database:"DatabaseASerUsada" 
})

module.exports = db;
--------

Depois de salvar este arquivo você roda o arquivo dentro do server *index.js* com node index.js, assim o servidor vai estar pronto para receber as requisições do front!