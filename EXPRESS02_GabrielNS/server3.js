const espress = require('express')
const app = express()

app.listen(3000,()=>{
    console.log("servidor em execução")    
})

//rotas com parâmetros
app.get('/',(req,res)=> {
    res.send("Olá"+req.params.nome)
})

//Rota com 1 parâmetro
app.get('/ola/:nome', (req,res)=>{
    console.log(req,params,nome)
})

//rota com 2 parâmetros
app.get('/ola/:nome/:empresa', (req,res)=>{
    console.log(req,params,nome+ 'da empresa'+ req.params.empresa);
})

//rota com soma de 2 parâmetros

app.get('/soma/:a/:b', (re,res)=>{
    res.send('O resultado da soma de ' +req.params.a+ ' é ' +req . params.b+ ' é :'+(parseInt(req.params.a))+(parseInt(req.params.b)))
})
