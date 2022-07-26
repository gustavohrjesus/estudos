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


> Obs.: instalamos o nodemon dentro do diretorio /cursosCelke/node