
const espress = require('express')
const app = express()

app.listem(3000,()=>{
    console.log("Olá povo, server no ar")
})

//Dados de clientes
const clientes = [
    {id:1, nome: "Altamiro", tefone: "111111111", email: "Miro@gmail.com" },
    {id:2, nome: "berigenilda", tefone: "222222222", email: "Beri@gmail.com" },
    {id:3, nome: "Conegundes", tefone: "333333333", email: "Cone@gmail.com" },
    {id:4, nome: "Desíderio", tefone: "444444444", email: "Derio@gmail.com" },
    {id:5, nome: "Caltamiro", tefone: "555555555", email: "Calta@gmail.com" },


]
 //Rota
 app.get("/",(req,res) =>{
    res.send("API de clientes")
 })

 //rota 2 o total de clientes
 app.get("/Total de clientes",(req,res) =>{
    res.send("Total de clientes"+clientes.length);
 })

 //Mostrar info de clientes

 app.get("/Clientes/:id",(req,res) =>{
    const cliente = clientes.find(c => c.id === parseInt(req.params.id))
   if(!cliente) res.status(404) .send("Cliente não encontrado!!!")
   res.send(`O cliente é: ${Clientes.nome},telefone:${cliente.telefone} email ${cliente.email}`)
 })

 

