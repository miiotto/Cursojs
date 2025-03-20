function verificar() {

    /* pega ano */

    var data = new Date()
    var ano = data.getFullYear()

    /* pega do html */

    var iano = document.getElementById('txtano')
    var res = document.querySelector('div#res')
    var idade = ano - Number(iano.value)

    // Cria Imagem dinamicamente
    var img = document.createElement('img')
    img.setAttribute('id', 'foto')

    if (iano.value.length == 0 || iano.value > ano) {
        window.alert('[ERRO] Verifique os dados e tente novamente!')
    } else {
        var isex = document.getElementsByName('radsex')
       /*  res.innerHTML = `Idade Atual: ${idade}` */

       var genero = ''
       if (isex[0].checked) {
            genero = "Homem"

            if (idade >= 0 && idade < 2){
                // bebe
                img.setAttribute('src', 'img/manha.png')
            } else if (idade > 2 && idade < 11 ){
                // adolecente
                img.setAttribute('src', 'img/crianca-m.png')
            } else if (idade > 11 && idade < 24 ){
                // Jovem
                img.setAttribute('src', 'img/noite.png')
            } else if (idade > 24 && idade < 50 ){
                // Adulto
                img.setAttribute('src', 'img/tarde.png')
            } else if (idade > 50 && idade < 65 ){
                // Meia Idade
                img.setAttribute('src', 'img/meia-idade-m.png')
            } else {
                // Idoso
                img.setAttribute('src', 'img/idoso-m.png')
            }    


       } else if (isex[1].checked) {
            genero = 'Mulher'

            if (idade >= 0 && idade < 2){
                // bebe
                img.setAttribute('src', 'img/bebe-f.png')
            } else if (idade > 2 && idade < 11 ){
                // adolecente
                img.setAttribute('src', 'img/crianca-f.png')
            } else if (idade > 11 && idade < 24 ){
                // Jovem
                img.setAttribute('src', 'img/jovem-f-f.png')
            } else if (idade > 24 && idade < 50 ){
                // Adulto
                img.setAttribute('src', 'img/tarde.png')
            } else if (idade > 50 && idade < 65 ){
                // Meia Idade
                img.setAttribute('src', 'img/meia-idade-f.png')
            } else {
                // Idoso
                img.setAttribute('src', 'img/idoso-f.png')
            }    
       }

       res.innerHTML = `Detectamos ${genero} com ${idade} anos`
       img.setAttribute('width', '400px')
       
       res.appendChild(img)

    }

    



}