# TabNews
Curso do Filipe Deschamps

## Dia 10 - Trabalhando as soft skills e configurando o Linter

### Índice
- [Uma história macabra sobre "Estilização de Código"](#uma-história-macabra-sobre-estilização-de-código)
- [Sincronização das Configurações do Editor (VSCode ou Codespaces)](#sincronização-das-configurações-do-editor-vscode-ou-codespaces)
- [Configurar o EditorConfig](#configurar-o-editorconfig)
- [Configurar o Prettier](#configurar-o-prettier)
- [🛑 Breaking Change](#🛑-breaking-change)

### Uma história macabra sobre "Estilização de Código"

Possíveis diferenças estilização presentes em códigos produzidos por pessoas diferentes, e que podem causar problemas dependendo do tamanho do projeto e de sua escalabilidade:

![Diferença de Estilo 1](Imagens/18.%20Diferença%20de%20Estilo%2001.PNG)

![Diferença de Estilo 2](Imagens/19.%20Diferença%20de%20Estilo%2002.PNG)

#### Glosário

- Linter: Os linters funcionam escaneando o código-fonte em busca de padrões específicos, erros de sintaxe, estilos de codificação inconsistentes e possíveis problemas que possam causar bugs ou tornar o código difícil de ler e manter. Eles podem verificar aspectos como indentação, formatação, nomes de variáveis, uso de espaços em branco, conformidade com padrões de codificação e até mesmo práticas de segurança.

- Pull Request: Apresentar uma revisão de código que a pessoa gostaria que fosse avaliada pelo proprietário do código-fonte, e que no fim, resultará ou não na união do código original a revisão.

### Sincronização das Configurações do Editor (VSCode ou Codespaces)

Criação de sub-tarefas (tasks) das sub-tarefas (issues) da tarefas (milestones) do projeto.

Para salvar as configurações do VSCode / Codespaces, acessar `Profile > Turn on Settings Sync...`:

![Salvando as Configurações do VSCode](Imagens/20.%20Salvando%20as%20Configurações%20do%20VSCode.png)

Será exibido as informações que serão permitidas serem sincronizadas entre a conta e a IDE. Clique em `Sign in & Turn on`:

![Salvando as Configurações do VSCode](Imagens/21.%20Salvando%20as%20Configurações%20do%20VSCode.png)

Escolher uma das contas que será utilizado para armazenar os dados. Caso apareça alguma janela solicitando uma autorização, apenas autorize para concluir o processo.

### Configurar o EditorConfig

[EditorConfig](https://editorconfig.org/) é um Configurador de Editor, que permite deixar algumas configurações do ambiente de forma automática, como indentação (com espaço ou com tab), final de linha (`LF` ou `CR` ou `CRLF`), etc.

O arquivo de script do EditorConfig é o `.editorconfig`. <br>
A extensão do EditorConfig necessita ser instalado no VSCode para funcionar. [Link da Extensão](https://marketplace.visualstudio.com/items?itemName=EditorConfig.EditorConfig)!

O arquivo possui o seguinte script:
```bash
# Este comando indica que todos os arquivos .editorconfig serão processados até este (fim)
root = true

# Indicando a extensão do arquivo para configuração do VSCode (neste caso, todos)
[*]

# Configurando a indentação
indent_style = space
indent_size = 2
```

### Configurar o Prettier

Prettier é um Linter (formatador de código). Será instalado o Prettier através do NPM, pois assim, ele fica instanciado ao projeto do que ao próprio editor.

Para fazer isso, utilizar o seguinte comando:
```bash
# Opção 1
npm install prettier --save-dev

# Opção 2
npm install prettier -D

# O comando --save-dev ou -D serve para instalar o Prettier apenas como uma dependência de desenvolvimento
```

O arquivo `package.json` será acrescido deste script:
```json
"devDependencies": {
	"prettier": "^3.0.3"
},
```

Isto serve para garantir que o Prettier só estará presente nas dependências de desenvolvimento, e não no funcionamento TabNews em si (como o Next.js, React e React-DOM).

Será acrescentado ao arquivo `package.json` mais um script, para rodar o Prettier Check:
```json
"scripts": {
	"dev": "next dev",
	"lint:check": "prettier --check ."

	// O comando "--check ." serve para checar todos os diretórios, arquivos e subdiretórios
}
```

Podemos também ignorar alguns arquivos do Prettier, utilizando o arquivo `.prettierignore`.

Será ignorado todos os arquivos, com exceção dos utilizados no projeto:
```bash
# Ignorando as pastas
_Notas de Aula/
_Softwares/
.next/
node_modules/

# Ignorando os demais arquivos
.prettierignore
.nvmrc
package-lock.json
package.json
README.md
```

Para executar o Prettier Check:
```bash
npm run lint:check
```

Será acrescentado ao arquivo `package.json` mais um script, para rodar o Prettier Write:
```json
"scripts": {
	"dev": "next dev",
	"lint:check": "prettier --check .",
	"lint:fix": "prettier --write ."

	// O comando "--check ." serve para checar todos os diretórios, arquivos e subdiretórios
}
```

Instalar a extensão `Prettier - Code Formatter`.<br>
Pode-se criar um arquivo chamado `.prettierrc` para sempre que for necessário executar o comando `prettier --write`, os comandos listados nesse arquivo sejam utilizados para formatar os documentos.
```json
{
	"arrowParens": "always",
	"bracketSpacing": true,
	"endOfLine": "lf",
	"htmlWhitespaceSensitivity": "css",
	"insertPragma": false,
	"singleAttributePerLine": false,
	"bracketSameLine": false,
	"jsxBracketSameLine": false,
	"jsxSingleQuote": false,
	"printWidth": 80,
	"proseWrap": "preserve",
	"quoteProps": "as-needed",
	"requirePragma": false,
	"semi": true,
	"singleQuote": false,
	"tabWidth": 4,
	"trailingComma": "es5",
	"useTabs": true,
	"embeddedLanguageFormatting": "auto",
	"vueIndentScriptAndStyle": false,
	"filepath": "c:\\Users\\ctbri\\Área de Trabalho\\TabNews\\pages\\index.js",
	"parser": "babel"
}
```

### 🛑 Breaking Change

O prettier a partir da versão 3.0.0 mudou o seu comportamento e por padrão está utilizando o conteúdo dentro `.gitignore` para também ignorar o linting de estilização. <br>
Caso você queira simular o comportamento da aula, basta instalar o módulo na versão 2.8.8 da seguinte forma:
```bash
npm install prettier@2.8.8
```
