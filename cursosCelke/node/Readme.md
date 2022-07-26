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
###### Obs.: O nosso MySQL foi instalado pelo WAMP. Assim, o path considerado deve ser o setado pelo WAMP (C:\wamp64\bin\mysql\mysql5.7.14\bin). Então é necessário primeiramente executar o arquivo 'mysqld' (serviço) e, somente depois, rodar a linha de acesso do mysql, dentro já do diretório onde o mysql foi instalado (no nosso caso: C:\wamp64\bin\mysql\mysql5.7.14\bin)
`mysql -u root -p`
**###### Referência:** 
> http://blog.tiagopassos.com/2010/10/12/acessar-o-mysql-pelo-prompt-do-windows/
> https://stackoverflow.com/questions/17426052/error-2003-hy000-cant-connect-to-mysql-server-on-localhost-10061

### OBS.: todas as linhas de comando do MySQL devem terminar com ";"

#### Após acessado o MySQL pelo prompt de comando (abrimos o prompt do MySQL pela opção MySQL->MySQL Console, do WAMP, o qual precisa estar em execução), verificamos quais bases de dados possuímos, com o comando abaixo:
```SHOW DATABASES;```

###### Criando uma base de dados:
```CREATE DATABASE celke;```

###### Acessando a base que criamos:
```USE 'celke';```

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

# AULA 08 - Como cadastrar com Node.js no banco de dados
## **DESSA AULA EM DIANTE VAMOS UTILIZAR O aula07 COMO PACOTE PARA ESTUDOS**

### Criando a coluna id na table users:
`ALTER TABLE `users` ADD `id` INT NOT NULL AUTO_INCREMENT FIRST, ADD PRIMARY KEY (`id`);`

### INSERÇÃO NO BD MySQL
```connection.query("INSERT INTO users(nome, email) VALUES ('Kelly', 'kelly@gmail.com')", function(err, result){
    if(!err){
        console.log('Usuario cadastrado com sucesso!')
    } else{
        console.log('Erro ao cadastrar o usuario!')
    }
})
```
***

# AULA 09 - Como editar registro no banco de dados MySQL com Node
## **UTILIZAR O aula07 COMO PACOTE PARA ESTUDOS**

### UPDATE NO BD MySQL
```connection.query("UPDATE users SET nome = 'Gustavo Jesus' WHERE id = 1", function(err, result){
    if(!err){
        console.log('Usuario ATUALIZADO com sucesso!')
    } else{
        console.log('Erro ao ATUALIZAR o usuario!')
    }
}) 
```
***

# AULA 10 - COMO APAGAR REGISTRO NO BANCO DE DADOS MySQL COM NODE
## **UTILIZAR O aula07 COMO PACOTE PARA ESTUDOS**

### UPDATE NO BD MySQL
```connection.query("DELETE FROM users WHERE id = 3", function(err, result){
    if(!err){
        console.log('Usuario DELETADO com sucesso!');
    } else {
        console.log('Erro ao DELETAR o usuario!');
    }
})
```
***

# AULA 11 - COMO INSTALAR E USAR O SEQUELIZE NO NODE.JS

