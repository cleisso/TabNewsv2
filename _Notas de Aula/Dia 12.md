# TabNews
Curso do Filipe Deschamps

## Dia 12 - DNS (Domain Name System) - Prática

### Índice
- [Introdução](#introdução)
- [Registrar um Próprio Domínio](#registrar-um-próprio-domínio)
- [Configurar o Servidor de DNS (ou Servidor Autoritativo)](#configurar-o-servidor-de-dns-ou-servidor-autoritativo)
- ["Chorinho" sobre Servidor DNS](#chorinho-sobre-servidor-dns)

### Introdução

1. Comprar (de verdade) um domínio `.com.br`
2. Configurar o Servidor Autoritativo
3. Aula extra (Capture The Flag): Registros DNS

### Registrar um Próprio Domínio

- Ambiente de Produção: local onde os usuários finais acessam;
- Ambiente de Homologação: local onde é validado as modificações em um site.

Para registrar um domínio, necessitamos ter acesso a um `Registrar (ou Registrador)`, que é uma entidade (de vínculo comercial) que fará a interface entre o `Registrant (ou Registrante, no caso você)` a um servidor TLD.

O `Register` utilizado será o [`registro.br`](registro.br) (entidade nacional que realiza essa interface além de ser um dos órgaos reguladores). Existem outros `Registradores credenciados` disponíveis, como
- HostGator;
- Uol Host;
- Locaweb;
- etc.

Todos os registros de domínio finalizados em `.br` são armazenados no `Registry (ou Registro)`, que é gerenciado pela [NIC.br (Núcleo de Informação e Coordenação do Ponto BR)](nic.br)

Dessa forma, ao encontrar um domínio não utilizado, o `Registry` irá atualizará os apontadores de Authoritative Server do servidor TLD (que também é mantido pela NIC.br), e assim, todos poderão acessar o site via web.

Fluxo do registro de um domínio `.br`:

![Fluxo do registro de um domínio .br](Imagens/27.%20Registrando%20um%20dominio.PNG)

**OBS 1:** Ao registrar um domínio, certifique-se que as informações pessoais estão corretas, pois, caso contrário, as mudanças somente ocorrerão após a apresentação de documentação.

**OBS 2:** Ao realizar a contratação de um domínio, enviar os dados de contração ao Felipe através do seguinte e-mail: [contato@curso.dev](contato@curso.dev)

- [Ferramenta que analisa o endereço do IP atual do nome de domínio e os registros de DNS em múltiplos servidores localizados no mundo (DNS Propagation Checker)](whatsmydns.net)

Tipos de **DNS Record**:

- A: Representa um endereço IPv4. Exemplo: *meudominio.com.br A 200.160.10.251*
- AAAA: Representa um endereço IPv6. Exemplo: *meudominio.com.br AAAA 2001:12ff:0:2::3*
- CNAME: Indica um nome alternativo. Exemplo: *meudominio.com.br CNAME meublog.example.com*
- MX: Representa um nome para um servidor de e-mail. Exemplo: *meudominio.com.br MX mail-server.example.com*
- TXT: Informações de texto livre

#### Como registrar um domínio se o documento já está vinculado a outro provedor

O `Registro.br` é o órgão responsável pelo registro de domínios nacionais (.br), e de acordo com a política de registro estabelecida por eles, todos os domínios registrados e vinculados com o CPF ou CNPJ tem que ter um único provedor responsável pelo registro e manutenção dos domínios. 

Isso significa que se você registrou um domínio nacional (.br) no `Registro.br` com um determinado CPF/ CNPJ e deseja registrar outro domínio agora na HostGator usando o mesmo documento, antes será necessário ir até o Registro.br e alterar o provedor de serviços para HostGator (se não fizer essa alteração, haverá falha no processo de registro)

Confira como alterar o provedor na `Registro.br`:

1. Acesse sua conta no `Registro.br`;
2. No painel do `Registro.br`, clique sobre `Titularidade`;
3. Em seguida, clique sobre o `nome do titular ou documento`;

![Titularidade - Parte 1](Imagens/28.%20Titularidade%20(Parte%201).png)

4. Na nova tela, role a página até a seção `Provedor de Serviços` e clique em `Alterar Provedor`;

![Titularidade - Parte 2](Imagens/29.%20Titularidade%20(Parte%202).png)

5. Selecione como provedor a opção `NEWFOLD (43)`;

6. Em seguida, clique em `Continuar`;

![Titularidade - Parte 3](Imagens/30.%20Titularidade%20(Parte%203).png)

7. Escolha como deseja gerenciá-los:

	- **Manter sob administração do provedor de serviços atual:** Recomendamos escolher esta opção, pois somente os novos domínios serão registrados para `Newfold (43)`;

    - **Passar para administração do novo provedor de serviços:** Todos os domínios (novos e antigos) serão registrados para Newfold (43).

8. Para confirmar a alteração do provedor, clique em `Confirmar`:

![Titularidade - Parte 4](Imagens/31.%20Titularidade%20(Parte%204).png)

9. Após alteração, realize o registro do domínio através de **outro provedor de hospedagem**.

#### Glosário

- NIC: Núcleo de Informação e Coordenação do Ponto BR. Entidade civil, sem fins lucrativos, que tem as funções administrativas e operacionais relativas ao domínio `.br.`

### Configurar o Servidor de DNS (ou Servidor Autoritativo)

Quando realizar o registro do domínio, a seguinte situação será observada:

![Situação Atual do Registro de Domínio](Imagens/32.%20Situação%20Atual%20do%20Registro%20do%20Dominio.png)

1. Eu entrei em contato com o Provedor de Hospedagem `registro.br`, registrando um domínio específico;
2. O `registro.br` irá atualizar os registros da `NIC.br` com o respectivo domínio;
3. A `NIC.br` irá atualizar os registros dos servidor TLD, fazendo ele apontar para um dos `Authoritative Servers` que saberão onde (em qual IP) está localizado o domínio específico (o servidor TLD apenas apontará para um dos Authoritative Server da `registro.br`, que acabará novamente redirecionando o acesso ao site `registro.br`, pois o servidor TLD necessita ser configurado corretamente para ele apontar para o Authoritative Server correto que apontará para a correta aplicação - que está na Vercel).

Portanto, devemos configurar os servidores TLD para que eles apontem corretamente para o correto Authoritative Server, e este por sua vez redirecione o acesso ao site desejado.

![Situação Desejada do Registro de Domínio](Imagens/33.%20Situação%20Desejada%20do%20Registro%20do%20Dominio.png)

Como foi registrado o domínio no provedor `registro.br`, devemos configurá-lo para que ele aponte para os servidores de DNS (Nameservers), e estes, por sua vez, saberão encaminhar a conexão ao respectivo site.

### "Chorinho" sobre Servidor DNS

1. Authoritative Server também é conhecido como Authoritative Nameserver.

2. Há uma ferramenta para sistemas Linux denominada `dig` (abreviação para **Domain Information Grouper**) que a possui a finalidade de consultar DNS. Ele é utilizado para solucionar e exibir informações DNS.<br>
Para utilizar o `dig` em sistemas Windows, é necessário baixar o utilitário (e utilizar junto com o MSYS2) através do **ISC (Internet System Consortium)**.<br>
O pacote de programas é denominado [BIND 9](https://downloads.isc.org/isc/bind9/9.14.8/BIND9.14.8.x64.zip), e ao extrair o seu conteúdo, deve-se copiar o executável `dig.exe` e todas as `*.dll` para a pasta `\msys64\usr\bin`.<br>
Para testar o comando `dig`, digitar no `shell` (é exibido em seguida um resumo da resposta fornecida por ele):
``` bash
$ dig

; <<>> DiG 9.14.8 <<>>

;; ADDITIONAL SECTION:
l.root-servers.net.     3086    IN      A       199.7.83.42
a.root-servers.net.     33290   IN      A       198.41.0.4
a.root-servers.net.     6789    IN      AAAA    2001:503:ba3e::2:30
b.root-servers.net.     36738   IN      A       199.9.14.201
c.root-servers.net.     41146   IN      A       192.33.4.12
d.root-servers.net.     10824   IN      A       199.7.91.13
e.root-servers.net.     1119    IN      A       192.203.230.10
e.root-servers.net.     63420   IN      AAAA    2001:500:a8::e
f.root-servers.net.     32238   IN      A       192.5.5.241
g.root-servers.net.     1242    IN      A       192.112.36.4
g.root-servers.net.     63420   IN      AAAA    2001:500:12::d0d
h.root-servers.net.     38968   IN      A       198.97.190.53
i.root-servers.net.     63552   IN      A       192.36.148.17
j.root-servers.net.     16676   IN      A       192.58.128.30

;; Query time: 3 msec
;; SERVER: 10.189.87.7#53(10.189.87.7)
;; WHEN: Tue Sep 26 13:49:10 Hora oficial do Brasil 2023
;; MSG SIZE  rcvd: 512
```

É possivel notar que o comando `dig` irá retornar os endereços IPv4 dos **Root Servers**.

3. Ao acessar o IP do **Authoritative Server** da Vercel (cujo o número é: `76.76.21.21`) e utilizar o `dig` para realizar uma **request** para ele, deveríamos obter o respectivo IP, porém, este são dos dados que foram obtidos:
``` bash
$ dig fintab.com.br A

;; ANSWER SECTION:
fintab.com.br.          597     IN      A       76.76.21.9
fintab.com.br.          597     IN      A       76.76.21.22
```

Observa-se que os IPs obtidos são levemente diferentes do IP esperado. Isso acontece pois a Vercel utiliza um sistema denominado **GeoDNS**, que é um sistema onde existem vários servidores Web espalhados geograficamente pelo mundo, e a Vercel fornecerá um IP mais próximo da localização geográfica de quem está realizando a requisição.

Para mais detalhes de na resolução do caminho realizado para acessar o respectivo dominio é:
``` bash
dig fintab.com.br A +trace
```

#### Desafio 1 - Capture The Flag (Resposta)

1. Realizar uma requisição ao domínio `curso.dev` por uma `DNS Record` do tipo `TXT`. O resultado obtido foi:
``` bash
curso.dev. 300 IN TXT "HA! Voce me encontrou, mas o desafio ainda nao terminou, a bandeira esta aqui: aHR0cHM6Ly9jdXJzby5kZXYvd2ViL2Rucy1oNGNrM3I="

curso.dev. 300 IN TXT "v=spf1 include:_spf.google.com ~all"
```

Se for observado, existe um dado codificado na mensagem (`aHR0cHM6Ly9jdXJzby5kZXYvd2ViL2Rucy1oNGNrM3I=`).

2. Acessar qualquer site capaz de decodificar a mensagem (utilizando o formato `Base64`). Uma outra possibilidade é utilizar o console do navagador e utilizar o seguinte comando:
```js
atob("aHR0cHM6Ly9jdXJzby5kZXYvd2ViL2Rucy1oNGNrM3I=")
```
> ***Base64*** é uma codificação utilizada em transferências via Internet, anexos de e-mail, etc.

> ***atob()*** é um função que decodifica uma string de dados que foi codificada através da codificação base-64. Você pode usar o método ***btoa()*** para codificar e transmitir dados que, se não codificados, podem causar problemas de comunicação. Após transmití-los pode-se usar o método ***atob()*** para decodificar os dados novamente.

3. O resultado obtido é: `https://curso.dev/web/dns-h4ck3r`

#### Desafio 2 - O que aconteceria se o Servidor Autoritativo estivesse fora do ar?

Caso um servidor autoritativo fique indisponível temos outro servidor em redundância por isso a configuração de mais de um servidor como `NS` exemplo o `ns1.vercel-dns.com.` e `ns2.vercel-dns.com.`

Caso os dois servidores fiquem indisponiveis ainda teremos o cache que tem sua vida útil marcada pelo **TTL** do registro em questão.

Caso o cache expire então a **query** para o registro de DNS ira falhar.

Uma historia legal sobre servidores DNS fora do ar ou nesse caso DNS que não estavam respondendo as alterações é [**A queda de 6 horas do Facebook, Whatsapp e Instagram**](https://blog.cloudflare.com/october-2021-facebook-outage/).
