//Não foi possivel usar o NPM

const express = require ('express')
const morgan = require ('morgan')

const server2 = express()
server2.listen(3000)


//criando um midlleware para gerar logs
//server2.use(morgan('tiny'))
server2.use(morgan('Método = :method status= :status url= :url'))

server.get('/',(req,res,)=>{
    console.log(req,requestTime);
    res.send('<h1> Teste de conexão do server2</h1>')
})
