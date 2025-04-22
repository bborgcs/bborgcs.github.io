const cores = ["#9e182b", "#684627", "#7a6c4f", "#ccd0cf", "#c48181", "#d77764"];
let corSelecionada = cores[0];

const caixas = document.querySelectorAll(".box-result");
const forms = document.querySelectorAll(".box-form");
const container = document.querySelector(".container-result");
const inputTamanho = document.getElementById("tamanho");

const selectFlex = document.getElementById("flex");
const selectJustify = document.getElementById("justify");
const selectAlign = document.getElementById("align");

function escolha(flag) {
    corSelecionada = cores[flag];

    caixas.forEach(caixa => {
        caixa.style.backgroundColor = corSelecionada;
    })

    const boxesCores = document.querySelectorAll(".organizador .box0, .box1, .box2, .box3, .box4, .box5");

    boxesCores.forEach((box, index) => {
        if (index === flag) {
            box.classList.add("borda1");
        } else {
            box.classList.remove("borda1");
        }
    });

    forms.forEach(form => {
        form.style.backgroundColor = corSelecionada;
    })
}

function formato(flag) {

    caixas.forEach(caixa => {
        caixa.style.borderRadius = (flag === "circulo") ? "50%" : "0";
    });

    forms.forEach((form, index) => {
        if ((flag === "quadrado" && index === 0) || (flag === "circulo" && index === 1)) {
            form.classList.add("borda2");
        } else {
            form.classList.remove("borda2");
        }
    });
}

function ajustaTamanho(){
    const numero = document.querySelector('input');
    const tamanho = numero.value + 'px';
    
    caixas.forEach(caixa => {
        caixa.style.width= tamanho;
        caixa.style.height= tamanho;
    })
} 

function alinhamentoFlex(op) {
    container.style.flexDirection = op.value;
}

function alinhamentoJustify(op) {
    container.style.justifyContent =op.value;
}

function alinhamentoAlign(op) {
    container.style.justifyContent =op.value;
}