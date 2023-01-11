### TÍTULO: FrontEnd Challenge da Coodesh
    Um projeto de listagem e favoritação de palavras em inglês. 

### TECNOLOGIAS UTILIZADAS
    - React.js
    - TypeScript
    - Clean Architecture
    - MUI


### VÍDEO DE APRESENTAÇÃO DO PROJETO: 

### Como executar o projeto
    - Executar o comando npm install ou yarn install
    - Executar o comando npm start ou yarn start

### Considerações gerais sobre o projeto
    Decidi utilizar um boilerplate com clean architecture que criei em 2022 para um projeto pessoal. Selecionei um total de 12 palavras específicas da API da Free Dictionary, pois até onde vi, não possui um endpoint para listagem de várias palavras, então optei por utilizar poucas palavras e criar uma Mock API apenas com os campos que iria utilizar para exibição no front.

    Quanto à autenticação, criei todo o fluxo de integração com um back-end genérico, até o ponto da requisição e entidade, assim como fiz com as Words. No entando, no final optei por utilizar um simples local storage para verificar se existe um usuário logado, independente de existir um cadastro ou não.
