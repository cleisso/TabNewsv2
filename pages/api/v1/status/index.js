function status (request, response)
{
	// response.status(200).send("Teste de resposta");
	response.status(200).json({"chave": "teste de resposta"});
}

export default status;
