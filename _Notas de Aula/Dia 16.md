# TabNews
Curso do Filipe Deschamps

## Dia 15 - Testes de Integração e Protocolo HTTP

### Índice

### Introdução

O foco no curso se dará nos Testes de Integração, pois realizar Testes Unitários, mesmo que todos os módulos passem em seus respectivos testes, não quer dizer que quando forem integrados, o sistema vá funcionar (ou que permanecerá funcionando).

#### Glosário

- Teste Unitário:

- Teste de Integração:

- e2e (End-to-End ou Teste de Interface): 

- API: Application Programming Interface ou Interface de Programação de Apicações. Basicamente são funções (métodos) com funções bem definidas que ajudam a realizar a interface entre as operações dentro de um sistema (ou seja, cada função apresentará responsabilidades bem definidades, e isso contribui para um maior grau de abstração, pois ao utilizar uma API, não estamos interessados na sua implementação, e sim no seu funcionamento).

- Interface Gráfica: é um tipo de interface que permite que pessoas possam interagir com máquinas.

- Interface Programática: é um tipo de interface que permite que máquinas possam interagir com outras máquinas.

- API First:

- API REST:

- TUI: Text-based User Interface ou Interface de Usuário baseado em Texto.

- GUI: Graphical User Interface ou Interface de Usuário Gráfico.

### A maior briga no universo dos Testes Automatizados

Testes unitários são aqueles que testarão um módulo (um script, uma função) que é basicamente auto-suficiente, ou seja, não "depende" de outros recursos externos (na prática, esse limiar é questionável, e os módulos eles não precisam necessariamente serem auto-suficientes, entretanto, estes módulos apresentarão uma função bem definida do seu comportamento/propósito).

Testes de Integração seria justamente a integração entre os módulos, permitindo aumentar a complexidade do sistema.

Mesmo que os módulos apresentem o comportamento esperado durantes os testes unitários, nem sempre a sua integração resultará no comportamento esperado. Isso ocorre justamente numa má definição ou entendimento de como estas estruturas deveriam estar integradas.

- Analogia entre as unidades de um sistema (as peças de um quebra-cabeça, pois elas estão de acordo com o seu propósito) e sua má integração (apesar de as peças individualmente serem funcionais, elas não encaixam uma nas outras, ou seja, quando as unidades estão fornecendo dados uma as outras, porém, estes dados não conseguem ser interpretados por elas, justamente por não ter havido uma adequada implementação das funcionalidades desejadas).
![Analogia entre as unidades de um sistema e sua má integração](Imagens/37.%20Quebra-Cabeça.png)

<br>

- Unit Test vs. Integration Test: Analogia entre as unidades (no caso a porta e a fechadura), que individualmente funcionam perfeitamente (ou seja, atendem ao seu propósito), porém a sua integração foi mal realizada.
![Unit Test vs. Integration Test](Imagens/38.%20Unit%20Test%20vs.%20Integration%20Test.gif)

<br>

- Outra analogia Unit Test vs. Integration Test
![Unit Test vs. Integration Test](Imagens/39.%20Unit%20Test%20vs.%20Integration%20Test.gif)

<br>

Quanto mais complexo é a integração entre as unidades, mais complexo também se tornarão os testes (e mais lento também).

Sugestão de sequência de testes que deverão ser realizados no sistema:
![Pirâmide de Testes](Imagens/40.%20Pirâmide%20de%20Testes.PNG)

Hoje existem outros modelos de sequências de teste, como:

- Troféu de Testes (Front-End)
![Troféu de Testes (Trophy Testing)](Imagens/41.%20Troféu%20de%20Testes.png)

- Teste do Favo de Mel (Back-End)
![Teste do Favo de Mel (Honeycomb Testing)](Imagens/42.%20Honeycomb%20Testing.png)

### Encostando a mão no Protocolo HTTP

- endpoint: Ponto final. Qualquer ponto final em uma rede de comunicação, como os IPs e as URLs. Qualquer ponto final que uma requisição pode alcançar. Também pode se referir a APIs (ou seja outros sistemas podem realizar requisições entre si utilizando as APIs que são fornecidas por um deles).

#### Criando a API para acessar o status do sistema

Criar uma pasta dentro da pasta `pages` com o nome `api.` Dentro da pasta `api` será criado um arquivo chamado `status.js`.

O arquivo `status.js` apresenta o seguinte código:
```js
function status (request, response)
{
	response.status(200).send("Teste de resposta");
}

export default status;
```

