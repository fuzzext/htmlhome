const express = require('express')
const app = express()
 
app.use(express.static('./public'))

app.use(express.static('./public'))
app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, './public/index.html'))

})

app.get('/:nome', function (req, res) {
    res.send('Hello '+ req.params.nome)
  })
const port = 3000
 
app.listen(port, () => {
    console.log(`Listenning  on port ${port}`)
})