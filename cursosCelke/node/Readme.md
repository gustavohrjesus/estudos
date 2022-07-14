# ROTEIRO DAS AULAS

# AULA 01 - O QUE É NODE E COMO INSTALAR O NODE.JS NO WINDOWS
## Última versão do Node disponível para Windows 7
[Node-Última versão para Win7 - v13.06](https://nodejs.org/download/release/v13.6.0/)

### Verificando a versão do Node instalada no computador
```node -v```
***

# AULA 02 - Como usar o Node.js na prática
> Rodando o "Ola mundo" pela primeira vez
```node index.js```
***

# AULA 03 - Criar o servidor http na maquina com Node e imprimir o texto no navegador usando o Node
***

# AULA 04 - Como instalar o Express no Node.js e criar rotas no Node.js
> Instalação do express
```npm install express --save```
##### Umar pasta "node_modules" é criada após a instalação.
##### --save é para salvar somente no pacote que estamos. No caso, na pasta aula04
***

# AULA 05 - Como instalar o Nodemon no Node.js para o servidor ser recarregado automaticamente
> Instalação do nodemon
```npm install -g nodemon```
>- -g refere-se a "global"
#### O nodemon não restarta qdo a alteracao eh feita em um arquivo HTML.
***

# AULA 06 - Como carregar arquivo HTML no Node.js
> Para carregar uma pagina HTML
```res.sendFile(__dirname + "/src/index.html")```
***

# AULA 07 - Como instalar o MySQL. Como instalar e usar o Workbench. Como realizar conexao Node x MySQL

## Download do MySQL (MySQL Community Downloads - gratuito) - MySQL Community Server 8.0.29
[MySQL Community Server](https://dev.mysql.com/downloads/mysql/)
##### Durante a instalação, escolher a opção "Server only".
##### Apos a instalacao, ir na pasta onde foi instalado o MySQL e copiar o path dele para adicionar nas "Variaveis de ambiente" do Windows (Botao direito no Computador, Propriedades, Avancado, Variaveis de Ambiente, Variaveis do sistema), procurar "Path", selecione-o e clique em "Editar". Adicione o path do Bin e salve.
###### Obs.: O nosso MySQL foi instalado pelo WAMP. Assim, o path considerado deve ser o setado pelo WAMP (C:\wamp64\bin\mysql\mysql5.7.14\bin)

### OBS.: todas as linhas de comando do MySQL devem terminar com ";"

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
[MySQL Workbench](https://dev.mysql.com/downloads/workbench/)

#### Criando a tabela "contas_pagars" pela ferramenta gráfica:
```CREATE TABLE `celke`.`contas_pagars` ( `id` INT NOT NULL AUTO_INCREMENT , `nome` VARCHAR(220) NULL , `valor` DOUBLE NULL , PRIMARY KEY (`id`));```
```ALTER TABLE `celke`.`contas_pagars` CHARACTER SET = utf8, COLLATE = utf8_unicode_ci;```
###### OBS.: a linha "ALTER TABLE" acima, no phpmyadmin, deu erro. Então usamos a linha abaixo:
```ALTER TABLE `celke`.`contas_pagars` DEFAULT CHARSET=utf8 COLLATE utf8_unicode_ci;```

#### Alterando a codificação do BD "celke" para UTF8 (abaixo funciona somente pelo prompt)
```ALTER SCHEMA `celke` DEFAULT CHARACTER SET utf8 DEFAULT COLLATE utf8_unicode_ci; ```

## INSTALANDO EXTENSÃO DO PACOTE MYSQL NO NOSSO PROJETO
### Download da extensão MySQL (seguir os passos da url abaixo)
[NPM - Extensão para MySQL](https://www.npmjs.com/package/mysql)
```npm install mysql --save```

###### Obs.: podemos ter algum problema caso o MySQL seja uma versão superior a 8
#### Caso de erro de "... Client does not support...", será necessário criar um novo usuario para o mysql (usar o console do mysql):
```mysql -h localhost -u root -p```
#### Ainda no console do mysql (o nome e localhost devem estar entre apostrofos). Após o BY é a senha. No nosso caso: 123456:
```CREATE USER '<nomeDoUsuario>'@'localhost IDENTIFIED WITH mysql_native_password BY '123456';'```
#### Ainda no console do mysql, damos permissao para o novo usuario acessar a base de dados. Consideras apostrofos):
```GRANT ALL PRIVILEGES ON * . * TO '<nomeDoUsuario>'@'localhost'; ```

#### Uma vez finalizadas as permissões que você quer definir para os seus novos usuários, certifique-se sempre de recarregar todos os privilegios:
```FLUSH PRIVILEGES;```
***

# ___________________________________________________________
# OBSERVACOES:
>- Instalamos o nodemon dentro do diretorio /cursosCelke/node