# AULA 13 - COMO CRIAR O FORMULÁRIO COM NODE E SALVAR NO BANCO DE DADOS
**ATENTAR PARA A ROTA DO CADASTRO DE PAGAMENTO - anteriormente era add-pagamento e, agora, cad-pagamento**

# __**QUANDO VAMOS UPAR NOSSO PROJETO, NÃO PRECISAMOS MANDA O NODE-MODULES. PRECISAMOS APENAS DAR UM UPDATE NO PROJETO JÁ NO LOCAL NOVO QUE O RESTO SERÁ ATUALIZADO**__

## ADICIONANDO A EXTENSAO BODY-PARSER PARA PEGAR AS INFORMACOES DO FORM E ENVIAR PARA O BD
[Body-parser](https://www.npmjs.com/package/body-parser)
* Instalacao do body-parser - --save é utilizado para inserir no package.json todas as dependencias utilizadas. No nosso caso, mais esta do body-parser
    * `npm install body-parser`

* Importando o body-parser para o arquivo
    * `const bodyParser = require("body-parser")`

* Configurando o body-parser no arquivo
    * // parse application/x-www-form-unlencoded
        * `app.use(bodyParser.urlencoded({ extended: false }))`
    * // parse application/json
        * `app.use(bodyParser.json())`


### CRIANDO ROTAS PARA AS PÁGINAS add-pagamento e pagamento
* Rotas
    * AULA 12 - Para listar pagamentos
    ```
    app.get('/pagamento', function(req, res){
        // res.send("Pagina para LISTAR pagamento")~~ __**// para testar se aparece no navegador. URL: http://localhost:8080/pagamento**__
        res.render('pagamento') // renderiza a pagina views/pagamento.handlesbars
    })
    ```

    * AULA 12 - Para cadastrar pagamentos (formulario) - Alteramos o arquivo add-pagamento para cad-pagamento. add-pagamento será o arquivo para salvar as infos. Assim, a rota abaixo é mudada para /cad-pagamento
    ```
    app.get('/cad-pagamento', function(req, res){
        // res.send("Formulario para CADASTRAR pagamento")~~ __**// para testar se aparece no navegador. URL: http://localhost:8080/cad-pagamento**__
        res.render('cad-pagamento') // renderiza a pagina views/pagamento.handlebars
    })
    ```

    * AULA 13 - Para pegar as infos do form e enviar para o DB
    ```
    ```


> Obs.: instalamos o nodemon dentro do diretorio /cursosCelke/node