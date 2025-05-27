
function ex01() {
    
    const form = document.querySelector('#form01')
    const input = form.querySelector('input[name="in_01"]').value
    alert(input)

    let numeros = input.split(" ").map(Number)
    document.getElementById("output").textContent = `Média: ${resolve01(...numeros)}`

    form.reset()
}

function resolve01() {
    let soma = 0
    let divisor=0

    for(i in arguments) { 
        soma += arguments[i] 
        divisor+=1
    }

    return soma/divisor
} //CONST SAIDA = QUERY SELECTOR#OUTPUT



