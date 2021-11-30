# Projeto Gerenciador agencia

## Este é o meu primeiro projeto em ReactJs + Axios + NodeJs + Mysql, esta sendo desenvolvido para resolver um problema de uma agencia de viajes onde todo um processo de registro de informações acontece tudo em papel. Vendo esta dificuldade pensei em desenvolver este projeto com banco de dados para treinar o meu aprendizado em React.

Este projeto e estudos está sendo baseado neste material que encontrei na internet, onde consegui de certa facilidade desenvolver o inicio do projeto:
https://dev.to/nasreenkhalid/simple-react-js-and-mysql-integration-crud-app-frontend-3i0l

O servidor precisa ter um banco de dados Mysql rodando para ter a conexão com o banco de dados! Para auxiliar segue um material para instalação do servidor: https://www.digitalocean.com/community/tutorials/how-to-install-mysql-on-ubuntu-20-04-pt


Primeiro para rodar o servidor precisa ser feito um arquivo de configuração dentro da pasta config/db.js, este arquivo deve conter estas linhas e configuração:
-------------
<code>
const mysql = require('mysql');

const db = mysql.createConnection({
host: "ipDoServidor",
user: "usuarioDoBancoDeDados",
password: "senhaDoBancoDeDados",
database:"bancoDeDadosAUsar" 
})

module.exports = db;
</code>
--------------

Depois no servidor é necessário instalar os seguintes pacotes para funcionar:

npm install express
npm install mysql
npm install cors

Depois disso você pode rodar o comando no arquivo *index.js* :
node index.js

Caso o mysql nao esteja aceitando conexão precisa rodar este comando para permitir acessos:
ALTER USER 'root'@'localhost' IDENTIFIED WITH mysql_native_password BY 'password';

Para o banco de dados estou disponibilizando o sql com a estrutura que pensei até momento.


# Como está até momento?

## O projeto ainda está em desenvolvimento e não foi implantado todas as funções necessarias, assim que estiver implantada as funções todas sinalizo aqui!
