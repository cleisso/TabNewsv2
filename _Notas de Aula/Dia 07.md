# TabNews
Curso do Filipe Deschamps

## Dia 07 - Colocando o projeto no ar

### Índice
- [Conhecendo a plataforma](#conhecendo-a-plataforma)
- [Como estão organizadas as aulas](#como-estão-organizadas-as-aulas)

### Client e Server

- Cliente (ou Client): Aquele que faz uma requisição;
- Servidor (ou Server): Aquele que responde as requisições de um Cliente.

![Client e Server](Imagens/09.%20Client%20e%20Server.PNG)

Algumas se faz necessário levar em consideração a localização geográficas destes dispositivos, pois isso afetará diretamente a experiência da comunicação.

#### Glosário

- Continuous Deployment: É uma estratégia de desenvolvimento de software onde as mudanças no código de uma aplicação são liberadas automaticamente durante a fase de desenvolvimento.
![Continuous Deployment](Imagens/08.%20Continuous%20Deployment.PNG)

### Hospedagem e Deploy

No início, a hospedagem de sites era realizado utilizando o próprio computador local (e pessoal) e disponibilizando o seu acesso através da rede.
![Servidores Web (Início)](Imagens/10.%20Servidores%20Web%20(Inicio).png)

O primeiro modelo apresentava alguns problemas, como disponibilidade (de energia) e capacidade de responder as requisições. Assim surge Servidores Web Especializados (ou Dedicados), com o objetivo de contornar os problemas anteriores.

![Servidores Web Especializado](Imagens/11.%20Servidores%20de%20Web%20Especializados.png)

Para o modelo acima, a comunicação entre os dispositivos era feito através do protocolo `FTP`.

![Servidor FTP](Imagens/12.%20FTP.PNG)

O problema é que a atualização do servidor era feita de forma manual, e selecionar quais arquivos deveriam ser enviados ao servidor era um grande trabalho (pois na época a velocidade das comunicações não eram tão altas, logo, quanto menos e mais leves forem os arquivos, mais rápido aconteciam as mudanças).

A solução posteriormente foi enviar apenas uma única vez o projeto ao servidor, e realizar todas as alterações diretamente no servidor através do Windows Server ou utilizando o SSH do Linux. Após as alterações serem finalizadas no servidor, as mudanças são trazidas de volta ao servidor local. Esta solução não era muito boa pois caso houvesse muitos desenvolvedores de um serviço, poderia acontecer de cada um deles possuir uma versão diferente entre o que está hospedado e o que está armazenado localmente (ou seja, criavam-se várias versões de arquivos desatualizados).

Uma nova solução foi criada, utilizando o GitHub como interface entre o computador local e o servidor, assim, todas as alterações locais são enviadas para o GitHub via `git push`, e o servidor automaticamente fazia o download do repositório via `git pull` (pois possuía também instalado uma ferramenta do GitHub instalada).

![Servidor Web integrado ao GitHub](Imagens/13.%20Servidores%20Web%20Integrado%20ao%20GitHub.PNG)

Novas estratégias de automatização foi criadas, e hoje as atualizações ocorrem da seguinte forma: o computador local envia as alterações para um outro computador denominado **C.I. (Continuous Integration)**, responsável por realizar testes automáticos na aplicação. Caso os testes passam, os arquivos são enviados para um outro computador denominado **Build**, responsável por criar a aplicação otimizada das páginas que serão executada pelos navegadores. Após o **Build** os arquivos são enviados para o servidor, que por sua vez ficará responsável por fornecer os arquivos produzidos pelo **Build** para cada cliente que solicitar. O fluxo do **C.I.** até o servidor acontecerá automaticamente quando os dispositivos forem configurados corretamente.

![C.I.](Imagens/14.%20Continuous%20Integration.PNG)

*Será utilizado para hospedagem do site desenvolvido o servidor da Vercel, pois ele oferece um plano gratuito para essa finalidade, além de ser o criador do **Next.js**, ou seja, será totalmente compatível com as implementações realizadas ao longo do curso.*

#### Glosário

- Hospedar: oferecer ou receber abrigo;
- Deploy: o ato de transferir os arquivos locais para um lugar específico.

