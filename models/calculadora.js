function soma (num1, num2)
{
	if (typeof(num1) == "number" && typeof(num2) == "number")
		return (num1 + num2);
	else
		return ("error");
}

function subtracao (num1, num2)
{
	if (typeof(num1) == "number" && typeof(num2) == "number")
		return (num1 - num2);
	else
		return ("error");
}

function multiplicacao (num1, num2)
{
	if (typeof(num1) == "number" && typeof(num2) == "number")
		return (num1 * num2);
	else
		return ("error");
}

function divisao (num1, num2)
{
	if (typeof(num1) == "number" && typeof(num2) == "number")
	{
		if (num2 !== 0)
			return (num1 / num2);
		else
		{
			if (num1 > 0)
				return ("+inf");
			else if (num1 < 0)
				return ("-inf");
			else
				return ("error");
		}
	}
	else
	{
		return ("error");
	}
}

exports.soma = soma;
exports.subtracao = subtracao;
exports.multiplicacao = multiplicacao;
exports.divisao = divisao;
