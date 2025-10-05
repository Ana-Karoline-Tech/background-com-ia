// Objetivo:
// Enviar um texto de um formulário para uma API do n8n e exibir o resultado o código html, css e colocar a animação no fundo da tela do site.

// Passos:
// 1. No JavaScript, pegar o evento de submit do formulário para evitar o recarregamento da página.
// 2. Obter o valor digitado pelo usuário no campo de texto.
// 3. Exibir um indicador de carregamento enquanto a requisição está sendo processada.
// 4. Fazer uma requisição HTTP (POST) para a API do n8n, enviando o texto do formulário no corpo da requisição em formato JSON.
// 5. Receber a resposta da API do n8n (esperando um JSON com o código HTML/CSS do background).
// 6. Se a resposta for válida, exibir o código HTML/CSS retornado na tela:
//    - Mostrar o HTML gerado em uma área de preview.
//    - Inserir o CSS retornado dinamicamente na página para aplicar o background.
// 7. Remover o indicador de carregamento após o recebimento da resposta.

document.addEventListener("DOMContentLoaded", function () {
    // 1. No JavaScript, pegar o evento de submit do formulário para evitar o recarregamento da página.
  const generateBtn = document.getElementById("generate-btn");
  const descriptionInput = document.getElementById("description");
  const htmlCodeOutput = document.getElementById("html-code");
  const cssCodeOutput = document.getElementById("css-code");
  const previewSection = document.getElementById("preview-section");

  generateBtn.addEventListener("click", function (event) {
    event.preventDefault();
    const description = descriptionInput.value;
    if (!description) {
      alert("Por favor, descreva o background que você deseja.");
      return;
    }

    // Aqui você pode adicionar a lógica para gerar o background com IA
    // Por enquanto, vamos apenas simular a geração de código

    const htmlCode = `<div class="background" style="background: ${description};"></div>`;
    const cssCode = `.background { width: 100%; height: 100vh; }`;

    htmlCodeOutput.textContent = htmlCode;
    cssCodeOutput.textContent = cssCode;

    // Atualiza a pré-visualização
    previewSection.innerHTML = htmlCode;
  });
});
