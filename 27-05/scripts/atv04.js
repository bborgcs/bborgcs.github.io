
function ex04() {
    
    const form = document.querySelector('#form04')
    const input = form.querySelector('input[name="in_04"]').value
    alert(input)
    form.reset()

    let lista = input.split(" ")
    document.getElementById("output").textContent = `${resolve04(lista)}`
}

function resolve04(numeros) {
    let resultado = numeros.filter(function(n) {
        return filter_perfeito(Number(n));
    });
    return resultado;
}

const filter_perfeito = (val) => {
    let soma=0
    for(i=0;i<val;i++){
        let resul=val%i
        if(resul==0){
            soma+=i
        }
    }

    return soma === val
}

