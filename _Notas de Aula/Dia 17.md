# TabNews
Curso do Filipe Deschamps

## Dia 17 - Banco de Dados (PostgreSQL) e Docker

### Índice

- [Introdução](#introdução)
- [Por que o Docker dominou o mundo?](#por-que-o-docker-dominou-o-mundo)
- [Subir Banco de Dados (Local)](#subir-banco-de-dados-local)
- [Se conectando no Banco de Dados (Local)](#se-conectando-no-banco-de-dados-local)

### Introdução

- DBMS: Data Base Management System (ou SGBD - Sistema de Gerenciamento de Banco de Dados). Alguns DBMS:
	- MySQL;
	- PostgreSQL;
	- Oracle Database;
	- Microsoft SQL Server;
	- MongoDB.
	
	DBMS ainda podem ser do tipo:
	- Relacional (SQL):

	- Não Relacional (NoSQL): Podendo serem do subtipo:
		- Armazenamento de Documentos;
		- Armazenamento Chave-Valor (JSON)

	- Série Temporal:

	- Espacial:

	Alguns comandos:
	- SELECT
	- INSERT
	- UPDATE
	- DELETE

- Query: Consultar.
	- ORM: Object-Relational Mapping (ou Mapeamento Objeto-Relacional). Conecta o banco de dados a objetos (que poderão ser manipulados via programação). Ele proporciona várias abstrações (permitindo integrá-lo com diversos bancos de dados), de tal forma que a sintaxe por trás dos bancos de dados seja menos relevante, e seu conteúdo seja acessado via métodos e armazenados em objetos. Um tipo de ORM é o **Sequelize**.<br>
	Será utilizado o **pg** como ponto de conexão entre o banco de dados e a aplicação.

- Migrations: Migrações. Um arquivo que apresenta instruções das modificações a serem realizadas na estrutura de um banco de dados.<br>
Será utilizado o **node-pg-migrate** para gerenciar as Migrations.

- SQL: Structured Query Language (ou Linguagem de Consulta Estruturada).

- Lambdas: São espaços de processamento isolado que podem ser iniciados/finalizados, podendo operar de forma paralelamente, sem "limitações".

### Por que o Docker dominou o mundo?

Inicialmente, quando necessitava realizar a instalação de algum serviço (como o banco de dados), era comum as pessoas realizarem a configuração a partir de tutoriais, porém, uma das coisas que aconteciam era que, apesar das configurações serem exatamente iguais, o desempenho algumas vezes era totalmente diferente. Isso se dava devido:

- Sistemas operacionais diferentes;
- Versões de sistemas operacionais;
- Atualizações do sistema operacional;
- Anti-vírus;
- Fuso-horário;
- Idioma utilizado no sistema operacional;
- Hardware (principalmente);
- Demais softwares que já estão instalados;
- Patchs de segurança;
- etc.

O maior problema disso é que essas inconscistências iam se acumulando conforme a complexidade fosse aumentando, até um ponto em que os testes automatizados começavam a falhar ou os serviços não ser comportavam mais da maneira esperada.

A solução foi a adoção de **Virtual Machines** (ou VMs, popularizada pela **Oracle** através do **VirtualBox**). Outro problema surgia que era a necessidade de se configurar diversos parâmetros dela.

Posteriormente, foi criada uma ferramenta de administração de VMs denominada **Vagrant**, que é responsável por determinar (através de código) toda uma configuração da VM, desde o tipo do Sistema Operacional, até os softwares que deveriam ser instaladas nela.

O uso das VMs ocasionou um outro problema: o uso demasiado de **processamento** e **espaço de memória**, pois VMs nada mais são do que toda uma infraestrutura que está sendo levantada no computador local, e caso houvesse a necessidade de isolar as VMs, seria necessário construir uma VM para cada serviço (ou aplicação), tornando-se extremamente custoso.

![VMs operando de forma isolada (aplicação, banco de dados e sistema de e-mails)](Imagens/43.%20VMs%20Isoladas.PNG)

Outra solução desenvolvida foi tentar criar cada vez mais VMs cada vez mais compactadas (com todos os recursos já configurados) e compartilhá-los para quem desejasse utilizá-lo.

E finalmente, chegaram a uma solução observando os recursos que estavam presentes no kernel do Linux (como **Namespaces** (permite isolar os recursos das instâncias/processos) e **cgroups** (permite gerenciar a memória disponível e processamento para as instâncias)), e daí surge o **Docker** (ou seja, o **Docker** nasce dos recursos que já estavam presentes no Linux, porém, não utilizados com essa finalidade).

Através do **Docker**, se popularizou o conceito de **Containers**, que nada mais são que VMs totalmente já configuradas para o propósito desejado, porém, sem a necessidade de precisarem de um novo S.O. instalado nela, pois, com a utilização de **Namespaces** e **cgroups**, era possível isolar os recursos de memória e processamento do S.O. atual da VM inicializada.

Comparação de uma Virtual Machine vs. Container:
![Comparação de uma Virtual Machine vs. Container](Imagens/44.%20VM%20vs%20Container.png)

### Subir Banco de Dados (Local)

Será utilizado o **Docker** + **Docker Compose**, com Banco de Dados e serviço de e-mail chamado **Mailcatcher**.

Para verificar se o Docker e o Docker Compose estão devidamente instalados, executar no terminal:

```bash
# Verificando a versão do Docker
docker --version

# Verificando a versão do Docker-Compose
docker-compose --version
```

Para utilizar o arquivo de script do Docker Compose, deve-se criar um arquivo na pasta raíz do projeto denominado `compose.yaml` ou `compose.yml`.

O arquivo apresentará o seguinte conteúdo:

```yaml
# Instalando o PostgreSQL
services:
  database:
    image: "postgres:16.0-alpine3.18"
    environment:
        POSTGRES_PASSWORD: "localpassword"
	ports:
	  - "5432:5432"
```

- **OBS 1:** O parâmetro `ports` realiza a externalização dos dados processados pelo container através de uma porta (sem essa configuração, apesar de a porta conseguir ser aberta, ela não é visualizada). A primeira porta representa a porta do `host` e a segunda porta representa a porta do `container` (portanto, `host:container`). Como ambas as portas são iguais (por padrão), por isso destes números.

- **OBS 2:** Caso haja a necessidade interromper o funcionamento do container, utilizar o comando `docker compose down`.

- **OBS 3:** Caso haja a necessidade de reiniciar o funcionamento do container, utilizar o comando `docker compose up -d --force-recreate` (a flag `-d` é `detached`, ou seja, não irá exibir e travar o terminal com a inicialização do container).

- **OBS 4:** As observações **OBS 1**, **OBS 2** e **OBS 3** acabaram não sendo necessárias...

Os serviços descritos no `compose.yaml` será fornecidos através de Containers Docker.
Para se descrever um container, primeiro deve-se criar um arquivo denominado `Dockerfile`, que será responsável por armazenar todos os comandos necessários para habilitar todos os serviços necessários dentro de um Container, porém, para o `Dockerfile` funcionar, após ter ser escrito o script de comandos que serão executados, o arquivo antes passa por um processo de compilação, que produzirá uma imagem (um executável), e da imagem é gerado um container:

![Container Docker](Imagens/45.%20Container%20Docker.PNG)

Para executar o conteúdo do arquivo `compose.yaml`, utilizar o seguinte comando:

```bash
# Este comando realizará a leitura e fará o download do container contendo todos os serviços listados no compose.yaml
docker compose up
```

#### Glosário

- YAML: (YAML Ain't Markup Language - YAML não é Linguagem de Marcação): ele é um super-set do JSON (porém, apresenta grandes semelhanças com o Python).

### Se conectando no Banco de Dados (Local)

Para exibir uma lista de Containers Docker que estão rodando, utilizar o comando:

```bash
## O comando ps significa Process Unit (convenção Unix) e -a significa --all
docker ps -a
```

Para instalar o Client do Postgres (o **psql**), realizar o download do [PostgreSQL](https://www.postgresql.org/) em seu respectivo site e executar o software `SQL Shell`:

Quando for executado o `SQL Shell`, ele irá pedir as credenciais de acesso como:

- Localização (geralmente `localhost`);
- Nome do banco de dados (por padrão, `postgres`);
- Username (por padrão, `postgres`);
- Porta (por padrão, `5432`).
- Senha para acessar o banco de dados.

Para testar a comunicação, utilizar o seguinte comando no banco de dados:

```sql
SELECT 1+1;
```

Será retornado como resultado o valor 2.

Para encerrar a comunicação com o banco de dados, utilizar o comando `\q`.

Em seguida, foi movido o arquivo `compose.yaml` para a pasta `infra`, porém, para executar o arquivo do Docker Compose, será necessário passar a localização dele da seguinte forma:

```bash
docker compose -f infra/compose.yaml up -d
```
