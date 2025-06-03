
function ex05() {
    
    const form = document.querySelector('#form05')
    const input = form.querySelector('input[name="in_05"]').value
    alert(input)
    form.reset()

    document.getElementById("output").innerHTML = resolve05(input)

}

function resolve05(jsonString) {
    try{
        const dados = JSON.parse(jsonString)
        const obj = new construtora(dados)

        let resultado = '';
        for (let elemento in obj) {
            resultado += `${elemento}: ${obj[elemento]}<br>`;
        }

        return resultado;
    } catch (e) {
        return "Erro ao processar JSON: " + e.message;
    }
}

function construtora(data) {
    for (let elemento in data) {
        this[elemento] = data[elemento]
    }
}
