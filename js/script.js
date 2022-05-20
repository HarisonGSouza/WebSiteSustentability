

function openPageBtnAjudenos() {
    window.location.href = "page7.html";
}

function submitForm() {
    
    var name = document.getElementById("inputName").value;
    var sobrenome = document.getElementById("inputSobrenome").value;
    var mensagem = document.getElementById("inputMensagem").value;
    
    var link = "mailto:FakeEmail@gmail.com"
            + "?cc=FakeEmail@gmail.com"
            + "&subject=" + name + sobrenome
            + "&body=" + mensagem;
    
    window.alert("Dados confirmados com sucesso!\nClique em enviar email.")

    document.getElementById("labelEnviaEmail").innerHTML = "Enviar Email".link(link);
    
}