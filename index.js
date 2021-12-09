const express = require('express')
const path = require('path')
const mysql = require('mysql2')
require('dotenv').config({ path: 'private/.env'})
const connection = require('./dbconnection')
const app = express()



app.use(express.static('./public'))

app.use(express.static('./public'))

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, './public/index.html'))

})

app.get('/navbar',(req,res)=>{
    res.sendFile(path.join(__dirname, './public/navbar.html'))
})


app.get('/tipos', (req,res) => {
  
  connection.query('SELECT * FROM tipos', (err,result)=>{
    if(err)
    res.json('Ocurreu um problema na base de dados...')
    else {
      res.json(result)
    }
  })
})

app.post('/inserirutilizador', (req,res)=>{
  console.log(req.body)
  res.send('Cheguei bem e de saúde!')
})
  

const port = 3005
 
app.listen(port, () => {
    console.log(`Listenning  on port ${port}`)
})