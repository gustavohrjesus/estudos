const express = require("express");
const handlebars = require("express-handlebars");
const bodyParser = require("body-parser")

const app = express();

const moment = require("moment")
const Pagamento = require('./models/Pagamento') // importa o Pagamento.js

// AULA 12 -  a linha abaixo, no video, nao estava funcionando somente: handlebars({defaultLayout: 'main'})
// então foi adicionado o ".engine". Desta forma, funcionou
app.engine('handlebars', handlebars.engine({ 
    defaultLayout: 'main', 
    helpers: {
        formatDate: (date) =>{
            return moment(date).format('DD/MM/YYYY') // usado para formatar data e hora no pagamento.handlebars
        }
    }
})) //chama o views/layouts/main.handlebars - funciona
// app.engine('handlebars', handlebars.engine({ defaultLayout: 'main' })) // essa era a linha no video (sem o .engine) e nao funcionou
app.set('view engine', 'handlebars')

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

// AULA 12 - Rotas
app.get('/pagamento', function(req, res){
    // res.send("Pagina para LISTAR pagamento") // para testar se aparece no navegador. URL: http://localhost:8080/pagamento
    Pagamento.findAll().then(function(pagamentos){ // pega todos os dados do BD - Comando do Sequelize: findAll
        res.render('pagamento', { 
            // pagamentos: pagamentos // SEGUINDO O VIDEO, essa linha nao funcionou. Foi substituida pela linha abaixo
            pagtos: pagamentos.map(pagamento => pagamento.toJSON())
        }) // renderiza a pagina views/pagamento.handlesbars. pagtos eh usado em pagamento.handlebars
    })
})

// AULA 12 - add-pagamento alterado para /cad-pagamento
app.get('/cad-pagamento', function(req, res){
    // res.send("Formulario para CADASTRAR pagamento") // para testar se aparece no navegador. URL: http://localhost:8080/add-pagamento
    res.render('cad-pagamento') // renderiza a pagina views/pagamento.handlebars
})

// AULA 13 - metodo POST - para envio das infos do form cad-pagamento.handlebars
// usada extensao body-parser (https://www.npmjs.com/package/body-parser)
app.post('/add-pagamento', function(req, res){ // req.body.nome pega o valor do input 'nome ' do form em cad-pagamento.handlebars
    // res.send("Nome: " + req.body.nome + "<br>Valor: " + req.body.valor + "<br>"); // linha para teste
    Pagamento.create({
        nome: req.body.nome,
        valor: req.body.valor
    }).then(function(){
        // res.send("Pagamento cadastrado com sucesso!") // se aparecer, cadastrou corretamente - Teste: OK
        res.redirect('/pagamento') // redireciona para pagamento apos inserir info no bd - OK
    }).catch(function(erro){
        res.send("Erro: Pagamento nao foi cadastrado com sucesso!" + erro)
    })
})

app.listen(8080);