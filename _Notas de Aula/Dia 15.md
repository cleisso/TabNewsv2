# TabNews
Curso do Filipe Deschamps

## Dia 15 - Testes Automatizados

### Índice

- [Testes Automatizados: Um caminho sem volta](#testes-automatizados-um-caminho-sem-volta)
- [Instalar um Test Runner](#instalando-o-jest)
- [Criar um "Teste de Teste"](#criar-um-teste-de-teste)
- [Criar um "Teste de Verdade"](#criar-um-teste-de-verdade)

### Testes Automatizados: Um caminho sem volta

**O que são testes automatizados?**

Testes automatizados são um conjunto de técnicas e práticas de teste de software que envolvem o uso de ferramentas e scripts para executar casos de teste de forma automatizada, em oposição aos testes manuais, onde um testador humano interage diretamente com o software para identificar problemas e verificar seu funcionamento.

Existem vários tipos de testes automatizados, incluindo:

1. **Testes de unidade:** Esses testes verificam unidades individuais de código, como funções ou métodos, isoladamente. Eles garantem que cada unidade funcione conforme o esperado.

2. **Testes de integração:** Verificam como diferentes unidades ou componentes de software se integram e funcionam juntos. Isso ajuda a identificar problemas que podem surgir quando várias partes do software são combinadas.

3. **Testes de aceitação:** São testes que verificam se o software atende aos critérios de aceitação definidos pelos clientes ou stakeholders. Eles garantem que o software cumpra seus requisitos funcionais e não funcionais.

4. **Testes de regressão:** São executados para garantir que as mudanças recentes no código não quebraram funcionalidades existentes. Isso é feito reexecutando casos de teste existentes após cada alteração.

5. **Testes de desempenho e carga:** Avaliam o desempenho e a capacidade de carga do software, identificando gargalos e problemas de desempenho sob diferentes condições.

6. **Testes de segurança:** Esses testes identificam vulnerabilidades de segurança no software, ajudando a protegê-lo contra ameaças e ataques.

7. **Testes de usabilidade:** Avaliam a usabilidade do software, verificando se ele é fácil de usar e atende às necessidades do usuário.

A automação de testes oferece várias vantagens, incluindo economia de tempo, repetibilidade, cobertura abrangente de testes e detecção precoce de defeitos. No entanto, requer **investimento inicial em desenvolvimento de scripts e manutenção contínua à medida que o software evolui**. A escolha de quais testes automatizar depende das necessidades do projeto e dos recursos disponíveis.

Os testes automatizados garantem que o sistema continue apresentando a capacidade de continuar sendo **modificável**.

### Instalar um Test Runner

Alguns tipos de Test Runners:

- Mocha;
- AVA;
- Playwright;
- Jest (Test Runner escolhido para o curso).

#### Instalando o Jest

No terminal, digitar o seguinte comando
```bash
# Instalando o Jest na versão 29.6.2
npm install --save-dev jest@29.6.2
```

Pode-se criar dois scripts que contribuem na hora de utilizar o Jest:
```json
/*
	Foram acrescentados os scripts "test" e "watch"
*/
"scripts": {
    "dev": "next dev",
    "lint:check": "prettier --check .",
    "lint:fix": "prettier --write .",
	"test": "jest",						// Executa o Test Runner
	"test:watch": "jest --watch"		// Mantém o Test Runner executando, para monitorar novas alterações que são feitas no sistema
  }
```

Para executar qualquer um dos scripts:
```bash
# Executando o Test Runner
npm run test

# Executando o Test Runner (no modo Watch)
npm run watch
```

Uma vez que o Test Runner esteja executando de forma contínua, para sair, digitar: `Q` ou `Ctrl + C`.

#### Glosário

- Regressão: é quando os testes que aprovam o comportamento começam acusar erros, dizemos que o sistema apresentou uma **regressão** em seu comportamento, pois está funcionando de maneira inesperada/indesejada.

### Criar um "Teste de Teste"

Primeiramente, foi criado uma pasta de testes chamada de `tests`, e dentro dessa pasta serão colocados os scripts de teste. Os arquivos de script serão do tipo `.js`.

Para o **Jest** conseguir identificar qual arquivo de script é um arquivo de teste, a convenção adotada é colocar a extensão `.test.js` ao nome do arquivo.

```bash
<nome_do_arquivo>.test.js
```

Dentro do arquivo `*.test.js`, os testes que serão executados pelo **Jest** serão declarados utilizando a função `test`:

```js
test(<Nome da Função>, <Função de Callback>);
```

Exemplos de criação de testes:

```js
// 1º Formato de Declaração
test("nome do teste", CallbackFunction);

function CallbackFunction ()
{

}

// 2º Formato de Declaração (declarando a função anônima dentro do parâmetro)
test("nome do teste", function ()
{

});

// 3º Formato de Declaração (utilizando o operador => (arrow function) para substituir a declaração function)
// Este modo é o mais utilizado e o mais rápido também
test("nome do teste", () =>
{

});
```

E para executar os testes, através do terminal, utilizar o comando `npm run test` para executar o teste uma única vez, ou `npm run test:watch` para executar o teste de forma contínua a cada atualização dos arquivos.

Para construir os testes, serão utilizadas as funções `expect` e `toBe` fornecidas pelo **Jest**, onde `toBe` será a entrada do teste (que será fixado no script ou `hardcoded`) e o `expect` será o resultado esperado que deverá ser produzido pelo sistema (valores que serão determinados dinamicamente ou `softcoded`).

Exemplo de `expect().toBe()`:
```js
expect(received).toBe(expected);
```

Exemplo de teste:
```js
// Exemplo de teste
test("Teste", () =>
{
	expect(1).toBe(1);
});
```

### Criar um "Teste de Verdade"

Duas abordagens na hora criar testes automatizados:

- A primeira é escrever a aplicação, e depois o teste (mais conveniente);
- A segunda é escrever o teste, e depois a aplicação (mais profissional).

Foi criado uma pasta `models` onde armazenará os scripts que deverão ser testados (baseando-se na arquitetura MVC).

As funções (métodos, scripts, etc.) criados na pasta `models` precisam ser exportados para os scripts de teste. Como exemplo:

- `calculadora.js`
```js
function soma (num1, num2)
{
	return (num1 + num2);
}

exports.soma = soma;
```

Como é possível observar, foi utilizado um módulo do **NodeJS** chamado `exports`, que geralmente é utilizado da seguinte forma: `exports.<nome da funcao> = <nome da funcao>`

Já no script de teste, será necessário atribuir essa função uma variável. Para isso, será utilizado o módulo do **NodeJS** chamado `require`. Como exemplo:

- `calculadora.test.js`
```js
test("Teste de soma da calculadora", () =>
{
	const calculadora = require("../models/calculadora");
	
	const resultado = calculadora.soma(3, 5);
	expect(resultado).toBe(8);
});
```

O módulo `require` é utilizado da seguinte forma: `const <variavel> = require(<endereço do arquivo>)`.

#### Glosário

- **CommonJS**: é uma especificação de módulos para JavaScript que foi criada para permitir a modularização de código em ambientes de servidor, como o **Node.js**. Ele define um sistema de módulos para organizar o código JavaScript em diferentes arquivos, facilitando a reutilização e a manutenção do código.
<br>
As principais características do CommonJS incluem:
<br>
	1. `Exports` e `Require`: O **CommonJS** define as palavras-chave `exports` e `require` para exportar e importar funcionalidades entre módulos. Com o `exports`, você pode expor funções, objetos ou variáveis de um módulo para serem utilizados em outros módulos. O requ`ire é usado para importar funcionalidades de outros módulos.
	<br>

	2. **Módulos são carregados de forma síncrona**: No **CommonJS**, os módulos são carregados de forma síncrona, o que significa que o código aguarda a conclusão do carregamento do módulo antes de continuar a execução. Isso é adequado para ambientes de servidor, onde a latência não é tão crítica quanto em ambientes de navegador.
	<br>

	3. **Ciclo de vida de módulo**: Cada módulo **CommonJS** possui seu próprio escopo, o que impede que as variáveis e funções definidas em um módulo afetem diretamente outros módulos. Isso é conhecido como o "escopo de módulo" e ajuda a evitar conflitos de nomes e a manter a encapsulação.
<br>

	O **CommonJS** foi uma especificação importante para a evolução do **JavaScript** em ambientes de servidor, como o **Node.js**. No entanto, é importante observar que, nos navegadores, o **CommonJS** não é nativamente suportado. Em vez disso, os navegadores tendem a usar o sistema de módulos **ECMAScript (ESM)**, que utiliza as palavras-chave import e export para alcançar funcionalidades semelhantes de modularização de código.

<br>

- **TDD**: Desenvolvimento Orientado a Testes (Test Driven Development). É uma abordagem de desenvolvimento de software que coloca o foco na criação de testes automatizados antes mesmo de escrever o código de produção. O processo de **TDD** segue um ciclo iterativo e repetitivo com três etapas principais: ***"Red-Green-Refactor" (Vermelho-Verde-Refatoração)***:

	- **Red (Vermelho)**: Nesta primeira etapa, você escreve um teste automatizado que descreve uma funcionalidade ou comportamento específico que deseja implementar no seu software. Esse teste deve falhar inicialmente, representado por "vermelho", porque a funcionalidade ainda não foi implementada.

	- **Green (Verde)**: Na segunda etapa, você escreve o código de produção necessário para fazer o teste automatizado passar com sucesso, ou seja, para que ele fique "verde". O objetivo é escrever o código mínimo necessário para atender aos requisitos do teste.

	- **Refactor (Refatoração)**: Após o teste passar e a funcionalidade ser implementada com sucesso, você pode realizar refatorações no código, se necessário, para melhorar sua qualidade, legibilidade ou desempenho. A vantagem aqui é que, como você tem testes automatizados em vigor, pode fazer alterações com confiança, sabendo que os testes ajudarão a detectar problemas caso algo seja quebrado.

	O ciclo então se repete para a próxima funcionalidade ou melhoria desejada no software.

	O TDD oferece várias vantagens, incluindo:

	- **Testes mais abrangentes**: Como você escreve os testes antes de implementar o código, isso ajuda a garantir que todas as partes do código sejam testadas de forma adequada.

	- **Melhor compreensão dos requisitos**: A escrita de testes primeiro força você a pensar cuidadosamente sobre os requisitos da funcionalidade antes de começar a implementá-la.

	- **Código mais limpo e modular**: O TDD promove a escrita de código mais modular, uma vez que você se concentra em unidades individuais de funcionalidade de cada vez.

	- **Redução de erros**: Como os testes são executados automaticamente sempre que você faz alterações no código, erros são detectados rapidamente, o que facilita a correção de problemas antes que eles se tornem mais complexos e caros de resolver.

	O TDD é amplamente adotado na indústria de desenvolvimento de software e é uma prática recomendada em metodologias ágeis, como o **Scrum** e o **Extreme Programming (XP)**, para melhorar a qualidade do software e acelerar o processo de desenvolvimento.

<br>

- **Transpiling**: é o processo de compilar código-fonte de um idioma de programação em outro idioma de programação que tenha uma semântica ou nível de abstração semelhante. O termo *"transpilação"* é uma combinação das palavras *"transformação"* e *"compilação"*.
<br>
O uso mais comum da transpilação ocorre quando se trabalha com JavaScript. JavaScript é uma linguagem de alto nível interpretada pelos navegadores da web, mas muitos desenvolvedores escrevem código em outras linguagens que são mais fáceis de ler, manter e entender. Em seguida, eles usam um transpilador para converter o código-fonte de uma linguagem como TypeScript, CoffeeScript ou ES6 (ECMAScript 2015) em JavaScript padrão que os navegadores possam executar.
