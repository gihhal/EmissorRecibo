function gerarRecibo (){
    document.getElementById("recibo_emitente").innerHTML = document.getElementById("emitente").value;
    document.getElementById("recibo_nome").innerHTML = document.getElementById("nome").value;
    document.getElementById("recibo_valor").innerHTML = document.getElementById("valor").value;
    document.getElementById("recibo_data").innerHTML = dataAtual();
    window.print();
}

function dataAtual(){
    let data = new Date ();
    return data.getDate() + "/" + (data.getMonth()+1) +"/" + data.getFullYear();
}
