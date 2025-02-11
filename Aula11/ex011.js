/* Aula 11 

var vel = 60.5

console.log(`Sua velocidade é ${vel}km/h`)

if (vel > 60 ){
    console.log('Voce ultrapassou a velocidade. MULTADO!')
}

var idade = 22


/* Aula 12 

if (idade < 16){
    console.log('Não Vota')
} else {

    if (idade >= 16 && idade < 18){ /* ou (idade < 18) ou (idade < 18 || idade > 65)
        console.log('Voto Opcional')
    } else {
        console.log('Voto Obrigatorio')
    }
}

Aula 12 ex 001

var agora = new Date()
var hora = agora.getHours()

console.log(`Agora são exatamente ${hora} horas.`)

if (hora < 12 ) {
    console.log('Bom Dia!')
} else if (hora <= 18){
    console.log('Boa Tarde!')
} else {
    console.log('Boa Noite')
}

*/

var agora = new Date()
var diaSem = agora.getDay() 

console.log(diaSem)

switch (diaSem) {
    case 0:
        console.log('Domingo')
        break
    case 1:
        console.log('Segunda')
        break
    case 2:
        console.log('Terça')
        break
    case 3:
        console.log('Quarta')
        break
    case 4:
        console.log('Quinta')
        break
    case 5:
        console.log('Sexta')
        break
    case 6:
        console.log('Sábado')
        break
    default:
        console.log('[ERRO} Dia Invalido')
        break
} 