# TabNews
Curso do Filipe Deschamps

## Dia 14 - Inauguração da Milestone 1 - Fundação

### Índice

- [PoC e MVP ajudam mesmo?](#poc-e-mvp-ajudam-mesmo)
- [Inauguração Milestone 1: Fundação](#inauguração-milestone-1-fundação)
- [Uma história macabra sobre "Overengineering"](#uma-história-macabra-sobre-overengineering)
- [Proposta de Arquitetura e Pastas](#proposta-de-arquitetura-e-pastas)

### PoC e MVP ajudam mesmo?

- PoC (Proof of Concept - Prova de Conceito): é um projeto ou experimento que é conduzido com o objetivo de demonstrar a viabilidade técnica ou prática de uma ideia ou conceito em particular. Em outras palavras, uma PoC é usada para testar se uma determinada ideia, tecnologia ou abordagem pode funcionar na prática antes de ser implementada em larga escala ou antes de um investimento significativo ser feito.<br>
<br>
A PoC geralmente envolve a criação de um protótipo ou modelo inicial que demonstre as funcionalidades-chave ou a eficácia do conceito em questão. Isso pode ser feito de maneira limitada e com recursos mínimos, apenas para verificar se a ideia é viável e se vale a pena investir mais tempo, esforço e recursos nela.<br>
<br>
As PoCs ajudam a reduzir o risco de implementar uma ideia que pode não funcionar na prática, economizando tempo e recursos valiosos. Se uma PoC for bem-sucedida, ela pode ser usada como base para desenvolver um projeto maior e mais completo. Caso contrário, pode-se decidir abandonar a ideia ou ajustá-la com base nos resultados.

- MVP (Minimum Viable Product - Produto Viável Mínimo): é uma versão simplificada de um produto ou serviço que é lançada no mercado com o mínimo de recursos necessários para atender às necessidades básicas dos clientes. O objetivo principal de uma MVP é validar uma ideia de negócio, coletar feedback dos usuários e aprender com as interações do mercado, antes de investir recursos significativos no desenvolvimento de uma versão completa do produto.<br>
<br>
A ideia por trás de uma MVP é criar algo funcional o suficiente para que os clientes possam experimentá-lo e usar suas funcionalidades principais, mas sem adicionar todos os recursos, detalhes e polimentos que uma versão final teria. Isso permite que as empresas testem suas hipóteses de mercado, verifiquem a aceitação do público-alvo e ajustem o produto com base no feedback real dos usuários.<br>
<br>
Uma MVP geralmente inclui apenas os recursos essenciais que resolvem o problema ou atendem à necessidade do cliente de forma básica. À medida que a MVP é testada e os feedbacks são coletados, a equipe de desenvolvimento pode iterar e aprimorar o produto com base nas informações recebidas. Isso ajuda a evitar o desenvolvimento excessivo de recursos que os clientes podem não querer ou usar.<br>
<br>
Em resumo, uma MVP é uma abordagem estratégica para o desenvolvimento de produtos que prioriza o lançamento rápido e a aprendizagem com o mercado, em vez de gastar tempo e recursos significativos em um produto completo desde o início.

### Inauguração Milestone 1: Fundação

- Arquitetura de Software: área que se concentra na estrutura fundamental, organização e design de sistemas de software. Ela envolve a criação de uma estrutura conceitual e técnica para um sistema de software, definindo como os diferentes componentes do software interagem entre si, como os dados são gerenciados e como as tarefas são executadas. Em termos simples, a arquitetura de software é a "planta baixa" ou o "projeto arquitetônico" de um sistema de software.<br>
<br>
Existem várias abordagens e estilos de arquitetura de software, incluindo:

	- Arquitetura em camadas: Divide o sistema em camadas distintas, com cada camada responsável por uma funcionalidade específica.
	- Arquitetura orientada a serviços: Baseada na ideia de que as funcionalidades do sistema são disponibilizadas como serviços independentes que podem ser acessados por outros componentes.
	- Arquitetura de microsserviços: Divide um sistema em pequenos serviços independentes, cada um executando uma função específica, permitindo escalabilidade e manutenção facilitada.
	- Arquitetura monolítica: O sistema é construído como um único bloco de código, onde todas as funcionalidades estão integradas em um único aplicativo.
	- Arquitetura orientada a eventos: Baseada na comunicação entre componentes por meio de eventos, que desencadeiam ações em resposta a mudanças de estado.

#### Glosário

- WebSockets: é um protocolo de comunicação bidirecional **baseado em TCP** que permite a comunicação em tempo real entre um cliente e um servidor através da Web. Ele fornece uma maneira de estabelecer uma conexão persistente e em tempo real entre um navegador da web (cliente) e um servidor da web, permitindo que dados sejam transmitidos em ambos os sentidos, sem a necessidade de solicitações adicionais de rede.<br>
<br>
Ao contrário do HTTP, que é um protocolo de comunicação unidirecional, onde o cliente faz uma solicitação e o servidor envia uma resposta, o WebSocket permite que o servidor envie dados para o cliente a qualquer momento, sem que o cliente tenha que solicitar esses dados.<br>
<br>
O WebSocket é especialmente útil para aplicativos da web em tempo real, como jogos online, bate-papo, notificações em tempo real e transmissão de vídeo. Ele é suportado por todos os navegadores modernos e é implementado usando uma API simples em JavaScript.


### Uma história macabra sobre "Overengineering"

A complexidade de um código acompanha a sua experiência (ou Tempo de Carreira) na área. A curva real assemelha-se:

![Curva Real de Complexidade do Código vs. Tempo de Carreira](Imagens/34.%20Complexidade%20vs%20Tempo%20de%20Carreira%20(Real).PNG)

Porém, o ideal é que a complexidade do código se ajuste de acordo com a complexidade naquilo que deseja-se implementar (ou seja, a complexidade tem relação com o contexto e o projeto desenvolvido):

![Curva Ideal de Complexidade do Código vs. Tempo de Carreira](Imagens/35.%20Complexidade%20vs%20Tempo%20de%20Carreira%20(Ideal).PNG)

A faixa azul determina a região o local em que a complexidade do código deveria estar localizada, caso contrário, pode haver o que denomina-se como **Overengineering** (quando acrescenta complexidade ao código de forma desnecessária) e **Underengineering** (quando a complexidade deixa a desejar, quase produzindo o equivalente a um *código mal-feito*).

![Overengineering e Underengineering](Imagens/36.%20Overengineering%20e%20Underengineering.PNG)

Produzir código complexo é mais fácil do que produzir código simples e bem-feito, pois a natureza do mundo é complexa, logo, ao realizar um projeto, é mais fácil transferir a complexidade do mundo ao código.

Critérios utilizados (por exemplo), para escolher uma ferramenta (como uma linguagem de programação) na solução (ou desenvolvimento) de um projeto:

1. Maturidade da equipe com a ferramenta que será utilizada;
2. Contratação de novas pessoas na respectiva ferramenta;
3. Documentação disponível (e a qualidade dela)sobre a ferramenta;
4. Aplicação (verificando se ela se aplica para o contexto desejado).

A ferramenta mais adequada para o desenvolvimento de um projeto deve ser tomado principalmente no quão **modificável** ele é (levando em consideração os itens anteriores), ou seja, a equipe tem que ser capaz de mofificar um projeto no curto, médio e longo prazo.

### Proposta de Arquitetura e Pastas

O que define uma **Arquitetura de Software** é o escopo dos componentes (onde começa e onde termina) e a interação entre eles. Cada arquitetura basicamente é uma tentativa diferente de definir o escopo e as interações entre os componentes.

Um arquitetura de software simples com uma ótima modelagem pode fazer com que um projeto vá muito longe.

Arquitetura de pastas adotada no projeto:

📦 root<br>
├ 📁 pages<br>
│ └ 📃 index.js<br>
├ 📁 models → Guarda entidades<br>
│ ├ 📃 user.js → Regras de usuário no sistema<br>
│ ├ 📃 content.js → Define o comportamento dos conteúdos publicados<br>
│ └ 📃 password.js → Regras de como esse dado “sensível” é gerado<br>
├ 📁 infra → Responsável pela infraestrutura<br>
│ ├ 📃 database.js → Biblioteca de conexão com o banco de dados<br>
│ ├ 📁 migrations<br>
│ ├ 📁 provisioning<br>
│ │ ├ 📁 staging → Homologação<br>
│ │ └ 📁 production → Infra como código, usando Teraform para subir o banco de dados em outros ambientes<br>
└ 📁 tests → Guarda os testes automatizados<br>

#### Glosário

- MVC (Model-View-Controller): padrão de arquitetura de software é amplamente utilizado no desenvolvimento de aplicativos e sistemas de software. O objetivo deste padrão é separar as diferentes preocupações do aplicativo em componentes distintos, tornando o código mais organizado, reutilizável e fácil de manter. Ele é mais comum de ser encontrado em tecnologias de desenvolvimento Web.<br>

	1. Model: lida com a manipulação e gerenciamento dos dados, bem como a lógica por trás das operações (como se comunicar com o banco de dados, recuperar informações, manipular dados que serão exibidos, etc.);

	2. View: responsável apenas pela apresentação da interteface do usuário e a interação com ele;

	3. Controller: atua como um intermediário entre o **Model** e **View**, será responsável por realizar o processamento, interagir com o **Model** para atualização do **View**.

<br>

- Clean Architecture: padrão de arquitetura de sofrware, que possui a proposta de projetar sistemas altamente testáveis, independente de frameworks e bibliotecas, com uma estrutura bem definida e organizada.<br>
A principal idéia é a separação clara das preocupações e definição de camadas com responsabilidades distintas. As camadas são:<br>

	1. Camada de Entidade;
	2. Camada de Casos de Uso;
	3. Camada de Interface do Usuário;
	4. Camada de Framework e Drivers Externos.
