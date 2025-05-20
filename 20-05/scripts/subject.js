const data_subjects = []

function addAssunto(){
    const form = document.querySelector('#formSubject')
    const input_descricao = form.querySelector('input[name="descricao"]').value

    const assunto = {
        id: data_subjects.length+1,
        descricao: input_descricao
    }        

    data_subjects.push(assunto);

    addTableAssunto(assunto)
    addSelectAssunto(assunto)
    form.reset();
}

function addTableAssunto(assunto){

    const table = document.querySelector('#table_subject')

    const line = document.createElement('tr')

    const col_id = document.createElement('td') 
    col_id.textContent = assunto.id

    const col_descricao = document.createElement('td')    
    col_descricao.textContent = assunto.descricao

    line.appendChild(col_id)
    line.appendChild(col_descricao)

    table.appendChild(line)
}

function addSelectAssunto(assunto){
    const select = document.querySelector('#select_subject')
    const op = document.createElement("option")

    op.textContent = assunto.descricao
    op.value = assunto.descricao

    select.appendChild(op)
}