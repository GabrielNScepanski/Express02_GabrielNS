const espress = require('express')
const app = express()
app.listem(3000,()=>{
    console.log("servidor no ar")
})

app.get("/",(req,res)=>{
    res.send("testes com parâmetros")
})

app.get("/distancia1/:pontoA.: pontoB", (req,res)=>{
    const pontoA = req.params.pontoA
    const pontoB = req.params.pontoB
    const distancia = pontoB - pontoA
    res.send(`A distancia, usando Hífen entre ${pontoA} e ${pontoB} é ${distancia}`)
})

app.get("/distancia2/:pontoA.: pontoB", (req,res)=>{
    const pontoA = req.params.pontoA
    const pontoB = req.params.pontoB
    const distancia = pontoB - pontoA
    res.send(`A distancia, usando Hífen entre ${pontoA} e ${pontoB} é ${distancia}`)
})
