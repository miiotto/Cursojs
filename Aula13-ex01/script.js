function passos() {

    let res = window.document.getElementById('res')
    let inicio = window.document.getElementById('iinicio')
    let fim = window.document.getElementById('ifim')
    let passo = window.document.getElementById('ipasso')

    if (inicio.value.length == 0 || fim.value.length == 0 || passo.value.length == 0 ) {
        window.alert('[ERRO] Faltam dados!')
    } else {

        res.innerHTML = 'Contando: '
        let i = Number(inicio.value)
        let f = Number(fim.value)
        let p = Number(passo.value)

        if ( i < f) {
            for(let c = i; c <= f; c += p) {
                res.innerHTML += `${c} \u{1F449} `
            }
        } else {
            for(let c = i; c >= f; c -= p) {
                res.innerHTML += ` ${c} \u{1F449} `
            }
        }
        res.innerHTML += ` \u{1F3C1} `
    }
    

}

