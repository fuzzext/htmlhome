
function initForm(){
    getNavbar()
    getTipos()
}
//-----------------------------------------//
function getTipos(){
    const tipos = document.getElementById('tipo')
    fetch('http://localhost:3005/tipos')
    .then(res => res.json())
    .then(data => {
        tipos.innerHTML+=
        `<option selected>Escolha um tipo de utilizador...</option>`
        for(i in data){
            let op =
            `<option value="${data[i].idtipo}">${data[i].designacao}</option>`
            tipos.innerHTML += op
        }
    })
    .catch((err)=>{
        alert('Erro no pedido...')
    })
}
//-----------------------------------------//
function adicionar(){
    let nome = document.getElementById('nome').value
    console.log(nome)
    let morada_rua = document.getElementById('morada_rua').value
    console.log(morada_rua)
    let morada_num = document.getElementById('morada_num').value
    console.log(morada_num)
    let dnasc = document.getElementById('dnasc').value
    console.log(dnasc)
    let telem = document.getElementById('telem').value
    console.log(telem)
    let email = document.getElementById('email').value
    console.log(email)
    let tipo = document.getElementById('tipo').value
    console.log(tipo)

    //criar um objeto com os valores:
    let objeto = {
        //nome na db : nome da variavel
        nomeutilizador: nome,
        moradarua: morada_rua,
        moradanumero: morada_num,
        datanascimento: dnasc,
        telemovel: telem,
        email: email,
        idtipo: tipo

    }
    //transformar o objeto em JSON
    let objetoJSON = JSON.stringify(objeto)
    //preparar as opções do pedido
    const options = {
        method: 'POST',
        headers: {
            'Content-type': 'application/json'
        },
        body: objetoJSON
    }
    //fazer fetch com as opções acima definidas
    fetch('http://localhost:3005/utilizador', options)
    .then(res => res.text())
    .then(text => {
        alert(text)
    })
    .catch((err)=>{
        alert('Ocorreu um erro no pedido...')
    })
}
//-----------------------------------------//
function getNavbar(){
    const nbar = document.getElementById('nbar')
    fetch('http://localhost:3005/navbar.html')
    .then(res => res.text())
    .then((html) => {
        nbar.innerHTML += html
    })
    .catch( (err) => {
        alert('Ocorreu um problema...')
    })
}


//-----------------------------------------//




/*const connection = mysql.createConnection({
    host:process.env._HOST,
    user:process.env._USERNAME,
    password:process.env._PASSWORD,
    database: process.env._DATABASE,
    port:process.env._PORT
})
*/
/*
function getData(){
fetch('http://localhost:3002/bd')
.then(res => res.json())
.then(data => processData(data))
.catch(function(err){
    alert('Ocorreu um problema...')
})
    }

function processData(data){
    const linhaCidade = document.getElementById('cidades')
    linhaCidade.innerHTML=''
    for(let i=0; i<100;i++){
        let nome = data[i].Name
        let distrito = data[i].District
        let pop= data[i].Population
        let ID = data[i].ID
        linhaCidade.innerHTML += ` <tr>
                                    <td>${nome}</td>
                                    <td>${distrito}</td>
                                    <td>${pop}</td>
                                    <td>
                                    <button
                                        onclick="showID(${ID});"
                                        type="button"
                                        class="btn btn-success"
                                        style="width:100px;">Editar
                                        </button>
                                    <button
                                        type="button"
                                        class="btn btn-danger"
                                        style="width:100px;">Remover
                                     
                                    </tr>`  
    }
    console.log(data)
}
function showID(ID){
    console.log(ID)
}
*/