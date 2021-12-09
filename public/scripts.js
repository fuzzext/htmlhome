
function initForm(){
    getNavbar()
    getTipos()
}
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
/*const connection = mysql.createConnection({
    host:process.env._HOST,
    user:process.env._USERNAME,
    password:process.env._PASSWORD,
    database: process.env._DATABASE,
    port:process.env._PORT
})
*/

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