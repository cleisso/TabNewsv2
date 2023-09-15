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

**Obs 1:** Antes de realizar o primeiro `git push`, deve-se antes realizar a configuração para o Git saber onde deverá ser copiado o repositório local. Para o repositório local apontar para o repositório remoto, utilizar o comando: `git remote add origin <Site do repositório>`.

**Obs 2:** Ao realizar o primeiro `git push`, deve-se informar em qual **branch** será feito o upload. Utilizar o comando: `git push origin <branch>`.<br>
Quando é inicializado um repositório Git local, o nome da **branch** é **master**, porém, o nome da **branch** no GitHub é **main**. Ao realizar o `git push`, será produzido uma nova **branch** se os nomes entre o repositório local e o Github forem diferentes. Uma alternativa é renomear a **branch** local de **main** utilizando o comando: `git branch -m "Nome do repositório"`.<br>

![Git Push e Git Pull](Imagens/04.%20Git%20Push%20e%20Git%20Pull.png)

### Fazendo commits de forma mais rápida

Utilizar o comando `git commit -m "mensagem"`. Dessa forma a mensagem do commit é realizada dentro da linha de comando, descartando a necessidade de um editor externo para editar a mensagem.

#### Detalhes sobre os arquivos de manifesto package.json e package-lock.json

- `package.json`: guarda metadados (dados pessoais), scripts (como rodar o web server) e as dependências do projeto (aquelas instaladas com o comando `npm install`);
- `package-lock.json`: guarda as dependências dos módulos do Node.js (incluindo dependência de dependência).

### Git Push de Novo (mas agora com ainda mais "força)

Quando se realiza alterações sobre a última versão do repositório utilizando o comando `git commit --amend`, o identificador hash do repositório é alterado, indicando que a linha do tempo de commits foi comprometida (o git apenas permite que os push sejam executados se a linha do tempo de commits não foi afetada).

![Lista de Commits](<Imagens/05. Lista de Commits.PNG>)

Observe na imagem acima que o identificador do commit local é diferente do commit remoto, portanto, o Git irá acusar um erro dizendo que essa linha do tempo não faz mais sentido. <br>
Para contornar essa situação, devemos utilizar o comando `git push -f` ou `git push --force`, para forçar uma atualização do repositório e restaurando a linha do tempo. <br>
Se novos commits forem realizados, o comando `git push` não apresentará problemas desde que não seja utilizado o comando `git commit --amend`, senão, deverá realizar um `git push -f` para forçar o upload das atualizações ao GitHub.

Erro ao executar um `git push`:

![Erro ao executar um git push](Imagens/06.%20Erro%20no%20Git%20Push.PNG)

Solução ao utilizar o comando `git push -f`:

![Solução ao utilizar um git push -f](Imagens/07.%20Solução%20no%20Git%20Push.PNG)
