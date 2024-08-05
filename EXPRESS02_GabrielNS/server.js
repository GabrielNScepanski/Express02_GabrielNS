//Não foi possivel usar o NPM

const express=require('express');
const server =express();

server.listen(3000);

//midleware
// server.use((req,res)=>{
//     console.log('teste')
// })

server.use((req,res,next)=>{
    console.log('teste');
    next();
})

server.use((req,res,next)=>{
    req.requestTime=Date.now();
    next()
})

server.get('/',(req,res,)=>{
    console.log(req,requestTime);
    res.send('<h1> Teste de conexão</h1>')
})