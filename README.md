![animacao-background-ia-dark](https://github.com/user-attachments/assets/24e58e36-d44a-4805-9cac-72e82040c12d)

<<<<<<< HEAD
# Background com IA

Este projeto é uma aplicação web que permite aos usuários gerar backgrounds personalizados com a ajuda de inteligência artificial. O usuário pode descrever o background que deseja em uma caixa de texto, e a aplicação envia essa descrição para um workflow do N8n, que por sua vez, gera o código HTML e CSS correspondente ao background.

## Como funciona

1.  **Descrição do Background**: O usuário insere uma descrição detalhada do background que deseja na caixa de texto principal.
2.  **Geração via N8n**: Ao clicar em "Gerar background", a descrição é enviada para um webhook do N8n.
3.  **Workflow de IA**: O workflow do N8n processa a descrição, utiliza um modelo de IA para gerar o código HTML e CSS do background.
4.  **Exibição do Resultado**: A aplicação recebe o código gerado e o exibe em três formatos:
    *   Uma pré-visualização do background.
    *   O código HTML.
    *   O código CSS.

## N8n

Este projeto utiliza o [N8n](https://n8n.io/) como backend para a geração dos backgrounds. O N8n é uma ferramenta de automação de fluxo de trabalho que permite conectar diferentes serviços e APIs. Neste caso, o N8n foi configurado para:

1.  Receber a descrição do usuário através de um webhook.
2.  Processar a descrição com um modelo de linguagem de IA.
3.  Retornar o código HTML e CSS gerado para a aplicação web.

O endpoint do webhook utilizado neste projeto é: `https://anakaroline-tech.app.n8n.cloud/webhook/gerador-fundo`
=======
![animacao-background-ia-dark](https://github.com/user-attachments/assets/24e58e36-d44a-4805-9cac-72e82040c12d)


![animacao-background-ia](https://github.com/user-attachments/assets/a92e698f-ddda-47d5-8c7d-57b0422f49f2)


>>>>>>> 125fcf9b30e5b818e92fe7316a64392ee23dd58f



