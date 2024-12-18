// Exemplo de interação com JavaScript para adicionar efeitos ou comportamentos
document.addEventListener('DOMContentLoaded', function() {
    // Alterar o título do header ao clicar em um carro ou imóvel
    const produtos = document.querySelectorAll('.produto');
    
    produtos.forEach(produto => {
        produto.addEventListener('click', () => {
            alert(`Você clicou em: ${produto.querySelector('h3').innerText}`);
        });
    });
});