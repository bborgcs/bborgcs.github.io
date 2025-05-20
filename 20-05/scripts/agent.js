const data_agents = []

function addAgents(){
    const form = document.querySelector('#formAgent')
    const input_nome = form.querySelector('input[name="nome"]').value
    const input_regional = form.querySelector('select[name="regional"]').value

    const agente = {
        id: data_agents.length+1,
        nome: input_nome,
        regional: input_regional
    }        

    data_agents.push(agente);

    addTableAgente(agente)
    addSelectAgente(agente)
    form.reset();
}

function addTableAgente(agente){

    const table = document.querySelector('#table_agent')

    const line = document.createElement('tr')

    const col_id = document.createElement('td') 
    col_id.textContent = agente.id

    const col_nome = document.createElement('td')    
    col_nome.textContent = agente.nome

    const col_regional = document.createElement('td')    
    col_regional.textContent = agente.regional

    line.appendChild(col_id)
    line.appendChild(col_nome)
    line.appendChild(col_regional)

    table.appendChild(line)
}

function addSelectAgente(agente){
    const select = document.querySelector('#select_agent')
    const op = document.createElement("option")

    op.textContent = agente.nome
    op.value = agente.nome

    select.appendChild(op)
}