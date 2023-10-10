/*
// 1º Formato de Declaração
test("Teste 1", CallbackFunction);

function CallbackFunction ()
{
	console.log("1º Formato");
}

// 2º Formato de Declaração (declarando a função anônima dentro do parâmetro)
test("Teste 2", function ()
{
	console.log("2º Formato");
});

// 3º Formato de Declaração (utilizando o operador => (arrow function) para substituir a declaração function)
// Este modo é o mais utilizado
test("Teste 3", () =>
{
	console.log("3º Formato");

	expect(1).toBe(1);
});
*/

const calculadora = require("../../models/calculadora")

test.skip("Teste de soma", () =>
{
	let resultado = calculadora.soma(10, 15);
	expect(resultado).toBe(25);

	resultado = calculadora.soma(10, -15);
	expect(resultado).toBe(-5);

	resultado = calculadora.soma(-10, 15);
	expect(resultado).toBe(5);

	resultado = calculadora.soma(-10, -15);
	expect(resultado).toBe(-25);

	resultado = calculadora.soma(10, "teste");
	expect(resultado).toBe("error");

	resultado = calculadora.soma("teste", 15);
	expect(resultado).toBe("error");

	resultado = calculadora.soma("teste", "teste");
	expect(resultado). toBe("error");
});

test.skip("Teste de subtracao", () =>
{
	let resultado = calculadora.subtracao(10, 15);
	expect(resultado).toBe(-5);

	resultado = calculadora.subtracao(10, -15);
	expect(resultado).toBe(25);

	resultado = calculadora.subtracao(-10, 15);
	expect(resultado).toBe(-25);

	resultado = calculadora.subtracao(-10, -15);
	expect(resultado).toBe(5);

	resultado = calculadora.subtracao(10, "teste");
	expect(resultado).toBe("error");

	resultado = calculadora.subtracao("teste", 15);
	expect(resultado).toBe("error");

	resultado = calculadora.subtracao("teste", "teste");
	expect(resultado). toBe("error");
});

test.skip("Teste de multiplicacao", () =>
{
	let resultado = calculadora.multiplicacao(10, 15);
	expect(resultado).toBe(150);

	resultado = calculadora.multiplicacao(10, -15);
	expect(resultado).toBe(-150);

	resultado = calculadora.multiplicacao(-10, 15);
	expect(resultado).toBe(-150);

	resultado = calculadora.multiplicacao(-10, -15);
	expect(resultado).toBe(150);

	resultado = calculadora.multiplicacao(10, "teste");
	expect(resultado).toBe("error");

	resultado = calculadora.multiplicacao("teste", 15);
	expect(resultado).toBe("error");

	resultado = calculadora.multiplicacao("teste", "teste");
	expect(resultado). toBe("error");
});

test.skip("Teste de divisao", () =>
{
	let resultado = calculadora.divisao(20, 10);
	expect(resultado).toBe(2);

	resultado = calculadora.divisao(20, -10);
	expect(resultado).toBe(-2);

	resultado = calculadora.divisao(-20, 10);
	expect(resultado).toBe(-2);

	resultado = calculadora.divisao(-20, -10);
	expect(resultado).toBe(2);

	resultado = calculadora.divisao(20, "teste");
	expect(resultado).toBe("error");

	resultado = calculadora.divisao("teste", 10);
	expect(resultado).toBe("error");

	resultado = calculadora.divisao("teste", "teste");
	expect(resultado). toBe("error");

	resultado = calculadora.divisao(0,0);
	expect(resultado).toBe("error");

	resultado = calculadora.divisao(20, 0);
	expect(resultado).toBe("+inf");

	resultado = calculadora.divisao(-20, 0);
	expect(resultado).toBe("-inf");

	resultado = calculadora.divisao(0, 10);
	expect(resultado).toBe(0);
});

