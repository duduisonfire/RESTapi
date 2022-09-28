# REST-API

Olá, bem vindo, me chamo Igor Tiburcio Cavalcanti e este é um projeto que criei ao longo dos meus estudos em JavaScript.

Esta é uma api com um CRUD (Create, Read, Update, Delete) meramente acadêmica, desenvolvida em NodeJS, para fim de por em prática meus estudos.

# Técnologias

Este é um projeto back-end completo, foram usadas as seguintes técnologias para o desenvolvimento da aplicação.

 1. NodeJS: A servidor da aplicação foi criado em JavaScript utilizando o NodeJS como ferramenta back-end para interpretar e executar o servidor.
 2. ExpressJS: O servidor foi montado com auxílio do módulo ExpressJS.
 3. MariaDB: Como banco de dados foi utilizado o MongoDB, banco de dados não relacional, por sua boa comunicação com o NodeJS.
 4. Sequelize: Para fazer a conexão com o banco de dados foi utilizado o módulo Mongoose do NodeJS.
 5. EJS: Para renderização das páginas entregues no front-end.
 6. Jason Web Tokens: Para salvar as seções dos usúarios.

## Funcionamento da aplicação

A aplicação é composta de cinco grupos de requisições HTTP, são eles: Home, User, Tokens, Alunos e Fotos.

O grupo home apenas retorna um JSON contendo o valor index.

O grupo user tem quatro requisições - CREATE (POST): Cria um usuário; SHOW (GET): Retorna um JSON com os dados do usuário selecionado nos parametros da url;
UPDATE (PUT): Atualiza um usuário selecionado nos parametros da URL; DELETE (DEL): Apaga um usuário selecionado nos parametros da URL.

O grupo alunos tem cinco requisições - CREATE (POST): Cria um aluno; INDEX (GET): Retorna um JSON com todos os alunos cadastrados;
SHOW (GET): Retorna um JSON com os dados do aluno selecionado nos parametros da url; UPDATE (PUT): Atualiza um alunos selecionado nos parametros da URL;
DELETE (DEL): Apaga um aluno selecionado nos parametros da URL.

O grupo tokens tem uma requisição - CREATE (POST): Entra com um usuário cadastrado e gera um JSON WEB TOKEN.

O grupo fotos tem uma requisição - UPLOAD (POST): Envia uma foto para o servidor e atribui a um aluno no banco de dados.

Todas as requisições que alteram o banco de dados exigem que o usuário esteja logado, ou seja, no header da requisições precisa enviar o Token gerado  dentro
de um autenticação Bearer.

O banco de dados é modelado com três tabelas, os alunos, os usuários e as fotos enviadas.

Caso você queira testar a aplicação localmente você precisará criar um arquivo ‘.env’ na pasta raiz do projeto contendo as variáveis: 
‘DATABASE' com o nome da database SQL, 'DATABASE_HOST' com o endereço do host da database, 'DATABASE_PORT' com a porta onde roda a database, 'DATABASE_USERNAME'
com o usuário da database, 'DATABASE_PASSWORD' com a senha do usuário da database, 'TOKEN_SECRET' com um chave aleatória para configurar o Jason Web Token,
'TOKEN_EXPIRATION' com o tempo que os tokens serão válidos, 'URL' com o endereço onde a aplicação estará rodando (user localhost para testes locais) e
'PORT' com a porta onda a aplicação ira rodar.

Para iniciar o servidor use o comando "npm run dev" (caso esteja iniciando como desenvolvedor) ou "npm run Start" (para isso rode o comando 'npm run build' antes.)

---

# REST-API

Hello, welcome, my name is Igor Tiburcio Cavalcanti and this is a project that cried throughout my JavaScript studies.

This is an api with a CRUD (Create, Read, Update, Delete) in detail, developed in NodeJS, for practical use in my studies.

# Technologies

This is a complete backend, it was used as the following technologies for application development.

 1. NodeJS: An application server was created in JavaScript using NodeJS as a back-end tool to interpret and execute the server.
 2. ExpressJS: The server was built using the ExpressJS module.
 3. MariaDB: As a database it was used in MongoDB, a non-relational database, due to its good communication with NodeJS.
 4. Sequelize: To make the connection to the database, it was used in the Mongoose module of NodeJS.
 5. E: For rendering contracted J pages without front-end.
 6. Jason Web Tokens: To save users' sections.

## Application operation

The application is composed of five groups of HTTP requests, they are: Home, User, Tokens, Students and Photos.

The home group just returns a JSON containing the value index.

The user group has four requests - CREATE (POST): Create a user; SHOW (GET): Returns a JSON with the user's data selected in the url parameters;
UPDATE (PUT): Updates a user selected in the URL parameters; DELETE (DEL): Deletes a user selected in the URL parameters.

The students group has five requests - CREATE (POST): Creates a student; INDEX (GET): Returns a JSON with all registered students;
SHOW (GET): Returns a JSON with the student's data selected in the url parameters; UPDATE (PUT): Updates a student selected in the URL parameters;
DELETE (DEL): Deletes a student in the selected URL parameters.

The tokens group has a request - CREATE (POST): Enter a registered user and generate a JSON WEB TOKEN.

The photos group has a request - UPLOAD (POST): Uploads a photo to the server and assigns it to a student in the database.

All requests must send the submission database that require the user to be logged in, i.e. no requests need to generate within
of a Bearer authentication.

The database is modeled with three tables, students, users and uploaded photos.

If you want to test the application locally you can create a project file '.env' in the root folder of the content as variables:
'DATABASE' with the name of the SQL database, 'DATABASE_HOST' with the address of the database host, 'DATABASE_PORT' with the port where a database runs, 'DATABASE_USERNAME'
with the database user, 'DATABASE_PASSWORD' with the password of the database user, 'TOKEN_SECRET' with a random key to configure Jason Web Token,
'TOKEN_EXPIRATION' with the time the tokens are valid, 'URL' with the address where the application will be running (user localhost for local tests) and
'PORT' with the wave port the application will run.

To start the server use the command "npm run dev" (in case you are starting as a developer) or "npm run Start" before (for this you ran the command 'npm run build'.)
