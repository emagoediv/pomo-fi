
const WEBSERVER = "http://localhost/loginPomo-fi/"

const FORM = document.getElementById('formLogin')

const BTNEXIT = document.getElementById('btnExit')


FORM.addEventListener('submit', (e) => {
    e.preventDefault()
    let dados = new FormData (FORM)
    let media = requisitar("POST", dados, readResponse)
})




function readResponse(valuesOfResponse) {
    if (valuesOfResponse.status == "logSuccess") {
        localStorage.setItem("statusLog", "logged")
        location.href = "index.html"  
    }
}


BTNEXIT.addEventListener("click", () => {
    localStorage.clear("statusLog")
    window.location.href = "login.html"
})