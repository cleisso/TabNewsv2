# TabNews
Curso do Filipe Deschamps

## Dia 03 - Configurando o ambiente de desenvolvimento

Tópicos abordados:
- Node.js (an open-source, cross-platform JavaScript runtime environment);
- React (biblioteca front-end JavaScript de código aberto com foco em criar interfaces de usuário em páginas web);
- React DOM (contains APIs to render React components on the client (in the browser).

### Índice
- [A fundação](#a-fundação)
- [A primeira parede](#a-primeira-parede)

### A fundação

Atalho para abrir um terminal no VSCode: `Ctrl+Shift+'`.

#### Guia de comandos utilizados para configurar o ambiente de desenvolvimento

- Verificando a versão do node.js
```bash
node -v
```

- Utilizando o nvm (Node Version Manager) para retornar uma lista de versões do node-js
```bash
nvm ls
```

- Para instalar uma versão do node-js <br>
  No curso foi instalado a versão lts/hydrogen (lts: long term support)
```bash
nvm install <nome_versão>

# Para este caso (linux):
nvm install lts/hydrogen

# Para este caso (windows):
nvm install hydrogen
```

- Forçar o codespaces (ou qualquer outro terminal remoto) aponte para versão desejada do node-js
```bash
# Set default node version on a shell
nvm alias default <nome_versão>

# Para este caso (linux):
nvm alias default lts/hydrogen

# Para este caso (windows):
nvm alias default hydrogen
```

#### Criação do arquivo .nvmrc

Existem diversos arquivos com o final rc, que significa **Run Commands**, são arquivos especiais que irão automatizar algumas tarefas, como neste caso, se alguém deseja contribuir para este desenvolvimento, consiga instalar as mesmas instâncias do serviços em seu ambiente virtual.

Criar o arquivo `.nvmrc` na raiz do projeto. O seu conteúdo deve ser:

```bash
# Para linux
lts/hydrogen

# Para windows
hydrogen
```

**Obs:** Neste arquivo, deve haver uma linha em branco na última linha.

Para instalar a mesma instância do node.js no projeto utilizando o arquivo `.nvmrc`, basta digitar:
```bash
nvm install
```

Desde que o shell aponte corretamente para a pasta do projeto, o comando automaticamente encontrará o arquivo `.nvmrc` e instalará a mesma versão do node.js para o projeto.

### A primeira parede

#### Glosário

- Next.js (framework de desenvolvimento web)
- npm (Node Package Manager, gerenciador de pacotes do node-js)

#### Configurando o Next.js

Para inicializar o gerenciador:

```bash
npm init
```

Será exibida a seguinte mensagem:
```bash
This utility will walk you through creating a package.json file.
It only covers the most common items, and tries to guess sensible defaults.

See `npm help init` for definitive documentation on these fields
and exactly what they do.

Use `npm install <pkg>` afterwards to install a package and
save it as a dependency in the package.json file.
```

Através deste comando, será criado um arquivo package.json (chamado de *manifesto*), que será responsável por deixar claro quais instâncias (dependências do projeto) na versão desejada deverão ser instaladas.

E para instalar o Next.js na versão 13.1.6:

```bash
npm install next@13.1.6
```

E para instalar o react na versão 18.2.0

```bash
npm install react@18.2.0
```

E para instalar o renderizador HTML do react (react-dom):

```bash
npm install react-dom@18.2.0
```
