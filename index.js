const express = require('express')
const app = express()
 
app.use(express.static('./public'))

app.use(express.static('./public'))

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, './public/index.html'))

})

app.get('/navbar',(req,res)=>{
    res.sendFile(path.join(__dirname, './public/navbar.html'))
})




  
const port = 3005
 
app.listen(port, () => {
    console.log(`Listenning  on port ${port}`)
})