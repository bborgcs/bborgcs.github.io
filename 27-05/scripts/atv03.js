
function ex03() {
    
    const form = document.querySelector('#form03')
    const input = form.querySelector('input[name="in_03"]').value
    alert(input)

    let lista = input.split(" ")
    document.getElementById("output").textContent = `${resolve03(lista)}`

    form.reset()
}

function resolve03(numeros) {
    let resultado = numeros.map(function(numero){
        if(isEven(Number(numero))==true){
            return 'PAR'
        }
        else{
            return 'ÍMPAR'
        }}
        )
    return resultado
}

function isEven(val) {
    if(val%2==0){
        return true
    }
    else {
        return false
    }
}


