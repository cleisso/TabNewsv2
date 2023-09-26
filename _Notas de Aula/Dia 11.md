# TabNews
Curso do Filipe Deschamps

## Dia 11 - DNS (Domain Name System) - Teoria

### Índice
- [Resolução de DNS (Desafio Nível 1)](#resolução-de-dns-desafio-nível-1)
- [Resolução de DNS (Desafio Nível 2)](#resolução-de-dns-desafio-nível-2)

### Resolução de DNS (Desafio Nível 1)

DNS é a principal porta de entrada para um serviço. DNS é a sigla para **Domain Name System (Sistema de Nomes de Domínio)**.

google.com.br, youtube.com, curso.dev, entre outros, são apelidos dados a um IP (Internet Protocol) de um serviço.
Os computadores ao se conectarem a um determinado domínio, ele não consegue fazer isso através do seu "apelido", apenas através de seu IP. Para isso o computador, ao tentar acessar um site, ele faz a requisição (request) do número de IP a um servidor DNS, que por sua vez, retorna o número de IP ao computador, e através deste, acessar o domínio desejado.

Exemplo de DNS:<br>
![Exemplo de DNS](Imagens/22.%20DNS.PNG)

Sequência incorreta do mecanismo de funcionamento de um servidor DNS:<br>
![Sequência incorreta do funcionamento do DNS](Imagens/23.%20Sequencia%20Incorreta%20do%20Funcionamento%20do%20DNS.PNG)<br>
**Não é o servidor DNS que acessa o servidor final!**

Sequência correta do mecanismo de funcionamento de um servidor DNS:<br>
![Sequência correta do funcionamento do DNS](Imagens/24.%20Sequencia%20Correta%20do%20Funcionamento%20do%20DNS.PNG)<br>

*Analogia entre contatos de uma agenda telefônica e os apelidos de site. É muito mais fácil se recordar de um nome (como o nome de um contato ou de um site) do que lembrar de seu número (como o nº de telefone ou o IP)*

**Desafio Nível 1:** Encontrar o link da próxima aula.<br>
**Resposta:** Como a aula se trata sobre DNS, o objetivo é encontrar o link da próxima aula. O link dessa aula tem o seguinte formato: `curso.dev/web/resolucao-dns-nivel-1`. O objetivo é encontrar o **Desafio Nível 2**, portanto, a solução é simplesmente alterar o link desta aula para: `curso.dev/web/resolucao-dns-nivel-2`.

#### Glosário

- Cloudflare: é uma empresa de serviços de segurança e desempenho na internet. Alguns do serviços que ele oferece:
	- CDN (Content Delivery Network): ajuda na aceleração de entrega de conteúdo web;
	- Firewall de Aplicação Web (WAF): protege sites contra ataques cibernéticos, como **SQL Injection**, **Cross-Site Scripting (XSS)**, entre outros;
	- Proteção contra DDoS: proteção contra ataques distribuídos de negação de serviço (DDoS);
	- SSL/TSL: criptografia de comunicação entre o site e o usuário;
	- Load Balancing: balanceamento de cargas e distribuição de tráfego entre servidores;
	- Aceleração de Aplicativos;
	- Acesso a Rede Privada (VPN).

- DoS: Denial of Service é um tipo de ataque cibernético, com a intenção de tornar algum site ou serviço indisponível. O ataque é produzido a partir de um único computador, tentando sobrecarregar um serviço realizando diversas solicitações até esgotar seus recursos.

- DDoS: Distributed Denial of Serice é um tipo de ataque cibernético, com a intenção de tornar algum site ou serviço indisponível. O ataque é produzido a partir de diversos computadores distribuídos geograficamente, coordenadamente e simultaneamente a um alvo específico. A diferença entre DoS e DDoS está apenas na escala e na distribuição dos ataques.

- Ataque de Negação: Um ataque de negação, em termos gerais, refere-se a qualquer tentativa de impedir que um sistema, serviço ou recurso esteja disponível para os usuários legítimos. Em resumo, DoS e DDoS são alguns dos tipos de ataques de negação que podem ser realizados (existem outros).

### Resolução de DNS (Desafio Nível 2)

#### Como descobrir o IP de um site através de seu domínio?

Quando desejamos acessar um site, realizamos o acesso dele através de um navegador e digitamos o seu nome. O acesso se dará através do IP, porém, o navegador (e o computador local) desconhece essa informação.

Nesse momento, o computador realiza uma requisição ao **Recursive Resolver** disponibilizada pelo **Provedor de Internet**. O **Recursive Resolver** irá realizar uma requisição aos **Root Servers** para identificar o IP do site desejado. Caso o **Root Server** não saiba, ele fará o processamento da URL informada, e através dele identificar qual **servidor de TLD** será capaz de responder a requisição.

> Existem 13 conjuntos de Root Servers operados por várias organizações e espalhados em todo mundo, identificados de A a M.

Para o **Root Server** conseguir identificar qual **servidor TLD** utilizar, ele fará o processamento da URL de trás para frente. Por exemplo, caso desejamos acessar o site da UOL: `www.uol.com.br`, primeiramente o domínio será lido como `.br.com.uol.www` (ou seja, `www.uol.com.br.`). A URL com o ponto final é conhecido como **FQDN (Nome de Domínio Completamente Qualificado)**. Este ponto apenas representa o **Root Server** e geralmente é omitido (porém, importante para o correto processamento da URL).

Após o ponto final, o primeiro trecho da URL identifica o **servidor TLD**, podendo ser: `.br`, `.com`, `.gov`, etc.

Para mais detalhes, conferir a imagem abaixo:

![FQDN](Imagens/26.%20FQDN.png)

Uma vez identificado o **servidor TLD**, essa informação retorna ao **Recursive Resolver**, que fará uma solicitação do IP do site desejado ao respectivo **servidor TLD** (como desejamos acessar o site `www.uol.com.br`, então o **servidor TLD** selecionado é o `.br`).

O **servidor TLD** também não saberá o IP da URL desejada, pois a sua finalidade é fornecer um IP para um de seus **Authoritative Servers** (ou **Servidores de Nomes Autoritativos**). Então, novamente, o **Recursive Resolver**, na posse do IP de um **Authoritative Server**, realiza a solicitação do IP da URL desejada. Os **Authoritative Servers** possuem uma série de registros de IP para determinadas URLs de seus respectivo **TLD**. Encontrando a URL em seus registros, retorna ao **Recursive Resolver** o IP da URL desejada (neste caso, o IP do site `www.uol.com.br`, que pode ser `13.227.97.12` , `13.227.97.39` , `13.227.97.59` ou `13.227.97.71` ).

Fluxo completo da sequência de funcionamento de um DNS:<br>
![Fluxo completo da sequência de funcionamento de um DNS](Imagens/25.%20Fluxo%20Completo%20da%20Sequencia%20de%20Funcionamento%20do%20DNS.png)

***Explicação oferecida pelo o Chat GPT de como funciona o fluxo de conversão de um domínio em IP:***

> *Aqui está como funciona o processo de resolução de nomes de domínio com um resolvedor recursivo:*<br>
> - ***Cliente DNS**: Um dispositivo, como um computador ou smartphone, precisa traduzir um nome de domínio (por exemplo, www.example.com) em um endereço IP para acessar um site ou serviço na Internet.*<br><br>
> - ***Consulta DNS**: O cliente envia uma consulta DNS para o seu servidor DNS local ou ISP (provedor de serviços de Internet).*<br><br>
> - ***Resolvedor Recursivo**: O servidor DNS local encaminha a consulta para um resolvedor recursivo. Este resolvedor é geralmente mantido por seu provedor de serviços de Internet ou por um serviço de DNS público, como o Google DNS ou o OpenDNS.*<br><br>
> - ***Resolução Recursiva**: O resolvedor recursivo começa a procurar a resposta. Ele consulta servidores raiz DNS, servidores de autoridade de domínio e outros servidores intermediários, seguindo uma série de consultas até encontrar o endereço IP associado ao nome de domínio solicitado.*<br><br>
> - ***Resposta ao Cliente**: Após encontrar a resposta, o resolvedor recursivo retorna o endereço IP ao servidor DNS local, que, por sua vez, fornece a resposta ao cliente.*<br><br>

> *O resolvedor recursivo é responsável por todo o trabalho pesado de consulta de servidores DNS e resolução de nomes de domínio em endereços IP. Ele ajuda a acelerar a resolução de nomes de domínio ao armazenar em cache as respostas para consultas frequentes, reduzindo assim a sobrecarga na infraestrutura de DNS e melhorando a eficiência da navegação na web.*<br><br>
> *É importante notar que os provedores de serviços de Internet e outros operadores de redes geralmente implementam resolvedores recursivos para seus usuários como parte de sua infraestrutura de rede, garantindo que as consultas de DNS sejam processadas de maneira rápida e eficaz.*

#### Glosário

- Recursive Resolver: tem a finalidade na resolução de nomes de domínios em endereços IP. Ele fará consultas DNS de forma recursiva em outros servidores DNS em nome do cliente para encontrar o endereço IP associado a um nome de domínio específico.

- Root Servers: Armazena informações sobre os servidores de TLD (Top-Level Domains). Os servidores TLD armazenarão o seu próprio conjunto de servidores que gerenciam os registros de domínios para o seu respectivo TLD.

- Fully Qualified Domain Name (FQDN ou Nome de Domínio Completamente Qualificado): é um termo usado para se referir a um nome de domínio de forma completa e específica na hierarquia do DNS.

- Root Domain: O mesmo que **TLD**.

- TLD (Top-Level Domain):  
	- ccTLD (Country Code Top-Level Domain): são TLDs reservados para os países, como `.ca` (Canadá), `.br` (Brasil), `.pt` (Portugal), etc.
	- gTLD (Generic Top-Level Domain): são TLDs reservadas para uso genérico, como `.com` (Comercial), `.gov` (Governo), `org` (Organizações), etc.

- ICANN (Internet Corporation for Assigned Names and Numbers): uma organização sem fins lucrativos que desempenha um papel fundamental na coordenação e supervisão dos recursos críticos da Internet, como nomes de domínio e endereços IP. Saõ eles que gerenciam os **servidores TLD**.

- Authoritative Server: responsável por manter informações precisas e atualizadas sobre os registros de domínio para um domínio específico ou subdomínio e responder a consultas DNS relacionadas a esse domínio de forma autoritativa. Para um determinado domínio, geralmente existem mais de um Authoritative Server, e eles são identificados através de sub-domínios anexados a URL (chamados de **name servers**), como por exemplo: `ns1.site.com`, `ns2.site.com`, `ns3.site.com`, onde cada ***ns**** representa um Authoritative Server capaz de fornecer o IP do domínio desejado.

- TTL (Time to Live): Tempo que um registro deve ser mantido em cache por qualquer um dos servidores. Quando há uma solicitação de um IP para um servidor, para acelerar o processo, os servidores mantém um registro já com a resposta de uma infinidade de IPs que usualmente são acessados, assim, eliminando a necessidade de uma solicitação precisar realizar todo o tráfego de solicitações para obter o IP.

#### [Site didático contendo uma breve explicação de como o DNS funciona.](https://howdns.works/pt-br/)
