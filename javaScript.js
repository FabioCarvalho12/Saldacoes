
    function carregar() {
        var msg = window.document.getElementById('msg');
        var img = window.document.getElementById('imagem');
        var data = new Date();
        var hora = data.getHours();
        var min = data.getMinutes();
        var seg = data.getSeconds();

        // Função auxiliar para adicionar um zero à frente de valores menores que 10
        function formataNumero(numero) {
            return numero < 10 ? '0' + numero : numero;
        }

        if (hora >= 5 && hora < 13) {
            // Bom dia
            img.src = 'img/manha.jpg';
            msg.innerHTML = `<h2>${formataNumero(hora)}:${formataNumero(min)}:${formataNumero(seg)}</h2><br><h1>Bom Dia</h1>`;
            document.body.style.background = '#85623d';
        } else if (hora >= 13 && hora <= 18) {
            // Boa Tarde
            img.src = 'img/tarde.jpg';
            msg.innerHTML = `${formataNumero(hora)}:${formataNumero(min)}:${formataNumero(seg)}<br><h1>Boa Tarde</h1>`;
            document.body.style.background = '#6a3412';
        } else {
            // Boa Noite
            img.src = 'img/noite.jpg';
            msg.innerHTML = `${formataNumero(hora)}:${formataNumero(min)}:${formataNumero(seg)}<br><h1>Boa Noite</h1>`;
            document.body.style.background = '#10222c';
        }
    }

    // Atualiza a cada segundo (1000 milissegundos)
    setInterval(carregar, 1000);

    // Chama a função carregar ao carregar a página
    window.onload = carregar;
