# TabNews
Curso do Filipe Deschamps

## Dia 05 - Trabalhando com o git de forma offline

### Índice
- [Lista de Comandos Git](#lista-de-comandos-git)
- [Onde fica o "Git"? E como era feito antes disso?](#onde-fica-o-git-e-como-era-feito-antes-disso)
- [Git Log (e o Jogo dos 7 Erros)](#git-log-e-o-jogo-dos-7-erros)
- [Git Commit (e a Escada Infinita)](#git-commit-e-a-escada-infinita)
- [Git Diff e Amend (e a Viagem no Tempo)](#git-diff-e-amend-e-a-viagem-no-tempo)

### Lista de Comandos Git

Lista de comandos que serão abordados nesta aula:

- `git log`: listar os commits do repositório;
- `git add`: sobe alterações para a *staging area*;
- `git commit`: realiza novos commits;
- `git commit --amend`: substitui o commit anterior por um novo, mas aproveita as alterações dele;
- `git diff`: calcula a diferença entre as versões/alterações dos arquivos;
- `git log --stat`: apresenta os commits do repositório, com alguns detalhes extras (como as adições e remoções de palavras nos arquivos);
- `git log --oneline`: apresenta as informações dos commits em uma única linha.

### Onde fica o "Git"? E como era feito antes disso?

Como era feito antes: Fazendo várias cópias de uma pasta. A maior complexidade se dava em determinar quais arquivos deveriam ser copiados (ou se todo projeto deveria ser copiado), o que não é muito eficiente.

Linha do tempo para os Sistemas de Versionamento:
![Linha do tempo para os Sistemas de Versionamento](Imagens/02.%20Linha%20do%20Tempo%20-%20Sistemas%20de%20Versionamento.PNG)

- Sistema de Versionamento Centralizado: Existe uma cópia do projeto alocado em um servidor, e o programador, ao necessitar realizar uma alteração, ele assume a posse dos arquivos, realiza as alterações, e por fim devolve mudanças ao servidor, porém, enquanto as mudanças não forem concluídas, nenhum outro programador será autorizado a realizar mudanças no projeto (ou seja, os arquivos ficam travados).

- Sistema de Versionamento Distribuído: Os sistemas distribuídos surgiram para contornar os problemas apresentados pelos **Sistemas de Versionamento Centralizado**, pois agora permitem que todos possam realizar as alterações nos arquivos do projeto ao mesmo tempo, e caso haja algum tipo de conflito nas alterações, será sinalizado um **Merge Conflict**, dizendo que manualmente os conflitos devem ser contornados.

### Git Log (e o Jogo dos 7 Erros)

Alguns **Sistemas de Versionamento** como **CVS** realizam o versionamento avaliando as diferenças entre a versão atual e as versões anteriores do arquivo. Este método é chamado de **Delta Encoding** e possui a vantagem em economizar na quantidade de dados salvos (ocupando menos espaço de memória), porém, exige um maior custo computacional pois para se obter a última versão do arquivo, é necessário processar todo o histórico de alterações dele.

O **Git** por outro lado ele faz cópias inteiras dos arquivos modificados dentro de um projeto, e os arquivos não-modificados, ele faz apontamentos para eles, de tal forma que ele saiba quais arquivos são necessários para manter a estrutura de arquivos do projeto. Acaba-se gastando mais espaço, porém, o custo computacional muito menor, e ganha-se em produtividade pois migrar entre versões de um projeto acaba sendo muito rápido.

Exemplo do Sistema de Versionamento do Git:
![Sistema de Versionamento do Git](Imagens/03.%20Esrutura%20de%20Versionamento%20do%20Git.PNG)

Quando existe a necessidade de verificar as diferenças entre dois arquivos, o **Git** calcula as diferenças na hora, evidenciando as alterações entre uma versão e outra.

#### Glosário
- blob: Binary Large OBject.

### Git Commit (e a Escada Infinita)

Os arquivos dentro de um Sistema de Controle de Versão possui 3 estágios:
- Untracked: Arquivos dentro do repositório, porém, não são rastreados (ou seja, são ignorados);
- Modified (ou Unstaged): Arquivos que foram modificados;
- Stagged: Dos arquivos modificados, quais que deverão ser versionados (e assim produzir uma nova versão do repositório);
- Commit: Arquivos que compõem a última versão do repositório.

#### Criação do arquivo .gitignore

Criar o arquivo .gitignore na pasta raiz do projeto. Todos os arquivos e pastas listadas dentro deste arquivo serão ignorados pelo **Git**.

### Git Diff e Amend (e a Viagem no Tempo)

Caso deseja-se salvar uma nova versão de um arquivo, porém, não deseja-se realizar um novo `commit`, deve-se utilizar o comando `git commit --amend`. Dessa forma, o Git irá atualizar a última versão do repositório com as últimas versões dos arquivos, porém, sem produzir um novo `commit`.
