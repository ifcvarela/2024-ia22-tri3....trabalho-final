# Atividade Trabalho Final

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