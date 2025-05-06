function atualizarPredio() {
    const agora = new Date();
    const horas = agora.getHours();
    const minutos = agora.getMinutes();
    const horarioAtual = horas * 60 + minutos;
    const horarioLimite = 18 * 60; // 18:00 em minutos

    const janelas = document.querySelectorAll('.window');
    const mensagem = document.getElementById('message');

    if (horarioAtual < horarioLimite) {
        // Antes das 18:00
        janelas.forEach(janela => {
            janela.setAttribute('data-light', 'off');
        });
        mensagem.textContent = 'Bom dia';
    } else {
        // Depois das 18:00
        janelas.forEach(janela => {
            janela.setAttribute('data-light', 'on');
        });
        mensagem.textContent = 'Boa noite';
    }
}

// Atualiza imediatamente quando a página carrega
atualizarPredio();

// Atualiza a cada minuto
setInterval(atualizarPredio, 60000); 