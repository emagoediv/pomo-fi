function requisitar(method, dados, funcao) {

    let require = fetch(WEBSERVER, {
        method: method,
        body: dados
    }).then(response => response.json()).then(
        (returned) => {
            funcao(returned)
        }
    )
}
