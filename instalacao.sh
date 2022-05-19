#!/bin/bash

echo= "Iniciando instalação de dependencias..."

apt update

apt dist-upgrade -y

apt install curl -y
apt install mariadb-server -y
apt install nodejs -y
apt install  npm -y

curl -fsSL https://deb.nodesource.com/setup_18.x | bash -
apt-get install -y nodejs

npm install express

npm install -g serve

npm install mysql

npm install cors

npm install -g npm-check-updates

#ncu

#ncu -g

#ncu -u

#npm update

#npm install

echo= "Gostaria de fazer o deploy? [S/N]"

read resposta

if [ $resposta = "S" ]
then
    npm run build
    serve -s build
elif [ $resposta = "N" ]; then

echo "Instalacao concluida!"

else
    echo "Opcao invalida!"
fi

done