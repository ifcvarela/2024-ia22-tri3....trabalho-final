# (somente para os alunos em atividades domiciliares) Atividade Trabalho Final

### **Atividade Avaliativa: Criação de Vídeo Explicativo sobre API com JWT**

#### **Objetivo:**
Gravar um vídeo tutorial demonstrando como implementar novas funcionalidades no projeto fornecido e explicando o funcionamento do código.

#### **Código Base:**
O código inicial do projeto está disponível no seguinte repositório:  
[https://github.com/ifcvarela/2024-ia22-tri3....trabalho-final](https://github.com/ifcvarela/2024-ia22-tri3....trabalho-final)

#### **Instruções para o vídeo:**

1. **Introdução ao Projeto:**
   - Apresente o projeto inicial, explicando brevemente a estrutura das pastas, os principais arquivos e a finalidade da aplicação (API com autenticação JWT).
   - Mostre como clonar o repositório, instalar as dependências e iniciar o servidor.
   - Demonstre o funcionamento da rota `/token` no estado inicial do projeto.

2. **Funcionalidade 1: Nova Rota Protegida**
   - Explique e demonstre como você adicionou a rota protegida `/user/profile`. 
   - Descreva:
     - Como a rota permite que o usuário autenticado visualize apenas seu próprio perfil.
     - O uso do middleware `checkToken` para proteger a rota.
   - Faça um teste ao vivo (utilizando o *Postman* ou *cURL*) para mostrar a funcionalidade.

3. **Funcionalidade 2: Implementação de Refresh Token**
   - Explique o que são tokens de acesso e refresh tokens.
   - Mostre como você implementou a rota `/token/refresh`, que gera um novo token de acesso a partir de um refresh token válido.
   - Demonstre, na prática, o fluxo de autenticação com o refresh token.

4. **Relatório no Vídeo:**
   - Explique o funcionamento do JWT no projeto (inclua explicações sobre os conceitos de payload, assinatura e verificação).
   - Descreva as principais alterações feitas no código e o motivo de cada uma.
   - Relate os testes realizados e como você garantiu que as novas funcionalidades funcionam corretamente.

5. **Encerramento:**
   - Resuma o aprendizado adquirido com a atividade.
   - Dê sugestões de melhorias futuras para o projeto.

#### **Requisitos Técnicos para o Vídeo:**
- **Duração:** Entre 10 e 15 minutos.
- **Formato:** Tela gravada (*screen recording*), com narração ou legendas explicativas.
- **Ferramentas:** Você pode usar ferramentas gratuitas como OBS Studio, Zoom ou qualquer gravador de tela de sua preferência.
- **Entrega:** Envie o link do vídeo (YouTube, Google Drive ou outro serviço de compartilhamento) junto com:
  - O código-fonte modificado.
  - O banco de dados atualizado.

#### **Critérios de Avaliação:**
- **Clareza e organização do vídeo (40%)**: Explicações bem estruturadas e coerentes.
- **Demonstração prática (30%)**: Funcionamento correto das novas funcionalidades no projeto.
- **Qualidade técnica (20%)**: Boa qualidade de áudio e vídeo, com destaque claro das partes importantes do código.
- **Criatividade e engajamento (10%)**: Personalização do vídeo para torná-lo mais interessante e envolvente.


----------------------------------------------------------------------------------------------------------------------------


# (somente para os alunos regulares) Atividade Trabalho Final

O sistema já possui os arquivos front-end:
- `index.html`: Página inicial do sistema, tela de login.
- `registrar.html`: Página de registro de usuários.
- `acesso-publico.html`: Página de acesso público.
- `acesso-privado.html`: Página de acesso restrito.

**Resumo da atividade**: Adicione no `index.html` um formulário de login e implemente a requisão de login no servidor. Após o login, o sistema deve redirecionar o usuário para o arquivo `registrar.html`. Já no `registrar.html`, faça uma requisição ao servidor (a escolha da requisição é do aluno, pode ser um GET, POST, etc. A sugestão é que tente listar dados do banco de dados). Caso o usuário não esteja logado (ou seja, o token JWT não seja válido ou esteja ausente), o sistema deve exibir uma mensagem de erro e redirecionar o usuário de volta para a tela de login.

**Objetivo**: Implementar um sistema de login utilizando JWT (JSON Web Token) no projeto atual (feito em sala de aula).

## Descrição da Atividade:

1.Implementação do Login com JWT:

- Adicione uma funcionalidade de login ao sistema que utilize JWT para autenticação.
- Ao realizar o login com sucesso, o sistema deve gerar um token JWT e armazená-lo no cliente (por exemplo, em um cookie ou no localStorage).

2. Redirecionamento após Login:

- Após o login bem-sucedido, o sistema deve redirecionar o usuário para o arquivo registrar.html.

3. Requisição no registrar.html:

- No arquivo registrar.html, faça uma requisição ao servidor (a escolha da requisição é do aluno, pode ser um GET, POST, etc.).
- Caso o usuário não esteja logado (ou seja, o token JWT não seja válido ou esteja ausente), o sistema deve exibir uma mensagem de erro e redirecionar o usuário de - volta para a tela de login.

## Requisitos Técnicos:

- Utilize uma biblioteca de JWT adequada para a linguagem de programação do projeto (por exemplo, jsonwebtoken para Node.js).
- Garanta que as rotas protegidas no servidor verifiquem a validade do token JWT.
- Implemente a lógica de redirecionamento e exibição de mensagens de erro no frontend utilizando JavaScript.

## Critérios de Avaliação:

- Correção na implementação do login com JWT.
- Funcionamento correto do redirecionamento após o login.
- Implementação correta da requisição no registrar.html e tratamento de erros de autenticação.
- Clareza e organização do código.

## Entrega:

- Submeta o código fonte (no github) atualizado do projeto com as funcionalidades implementadas.
- Inclua um arquivo README.md com instruções claras sobre como rodar o projeto e testar a funcionalidade de login.

Boa sorte!