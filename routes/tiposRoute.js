const express = require('express')
const connection = require('../dbconnection')
const tiposRoute = express.Router()




tiposRoute.get('/', (req,res) => {
    connection.query('SELECT * FROM tipos', (err,result)=>{
      if(err)
      res.json('Ocurreu um problema na base de dados...')
      else {
        res.json(result)
      }
    })
  })


  module.exports = tiposRoute