document.getElementById("contactform").addEventListener('Submit', function(event) {
    event.getElementById(); //evita o envio padrao do formulario
    
    //coleta os valores dos campos

    const nome = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    // verifica se algum cfampo esta macio e exibe uma menssagem
    if (name.trim() ==="") {
        laert('Por favor preencha o campo nome.')
        return;
    }
    if (email.trim() ==="") {
        laert('Por favor preencha o campo email.')
        return;
    }
    if (message.trim() ==="") {
        laert('Por favor preencha o campo mensagem.')
        return;

        //apos, a valição, ixibe uma caixa de dialogo de comfirmação
        const confirmarEnvio = confirm('deseja enviar as informações?')

        // se o ususario confirmar o envio do formulario

        if (confirmarEnvio)
        alert('Informações enviadas com sucesso')

        else{
            alert('Envio cancelado')
            return;
        }



    }

})