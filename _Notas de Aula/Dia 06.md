# TabNews
Curso do Filipe Deschamps

## Dia 06 - Trabalhando com o git de forma online

### Índice

### Lista de Comandos Git

Lista de comandos que serão abordados nesta aula:

- `git commit -m "mensagem"`: uma outra forma de realizar o commit, com a mensagem ja embutida no comando;
- `git push`: envia as alterações `locais` para o `origin`;
- `git push -f` ou `git push --force`: força o envio das alterações `locais` para o `origin`;
- `git branch`: lista as branches do repositório;
- `git pull`: realiza o download das atualizações do repositório online para dentro do repositório local.

**Obs:** Os comandos que envolvem o `push` só funcionam quando conectado a internet, uma vez que o objetivo aqui é levar o repositório local para um repositório online.

### Git Push

Sempre que for necessário carregar as alterações locais para um repositório remoto (como o **GitHub**), utilizar o comando `git push`. <br>
Sempre que for necessário carregar o repositório local com as modificações realizadas em um repositório remoto, utilizar o comando `git pull`.

![Git Push e Git Pull](Imagens/04.%20Git%20Push%20e%20Git%20Pull.png)

### Fazendo commits de forma mais rápida

Utilizar o comando `git commit -m "mensagem"`. Dessa forma a mensagem do commit é realizada dentro da linha de comando, descartando a necessidade de um editor externo para editar a mensagem.

#### Detalhes sobre os arquivos de manifesto package.json e package-lock.json

- `package.json`: guarda metadados (dados pessoais), scripts (como rodar o web server) e as dependências do projeto (aquelas instaladas com o comando `npm install`);
- `package-lock.json`: guarda as dependências dos módulos do Node.js (incluindo dependência de dependência).

