# TabNews
Curso do Filipe Deschamps

## Índices
- [Dia 2 - Aula sobre Codespaces](#dia-2---aula-sobre-codespaces)
- [Dia 3 - Configurando o Next.js](#dia-3---configurando-o-nextjs)
- [Dia 4 - Subindo um webserver com o Next.js e criando a sua estrutura de arquivos](#dia-4---subindo-um-webserver-com-o-nextjs-e-criando-a-sua-estrutura-de-arquivos)
- [Dia 5 - Trabalhando com o git de forma offline](#dia-5---trabalhando-com-o-git-de-forma-offline)
- [Dia 6 - Dia 6 - Trabalhando com o git de forma online](#dia-6---trabalhando-com-o-git-de-forma-online)

## Dia 2 - Aula sobre Codespaces
Alguns comandos apresentados nessa aula:

- Exibe a versão do node-js (An open-source, cross-platform JavaScript runtime environment)
```bash
node -v
```

- Exibe a versão do Docker
```bash
docker -v
```

- Exibe a versão do Docker-Compose

Docker-Compose é um utilitário Docker para banco de dados, serviços de e-mail local, etc.

```bash
docker-compose -v
```

- Comando para alterar a versão do node-js utilizando o nvm (Node Version Manager)
```bash
nvm -v
```
**Obs:** nvm é um utilitário existente apenas em Linux e MacOS. Felizmente, um grupo desenvolveu **nvm-windows**, apresentando as mesmas funcionalidades. [Clique Aqui para baixar nvm-windows](https://github.com/coreybutler/nvm-windows).

- Utilizando o nvm para retornar uma lista de versões do node-js
```bash
nvm ls
```

- Para instalar uma versão do node-js

No curso foi instalado a versão lts/hydrogen (lts: long term support)
```bash
nvm install <nome_versão>
```

Para este caso:
```bash
nvm install lts/hydrogen
```

- Forçar o codespaces (ou qualquer outro terminal remoto) aponte para versão desejada do node-js
```bash
nvm alias default <nome_versão>
```

Para este caso:
```bash
nvm alias default lts/hydrogen
```

- Criação do arquivo .nvmrc

Existem diversos arquivos com o final rc, que significa Run Commands, são arquivos especiais que irão automatizar algumas tarefas, como neste caso, se alguem desejar
contribuir para este desenvolvimento, consiga instalar as mesmas instâncias do serviços em seu ambiente virtual.

## Dia 3 - Configurando o Next.js

- Next.js

Framework de desenvolvimento web.

- npm (gerenciador de pacotes do node-js)

Para inicializar o gerenciador:

```bash
npm init
```

Através deste comando, será criado um arquivo package.json, que será responsável por instalar todas as instâncias na versão desejada.

E para instalar o Next.js na versão 13.1.6:

```bash
npm install next@13.1.6
```

E para instalar o react na versão 18.2.0

```bash
npm install react@18.2.0
```

E para instalar o renderizador do react (react-dom):

```bash
npm install react-dom@18.2.0
```

## Dia 4 - Subindo um webserver com o Next.js e criando a sua estrutura de arquivos

- Subindo um servidor web através do Next.js

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

- Criando a estrutura de arquivos

O Next.js utiliza um sistema chamado **File-Based Routing**, que significa que cada arquivo será um ponto de acesso a uma página dentro do servidor.

Primeiramente deve-se criar na raiz uma pasta chamada `pages`, onde os arquivos `.js` estarão disponíveis.

Agora todo arquivo colocado dentro dessa pasta criará uma instância de acesso do tipo `<URL>/<nome do arquivo>`, similar a endereços de página Web (se for criado um arquivo do tipo `index.js`, basicamente o acesso se dará pelo root da página, ou seja, diretamente pela `<URL>`).

Dentro da pasta `pages`, foi criado um arquivo `index.js`, e o seguinte script foi escrito:

```js
function Home()
{
    return <h1>Teste 2</h1>;
}

export default Home;
```

Uma vez salvo este arquivo, basta utilizar o comando `npm run dev` que a página web será inicializada, permitindo acessar a página através da URL disponibilizada pelo Github.

## Dia 5 - Trabalhando com o git de forma offline

Lista de comandos que serão abordados nesta aula:
- `git log`: listar os commits do repositório;
- `git add`: sobe alterações para a *staging area*;
- `git commit`: realiza novos commits;
- `git commit --amend`: substitui o commit anterior por um novo, mas aproveita as alterações dele;
- `git diff`: calcula a diferença entre as versões/alterações dos arquivos;
- `git log --stat`: apresenta os commits do repositório, com alguns detalhes extras (como as adições e remoções de palavras nos arquivos);
- `git log --oneline`: apresenta as informações dos commits em uma única linha.

## Dia 6 - Trabalhando com o git de forma online

Lista de comandos que serão abordados nesta aula:
- `git commit -m "mensagem"`: uma outra forma de realizar o commit, com a mensagem ja embutida no comando;
- `git push`: envia as alterações `locais` para o `origin`;
- `git push -f` ou `git push --force`: força o envio das alterações `locais` para o `origin`;
- `git branch`: lista as branches do repositório;
- `git pull`: realiza o download das atualizações do repositório online para dentro do repositório local.

**Obs:** Os comandos que envolvem o `push` só funcionam quando conectado a internet, uma vez que o objetivo aqui é levar o repositório local para um repositório online.
