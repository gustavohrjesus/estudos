# AULA 07 - Como instalar o MySQL. Como instalar e usar o Workbench. Como realizar conexao Node x MySQL

## Download do MySQL (MySQL Community Downloads - gratuito) - MySQL Community Server 8.0.29
>- https://dev.mysql.com/downloads/mysql/
##### Durante a instalação, escolher a opção "Server only".
##### Apos a instalacao, ir na pasta onde foi instalado o MySQL e copiar o path dele para adicionar nas "Variaveis de ambiente" do Windows (Botao direito no Computador, Propriedades, Avancado, Variaveis de Ambiente, Variaveis do sistema), procurar "Path", selecione-o e clique em "Editar". Adicione o path do Bin e salve.
###### Obs.: O nosso MySQL foi instalado pelo WAMP. Assim, o path considerado deve ser o setado pelo WAMP (C:\wamp64\bin\mysql\mysql5.7.14\bin)

# OBS.: todas as linhas de comando do MySQL devem terminar com ";"

#### Após acessado o MySQL pelo prompt de comando (abrimos o prompt do MySQL pela opção MySQL->MySQL Console, do WAMP, o qual precisa estar em execução), verificamos quais bases de dados possuímos, com o comando abaixo:
```SHOW DATABASES;```

###### Criando uma base de dados:
```CREATE DATABASE celke;```

###### Acessando a base que criamos:
```USE celke;```

##### Criando uma tabela na base "celke":
```CREATE TABLE users(nome VARCHAR(220), email VARCHAR(220))```

##### Mostrando as tabelas criadas no BD "celke":
```SHOW TABLES;```

##### Inserindo dados na tabela "users", em "celke":
```INSERT INTO users (nome, email) VALUES ('Gustavo', 'gustavo@gmail.com');```

##### Verificando os dados na tabela "users":
```SELECT * FROM users;```

##### Alterando a codificação da tabela "users" (o db e a tabela vão entre crase):
```ALTER TABLE `celke`.`users` CHARACTER SET = utf8, COLLATE = utf8_unicode_ci;```

## Download do MySQL Wokbench (MySQL Community Downloads - gratuito) - MySQL Workbench 8.0.29
### Ferramenta gerenciadora para manipular o BD de forma visual:
>- https://dev.mysql.com/downloads/workbench/

#### Criando a tabela "contas_pagars" pela ferramenta gráfica:
```CREATE TABLE `celke`.`contas_pagars` ( `id` INT NOT NULL AUTO_INCREMENT , `nome` VARCHAR(220) NULL , `valor` DOUBLE NULL , PRIMARY KEY (`id`));```
```ALTER TABLE `celke`.`contas_pagars` CHARACTER SET = utf8, COLLATE = utf8_unicode_ci;```
###### OBS.: a linha "ALTER TABLE" acima, no phpmyadmin, deu erro. Então usamos a linha abaixo:
```ALTER TABLE `celke`.`contas_pagars` DEFAULT CHARSET=utf8 COLLATE utf8_unicode_ci;```

#### Alterando a codificação do BD "celke" para UTF8 (abaixo funciona somente pelo prompt)
```ALTER SCHEMA `celke` DEFAULT CHARACTER SET utf8 DEFAULT COLLATE utf8_unicode_ci; ```


# INSTALANDO EXTENSÃO DO PACOTE MYSQL NO NOSSO PROJETO
## Download da extensão MySQL (seguir os passos da url abaixo)
>- https://www.npmjs.com/package/mysql
```npm install mysql --save```

## Importando o mysql no codigo e criando a var de conexao
```const mysql = require('mysql')```
```var connection = mysql.createConnection({```
```    host: 'localhost',```
```    user: 'me',```
```    password: 'secret',```
```    database: 'celke'```
```})```
###### Obs.: podemos ter algum problema caso o MySQL seja uma versão superior a 8
#### Caso de erro de "... Client does not support...", será necessário criar um novo usuario para o mysql (usar o console do mysql):
```mysql -h localhost -u root -p```
#### Ainda no console do mysql (o nome e localhost devem estar entre apostrofos). Após o BY é a senha. No nosso caso: 123456:
```CREATE USER '<nomeDoUsuario>'@'localhost IDENTIFIED WITH mysql_native_password BY '123456';'```
#### Ainda no console do mysql, damos permissao para o novo usuario acessar a base de dados. Consideras apostrofos):
```GRANT ALL PRIVILEGES ON * . * TO '<nomeDoUsuario>'@'localhost'; ```

#### Uma vez finalizadas as permissões que você quer definir para os seus novos usuários, certifique-se sempre de recarregar todos os privilegios:
```FLUSH PRIVILEGES;```



# -----------------------------------------------------
##### Obs.: para excluir uma base de dados:
>- ```DROP DATABASE <nomeBD>```

# VOLTANDO PARA O CODIGO NODE
## Rode o comando abaixo:
```npm init```

#### Quando perguntar o entry point, verifique se o arquivo.js eh o correto. No video e no nosso caso eh o "app.js".
#### Caso esteja "index.js", digite "app.js"
## EM "test command" digite: 
```echo \"Error: no test specified\" && exit 1```

#### Apos isto ele cria o arquivo "packege.json" dentro da raiz do diretorio. No nosso caso, dentro do dir aula07