Esta estrutura de `request` e `response` é definida pelo **Next.JS**, ao realizarem uma requisição, ele retornará o código 200 (através do método `status`) e enviará uma string (através do método `send`).

**Obs:** O método `send()` não define o `charset` ou `character set`, ou seja, letras com acentuação são exibidos de forma incorreta. Podemos substituir o método `send()` pelo método `json()`, pois este utiliza o `charset=utf-8`, porém, as informações são enviadas no formato `json` (um tipo de estrutura baseado em chave-valor).

```js
function status (request, response)
{
	// response.status(200).send("Teste de resposta");
	response.status(200).json({"chave": "teste de resposta"});
}

export default status;
```

Para fazer requisições HTTP via terminal, será utilizado uma ferramenta chamada de `curl` (Command for Transferring Data with URL, ou, uma ferramenta que se comportará como um Client HTTP).

Para realizar uma requisição HTTP, digitar:
```bash
curl <url>
```

Para realizar uma requisição HTTP, contemplando os detalhes da comunicação, digitar:
```bash
curl <url> -v

# ou

curl <url> --verbose
```

Foi obtido a seguinte resposta:
```bash
*   Trying 20.201.67.222:443...
* Connected to g7fzk2nx-3000.brs.devtunnels.ms (20.201.67.222) port 443 (#0)
* schannel: disabled automatic use of client certificate
* ALPN: offers http/1.1
* ALPN: server accepted http/1.1
* using HTTP/1.1
> GET /api/status HTTP/1.1
> Host: g7fzk2nx-3000.brs.devtunnels.ms
> User-Agent: curl/8.0.1
> Accept: */*
>
* schannel: failed to decrypt data, need more data
< HTTP/1.1 200 OK
< Date: Fri, 06 Oct 2023 22:21:55 GMT
< Content-Type: application/json; charset=utf-8
< Content-Length: 29
< Connection: keep-alive
< Cache-Control: no-cache,no-store
< ETag: "gtpg9kpjp5t"
< Expires: Thu, 01 Jan 1970 00:00:00 GMT
< Pragma: no-cache
< Set-Cookie: .Tunnels.Relay.WebForwarding.Cookies=CfDJ8M67rYfw57hCj5sJjtQyecGACcsmbprUlq7PDjhEuYAF3KMMjtTXhBsBugD8S3myA5BZz3mSYLgtQrQB6JgfMv3xEVEXKPCsIJCH8np_yclijSZEcv_--QMKjZTnk7Tyq3Va9fsssxIr42z_p9y-9IfZ9DMuMDzkE9419TVbInvl26hMg8QlmCzsfVL1ob9KMjpauEQ5P-FEg4R5mF5v_DVlpresFQgYu3DiAqpby39bPnuwwQoQrLYOkrjWowDP3ZpzMf-cxITO1-gy18ixsloY6AismmpAHbZcJCcCLBN2wFjI50LAtK2_3cam_S4RjeBqAxs2ZzR3hVk88x0WnTlo9DWWFJ7-Z1aYrf6DLxWL51GjMEmFQzx0tdU8tH7SMwSLuSz5pl1CkOF40aaMGGKPmnYMYQLmuujEQdosFGCh5V0fe8jrVzSts_GT2AFXGAaL0rEEkQwLOEKfBJyQLMtjN5TZ121C4ADDvdN-4RWfliF8Ao4fitHTMBXxZLqnWyLc9zUQtNLIBmXe46_8g5vBugIDWNAAPyQpGgMffFb-pg-30EDsmfHAouZqYBdc_TT0jXo7C44FZiJUU1_rAx2CFNr-NSDF9RFIoth9vG-1vysV2Z5Lmpb0-InMfQYAQ8EQz9CffmCKD2h9MIN1tY3qjqNtZibipc3gTB3AFyvUc0RU9d4fvxpMkGtVRHflNULALU69hQ8rjpNN6pWws-YeRTYyk1FAI2TaQEDAuHwFiYXLhWPmKr7rR24jemHa-L6u0DBjZbW30vW6iCs8DdUECTaE7yNA3GVp2FDq9t43cLFFi6INNfzerutns1nVTwFUDqFNb1Rg5TxLG2ZN0qCF_ru9EBs5u5g314XiEAMjc3BENb3iU25JSq0aGrptuQ; path=/; secure; samesite=none
< Vary: Accept-Encoding
< X-Content-Type-Options: nosniff
< RateLimit-Limit: HttpRequestRatePerPort:3000/m
< RateLimit-Remaining: HttpRequestRatePerPort:2999
< RateLimit-Reset: HttpRequestRatePerPort:36s
< X-Report-Abuse: https://msrc.microsoft.com/report/abuse
< x-ms-ratelimit-limit: 1500
< x-ms-ratelimit-remaining: 1498
< x-ms-ratelimit-used: 2
< x-ms-ratelimit-reset: 0
< X-Robots-Tag: noindex, nofollow
< Referrer-Policy: same-origin
< VsSaaS-Request-Id: bfc4f8e6-1011-41be-9c36-c450a3799eb7
< Strict-Transport-Security: max-age=31536000; includeSubDomains
< X-Served-By: tunnels-prod-rel-brs-v3-cluster
<
{"chave":"teste de resposta"}* Connection #0 to host g7fzk2nx-3000.brs.devtunnels.ms left intact
```

