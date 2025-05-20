const data_reports = []

function addReport(){
    const form = document.querySelector('#formReport')
    const input_data = form.querySelector('input[name="data"]').value
    const input_assunto = form.querySelector('select[name="assunto"]').value
    const input_agente = form.querySelector('select[name="agente"]').value

    const relatorio = {
        id: data_reports.length+1,
        data: input_data,
        assunto: input_assunto,
        agente: input_agente
    }        

    data_reports.push(relatorio);

    addTableReport(relatorio);
    form.reset();
}

function addTableReport(relatorio){

    const table = document.querySelector('#table_report')

    const line = document.createElement('tr')

    const col_id = document.createElement('td') 
    col_id.textContent = relatorio.id

    const col_data = document.createElement('td')    
    col_data.textContent = relatorio.data

    const col_assunto = document.createElement('td')    
    col_assunto.textContent = relatorio.assunto

    const col_agente = document.createElement('td')    
    col_agente.textContent = relatorio.agente

    line.appendChild(col_id)
    line.appendChild(col_data)
    line.appendChild(col_assunto)
    line.appendChild(col_agente)


    table.appendChild(line)
}
