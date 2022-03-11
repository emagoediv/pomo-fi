import { requisitar } from "./requireLogin.js"

const WEBSERVER = 'http://localhost/loginPomo-fi'

const FORM = document.getElementById('formLogin')

console.log(FORM)


FORM.addEventListener('submit', (e) => {
    e.preventDefault()
    let dados = new FormData (FORM)
    let media = requisitar("POST", dados, readResponse)
})




function readResponse(valuesOfResponse) {
    console.log(valuesOfResponse.login + " " + valuesOfResponse.pass)
}