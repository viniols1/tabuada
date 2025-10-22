const inputNumero = document.getElementById('numero');
const botaoGerar = document.getElementById('gerar');
const divResultado = document.getElementById('resultado');

botaoGerar.addEventListener('click', gerarTabuada);

function gerarTabuada() {
    divResultado.innerHTML = '';

    const num = Number(inputNumero.value);

    if (isNaN(num) || num <= 0) {
        const pErro = document.createElement('p');
        pErro.textContent = 'Por favor, digite um número válido.';
        pErro.style.textShadow = '0 0 8px #FF0000'; 
        divResultado.appendChild(pErro);
        return; 
    }

    for (let i = 1; i <= 10; i++) {
        const resultado = num * i;
        const linhaTabuada = `${num} x ${i} = ${resultado}`;
        const p = document.createElement('p');
        p.textContent = linhaTabuada;
        
        p.style.animation = `slide-fade-in 0.3s ease-out forwards`;
        
        p.style.animationDelay = `${i * 0.1}s`;

        divResultado.appendChild(p);
    }
}