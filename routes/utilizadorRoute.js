const express = require('express')
const connection = require('../dbconnection')
const utilizadorRoute = express.Router()






utilizadorRoute.post('/', (req,res)=>{
    const sql = 'INSERT INTO utilizadores (nomeutilizador, moradarua, moradanumero, datanascimento, telemovel, email, idtipo ) VALUES(?,?,?,?,?,?)'  
    connection.query(sql, 
        [req.body.nomeutilizador,req.body.moradarua,req.body.moradanumero, req.body.datanascimento,req.body.telemovel,req.body.email, req.body.idtipo],
        (err,result)=> {
            if(err) {
            console.log(err)
            res.send('Ocorreu um erro na base de dados')
            }
            else{
                res.send('utilizador inserido com sucesso!')
            }
        })
  })

  module.exports = utilizadorRoute