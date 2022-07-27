# AULA 14 - COMO LISTAR REGISTROS DO BANCO DE DADOS COM NODE.JS
### __**UTILIZAR PROJETO aula13 PARA ALTERACAO/INSERCAO DOS CODIGOS **__

## INSTALANDO A EXTENSÃO MOMENT PARA FORMATAR HORA E DATA
`npm install --save moment`

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

    * AULA 13 - ROTA PARA SALVAR NO BD
    ```
    app.post('/add-pagamento', function(req, res){ // req.body.nome pega o valor do input 'nome ' do form em cad-pagamento.handlebars
        // res.send("Nome: " + req.body.nome + "<br>Valor: " + req.body.valor + "<br>"); // linha para teste
        pagamento.create({
            nome: req.body.nome,
            valor: req.body.valor
        }).then(function(){
            // res.send("Pagamento cadastrado com sucesso!") // se aparecer, cadastrou corretamente - Teste: OK
            res.redirect('/pagamento') // redireciona para pagamento apos inserir info no bd - OK
        }).catch(function(erro){
            res.send("Erro: Pagamento nao foi cadastrado com sucesso!" + erro)
        })
    })
    ```

    * AULA 14 - LISTAR DADOS DO BD - (bloco da AULA 12 - alterado para o abaixo)
    ```
    app.get('/pagamento', function(req, res){
        // res.send("Pagina para LISTAR pagamento") // para testar se aparece no navegador. URL: http://localhost:8080/pagamento
        Pagamento.findAll( {order: [['id', 'DESC']]} ).then(function(pagamentos){ // pega todos os dados do BD - Comando do Sequelize: findAll
            res.render('pagamento', { // order: id DESC ordena decrescente
                // pagamentos: pagamentos // SEGUINDO O VIDEO, essa linha nao funcionou. Foi substituida pela linha abaixo
                pagtos: pagamentos.map(pagamento => pagamento.toJSON())
            }) // renderiza a pagina views/pagamento.handlesbars. pagtos eh usado em pagamento.handlebars
        })
    })
    ```

> __**QUANDO VAMOS UPAR NOSSO PROJETO, NÃO PRECISAMOS MANDA O NODE-MODULES. PRECISAMOS APENAS DAR UM UPDATE NO PROJETO JÁ NO LOCAL NOVO QUE O RESTO SERÁ ATUALIZADO**__
> Obs.: instalamos o nodemon dentro do diretorio /cursosCelke/node