# SEQUELIZE
## Sequelize is an easy-to-use and promise-based Node.js ORM tool for Postgres, MySQL, MariaDB, SQLite, DB2, Microsoft SQL Server, and Snowflake. It features solid transaction support, relations, eager and lazy loading, read replication and more.
[NPM - Explicação do Sequelize](https://www.npmjs.com/package/sequelize)

* Instalação do Sequelize:
    * [Sequelize - Instalacao](https://sequelize.org/docs/v6/getting-started/)
        * `npm install --save sequelize`
* Indicar qual bando de dados sera utilizado (No nosso caso, o MySQL):
    * `npm install --save mysql2`

### Configurando a conexão do Sequelize com o BD
`const Sequelize = require('sequelize');`
```
const sequelize = new Sequelize('celke', 'user', 'password', {
  host: 'localhost',
  dialect: 'mysql'
  /* one of 'mysql' | 'mariadb' | 'postgres' | 'mssql' */
});
```

#### Testando a conexão
```
sequelize.authenticate().then(function(){
    console.log('Conexao realizada com sucesso!')
}).catch(function(err){
    console.log("Erro ao realizar a conexao com o BD: " + err);
})
```

### CRIAR UMA TABELA COM SEQUELIZE
* Obs.: antes iremos excluir as tabelas que já temos no nosso BD. Dentro do terminal do MySQL, deletamos a table com o comando abaixo:
    * `DROP TABLE <nomeDaTabela>;`

* Criando a tabela com Sequelize:
    * __Criando uma tabela na BD usando o Sequelize__
    ```
    const Pagtos = sequelize.define('pagamentos', {
        // atributos - nome das colunas
        nome:{
            type: Sequelize.STRING,
        },
        valor: {
            type: Sequelize.DOUBLE
        }
    })
    Pagtos.sync( {force: true} ); //Sync: comando para criar a tabela. force: true forca a criar a table
    ```
    **Apos usado o comando sync e ter a tabela criada, comentar para nao ficar recriando toda vez que rodar o Node**
    __O Sequelize irá criar automaticament os campos: id (inteiro nao nulo auto-incremento), createdAt (como datatime not null) e updatedAt(como datatime not null). ENGINE= InnoDB__


* Inserir registro no banco de dados com Sequelize
    * [Model Querying - Basics](https://sequelize.org/docs/v6/core-concepts/model-querying-basics/)
    ```
    Pagtos.create({
        nome: "Energia",
        valor: 220
    })
    ```
***

# AULA 12 - COMO INSTALAR O HANDLEBARS NO NODE E CRIAR O LAYOUT PADRÃO PARA O PROJETO

# HANDLEBARS
## Handlebars is a simple templating language.
[HANDLEBARS - Guia](https://handlebarsjs.com/guide/)

* Instalação do Handlebars
    * [Handlebars - Instalacao](https://handlebarsjs.com/installation/)
        * `npm install --save express-handlebars`
        * #### Adicionamos o 'express-' para informar que vamos usar o handlebars exclusivo para express

## Chamando o handlebars
* A linha abaixo, no video, nao estava funcionando somente: handlebars({defaultLayout: 'main'}). Então foi adicionado o ".engine". 
    * `app.engine('handlebars', handlebars({ defaultLayout: 'main' })) // essa era a linha no video (sem o .engine) e nao funcionou`
* Desta forma abaixo funcionou (era handlebars e ficou handlebars.engine para funcionar)
    * `app.engine('handlebars', handlebars.engine({ defaultLayout: 'main' })) //chama o views/layouts/main.handlebars - funciona`

### CRIANDO ROTAS PARA AS PÁGINAS add-pagamento e pagamento
* Rotas
    * Para listar pagamentos
    ```
    app.get('/pagamento', function(req, res){
        // res.send("Pagina para LISTAR pagamento")~~ __**// para testar se aparece no navegador. URL: http://localhost:8080/pagamento**__
        res.render('pagamento') // renderiza a pagina views/pagamento.handlesbars
    })
    ```

    * Para cadastrar pagamentos (formulario)
    ```
    app.get('/add-pagamento', function(req, res){
        // res.send("Formulario para CADASTRAR pagamento")~~ __**// para testar se aparece no navegador. URL: http://localhost:8080/add-pagamento**__
        res.render('add-pagamento') // renderiza a pagina views/pagamento.handlebars
    })
***




# ___________________________________________________________
# OBSERVACOES:
>- Instalamos o nodemon dentro do diretorio /cursosCelke/node

## Iniciar o MySQL pelo terminal:
* C:\wamp64\bin\mysql\mysql5.7.14\bin
    * Executar o mysqld
    * `mysql -u root -p`
        * Irá pedir a senha do MySQL

## MUDANDO PARA O BANCO DE DADOS QUE SERA USADO
* `USE 'celke';`
***