Observa-se que no canto esquerdo, existem **\*** (que determina os dados que estão sendo processados pelo `curl`), **>** (os dados que foram enviados ao servidor) e **<** (os dados que foram recebidos do servidor).

Uma das informações que se destacam é essa:
```bash
Content-Type: application/json; charset=utf-8
```

Onde há a menção que o tipo de conteúdo enviado pelo servidor foi um `json`, utilizando o `charset=utf-8`.

#### Glosário

- Cookies:

- Cabeçalhos:

- Status Codes:

### Não é Magia! (É protocolo)

Caso seja acessado o servidor da **Vercel**, onde vários sites estão hospedados, ele informará que o seu IP (registrado no A record) é `76.76.21.21`, porém, ao realizar o acesso dele através do `curl`, é obtido a seguinte resposta:

```bash
# O comando --insecure garante que o acesso não será seguro (ou seja, através de um certificado SSL)
curl https://76.76.21.21 --insecure --verbose

*   Trying 76.76.21.21:443...
* Connected to 76.76.21.21 (76.76.21.21) port 443 (#0)
* schannel: disabled automatic use of client certificate
* schannel: using IP address, SNI is not supported by OS.
* ALPN: offers http/1.1
* ALPN: server accepted http/1.1
* using HTTP/1.1
> GET / HTTP/1.1
> Host: 76.76.21.21
> User-Agent: curl/8.0.1
> Accept: */*
>
< HTTP/1.1 308 Permanent Redirect
< Cache-Control: public, max-age=0, must-revalidate
< Connection: keep-alive
< Content-Type: text/plain
< Date: Fri, 06 Oct 2023 23:01:21 GMT
< Location: https://vercel.com/
< Refresh: 0;url=https://vercel.com/
< Server: Vercel
< Strict-Transport-Security: max-age=63072000
< X-Vercel-Cache: MISS
< X-Vercel-Id: gru1::vf48p-1696633281779-3c186677fea1
< Transfer-Encoding: chunked
<
Redirecting...
* Connection #0 to host 76.76.21.21 left intact
```

Observa-se que ele fará o redirecionamento a própria página (`Location: https://vercel.com/`) ao invés de acessar qualquer página que possui hospedado. Isso acontece pois o servidor se comporta como um **Virtual Host**, ou seja, ele hospeda vários sites, e precisa da informação de qual página (`Host`) deseja-se acessar. Essa informação pode ser visualizada em: `Host: 76.76.21.21`. Caso o `Host` seja alterado para o site que deseja-se acessar, será obtido a resposta com o conteúdo do site desejado:

