# TabNews
Curso do Filipe Deschamps

## Dia 02 - Git, GitHub, repositórios, ambientes de desenvolvimento

Tópicos abordados:
- Git;
- Github;
- Ambiente de Desenvolvimento.

### Índice
- [Git? GitHub? É tudo a mesma coisa?](#git-github-é-tudo-a-mesma-coisa)
- [Repositório: onde tudo começa](#repositório-onde-tudo-começa)
- [Ambientes de Desenvolvimento](#ambientes-de-desenvolvimento)
- [Codespaces](#codespaces)


### Git? GitHub? É tudo a mesma coisa?

Analogia entre **Youtube** e **GitHub**.

**Youtube** é o local onde é possível fazer a hospedagem de arquivos de vídeo (`*.mp4`). Nele será possível:

1. Hospedar vídeos;
2. Distribuir os vídeos;
3. Rede social, onde as pessoas podem realizar comentários a respeito dos vídeos distribuídos.

**Github** é o local onde é possível fazer a hospedagem de repositórios (`*.git`). Repositórios podem ser entendidos como pastas, que geralmente vão armazenar os programas desenvolvidos. No **GitHub** também será possível:

1. Hospedar os repositórios;
2. Distribuir os repositórios;
3. Rede social, onde as pessoas poderão realizar comentários a respeito dos projetos desenvolvidos;
4. Os usuários podem realizar `Pull Requests`, que são alterações de códigos.

#### Sites

- [Site do GitHub](https://github.com/)
- [Site do Git](https://git-scm.com/)

### Repositório: onde tudo começa

Apenas um guia explicando como realizar o cadastro no GitHub e como criar o primeiro repositório.

#### Glosário
- Slug: identificador único;
- Branch: ramificação dentro de um repositório.

### Ambientes de Desenvolvimento

Fica como sugestão utilizar o ambiente **GitHub Codespaces**.

#### Glosário
- WSL: Subsistema Windows para Linux (Windows Subsystem for Linux). É um módulo do Windows 10 (ou superior) que visa a disponibilizar um ambiente Linux compatível no sistema da Microsoft, de forma que se possam executar programas (baseados em texto) nativos dos sistemas GNU/Linux dentro do próprio Windows sem a necessidade de emuladores ou do uso de máquinas virtuais. Várias distribuições Linux distintas podem em princípio ser instaladas sobre este módulo. 

### Codespaces

Os comandos apresentados também podem ser utilizados no ambiente Windows utilizando o VSCode.

Para rodar o Tabnews por completo, é apenas necessário:
- Node.js;
- Docker (para usar o banco de dados PostgreSQL).

Alguns comandos apresentados nessa aula:

- Exibe a versão do node-js (an open-source, cross-platform JavaScript runtime environment):
```bash
node -v
```

- Exibe a versão do Docker
```bash
docker -v
```

- Exibe a versão do Docker-Compose (utilitário Docker para banco de dados, serviços de e-mail local, etc)

```bash
docker-compose -v
```

- Comando para alterar a versão do node-js utilizando o nvm (Node Version Manager)
```bash
nvm -v
```
**Obs:** nvm é um utilitário existente apenas em Linux e MacOS. Felizmente, um grupo desenvolveu **nvm-windows**, apresentando as mesmas funcionalidades. [Clique Aqui para baixar nvm-windows](https://github.com/coreybutler/nvm-windows).
