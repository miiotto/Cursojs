function gerartabuada() {

    let tab = window.document.getElementById('seltab')
    let num = window.document.getElementById('txtn')
 
    if (num.value.length == 0 ) {
        window.alert('[ERRO] Digite um Número!')

    } else {

        let i = 1
        let n = Number(num.value)
        
        // limpa select

        tab.innerHTML = ''


        while ( i <= 10) {
            let item = document.createElement('option')
            item.text = `${n} x ${i} = ${n * i}` 
            tab.appendChild(item)
            i++
        }
       
    }
    

}

