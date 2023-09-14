# TabNews
Curso do Filipe Deschamps

## Dia 04 - Subindo um webserver com o Next.js e criando a sua estrutura de arquivos

Tópicos abordados:
- Node.js (an open-source, cross-platform JavaScript runtime environment);
- React (biblioteca front-end JavaScript de código aberto com foco em criar interfaces de usuário em páginas web);
- React DOM (contains APIs to render React components on the client (in the browser).

### Índice
- [Protocolos e rodando o site de forma local](#protocolos-e-rodando-o-site-de-forma-local)
- [Subindo um servidor web através do Next.js](#subindo-um-servidor-web-através-do-nextjs)
- [Página Inicial - Criando a estrutura de arquivos](#página-inicial---criando-a-estrutura-de-arquivos)

### Protocolos e rodando o site de forma local

Tipos de protocolos de comunicação (em servidores Web ou Web Servers):
- HTTP (Hypertext Transfer Protocol);
- FTP (File Transfer Protocol);
- SMTP (Single Mail Transfer Protocol).

Para exemplificar melhor o que é um protocolo, utilizou a ideia da brincadeira do `telefone sem fio`.

Estes protocolos funcionam em cima de outros protocolos (pilha de protocolos), que pode ser:

- UDP (User Datagram Protocol): os dados transmitidos são auto-suficientes, ou seja, não há necessidade de receber outros dados além dos que ja foram recebidos. Trabalhando dessa forma, ganha-se em velocidade, porém, um dos pontos negativos é que não há conferência de erros de transmissão, ou seja, um dado recebido com erro é descartado (muito utilizado em jogos e streamings);

- TCP (Transmission Control Protocol): utilizado para enviar os dados na **sequência correta** e sem erros de transmissão/recepção (possui a capacidade de recuperar os dados perdidos - Error Recovery);

- [Video apresentando TCP vs UDP](https://youtu.be/ZEEBsq3eQmg).

### Subindo um servidor web através do Next.js

Abrir o manifesto (package.json) e digitar a seguinte linha:
```bash
"scripts": {
    "dev": "next dev"
  },
```

Em seguida, executar o comando `npm run dev` para executar o script. Ele irá funcionar, porém, em seguida, irá acusar um erro (se isso acontecer, está tudo certo!).

```cmd
ready - started server on 0.0.0.0:3000, url: http://localhost:3000
error - Project directory could not be found, restart Next.js in your new directory
```

### Página Inicial - Criando a estrutura de arquivos

O Next.js utiliza um sistema chamado **File-Based Routing**, que significa que cada arquivo será um ponto de acesso a uma página dentro do servidor.

Primeiramente deve-se criar na raiz uma pasta chamada `pages`, onde os arquivos `.js` estarão disponíveis.

Agora todo arquivo colocado dentro dessa pasta criará uma instância de acesso do tipo `<URL>/<nome do arquivo>`, similar a endereços de página Web (se for criado um arquivo do tipo `index.js`, basicamente o acesso se dará pelo root da página, ou seja, diretamente pela `<URL>`).

Exemplo:
![Roteamento de arquivos do Next.js](Imagens/01.%20Roteamento%20do%20Next.js.png)

Dentro da pasta `pages`, foi criado um arquivo `index.js`, e o seguinte script foi escrito:

```js
function Home()
{
    return <h1>Teste</h1>;
}

export default Home;
```

Uma vez salvo este arquivo, basta utilizar o comando `npm run dev` que a página web será inicializada, permitindo acessar a página através da URL disponibilizada pelo Github.