```bash
curl https://76.76.21.21 --insecure --verbose --header "Host: tabnewsv2.com.br"
*   Trying 76.76.21.21:443...
* Connected to 76.76.21.21 (76.76.21.21) port 443 (#0)
* schannel: disabled automatic use of client certificate
* schannel: using IP address, SNI is not supported by OS.
* ALPN: offers http/1.1
* ALPN: server accepted http/1.1
* using HTTP/1.1
> GET / HTTP/1.1
> Host: tabnewsv2.com.br
> User-Agent: curl/8.0.1
> Accept: */*
>
< HTTP/1.1 200 OK
< Accept-Ranges: bytes
< Access-Control-Allow-Origin: *
< Age: 1509
< Cache-Control: public, max-age=0, must-revalidate
< Connection: keep-alive
< Content-Disposition: inline
< Content-Length: 1134
< Content-Type: text/html; charset=utf-8
< Date: Fri, 06 Oct 2023 23:10:13 GMT
< Etag: "2f318d70fd36cabd13c8d4d91602f9ad"
< Server: Vercel
< Strict-Transport-Security: max-age=63072000
< X-Matched-Path: /
< X-Vercel-Cache: HIT
< X-Vercel-Id: gru1::h6qf2-1696633813201-9a2c7fc9463a
<
<!DOCTYPE html><html><head><meta charSet="utf-8"/><meta name="viewport" content="width=device-width"/><meta name="next-head-count" content="2"/><noscript data-n-css=""></noscript><script defer="" nomodule="" src="/_next/static/chunks/polyfills-c67a75d1b6f99dc8.js"></script><script src="/_next/static/chunks/webpack-8a59928dc61557b6.js" defer=""></script><script src="/_next/static/chunks/framework-eaa0f3520361d921.js" defer=""></script><script src="/_next/static/chunks/main-a0dca5a2ff5035f1.js" defer=""></script><script src="/_next/static/chunks/pages/_app-df511a3677d160f6.js" defer=""></script><script src="/_next/static/chunks/pages/index-05a4d87e35b130ef.js" defer=""></script><script src="/_next/static/x9OazioWh2hiS5QiVnAXY/_buildManifest.js" defer=""></script><script src="/_next/static/x9OazioWh2hiS5QiVnAXY/_ssgManifest.js" defer=""></script></head><body><div id="__next"><h1>Teste</h1></div><script id="__NEXT_DATA__" type="application/json">{"props":{"pageProps":{}},"page":"/","query":{},"buildId":"x9OazioWh2hiS5QiVnAXY","nextExport":true,"autoExport":true,"isFallback":false,"scriptLoader":[]}</script></body></html>* Connection #0 to host 76.76.21.21 left intact
```

### Versionamento de API e Endpoint "/status"

Movendo o arquivo `status.js` que estava na pasta `api` para o endereço `api/v1/status`, e renomeando o arquivo para `index.js` (portanto, o versionamento da API está utilizando o modelo URI Path Versioning).

Posteriormente, criando um arquivo de teste de integração (para testar o retorno do status) em `test/integration/api/v1/status` com o nome `get.test.js` (o nome utiliazdo é como base nos métodos HTTP (GET, POST, PUT, DELETE, PATCH, etc.)).

O script de teste utilizado é:
```js
test("GET to api/v1/status: 200", async () => {
	const response = await fetch("https://g7fzk2nx-3000.brs.devtunnels.ms/api/v1/status");

	expect(response.status).toBe(200);
});
```

Neste script é possível observar 3 comandos:
- `fetch`: comando que permite realizar uma requisição ("Client") HTTP para um determinado site. Ao utilizar junto com o `status()`, retornará o código de status da conexão (espera-se 200);
- `await`: utilizado para aguardar uma resposta do método/função que foi chamada (neste exemplo, espera-se que a requisição `fetch`retorne um valor para ser armazenado em `response`). `await` somente pode ser utilizado dentro de funções **assíncronas**;
`async`: força o método ser assíncrono (pois a requisição HTTP não tem momento certo para ser concluído).

#### Glosário

- Breaking Changing: Quando uma API perde a compatibilidade com os scripts anteriores (Backward Compatibility), como por exemplo, um script que esperava anteriormente um dado do tipo **String** e agora passa a receber um objeto, ou, um script que possuia uma declaração de uma variável que era externalizada, e agora apresenta seu nome modificado.

- Non-breaking Changing: É a adição de novas propriedades às APIs que não provoca a quebra do scripts.

- URI Path Versioning: O versionamento das APIs é feito utilizando o próprio endereçamento.<br>
Ex:
```bash
# A utilização de APIs em versões diferentes, sem ocasionar a quebra em scripts que utilizem a API de uma versão mais antiga

https://www.tabnews.com.br/api/v1/contents
https://www.tabnews.com.br/api/v2/contents
```

- Header Versioning: O cliente, ao se conectar com o servidor, informa quais são as versões de APIs que estará utilizando através de uma requisição, informando através de um arquivo de cabeçalho, quais são as versões desejadas.<br>
Ex:
```bash
# Exemplos de versionamento

Accepts-Version: 1.5

# ou

Accepts-Version: 2023-09-21
```
