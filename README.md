# Ap02 - Sistema de interação médico-paciente
## Membros
  - André Vitor Kuduavski GRR20184595
  - Carlos Felipe Godinho Silva GRR20184630
  - Rafael Henrique Karam GRR20184601

# Instruções de uso

  ### Configuração do projeto:
  - Criar um arquivo .env na raiz do projeto baseado no arquivo .env.example
  - Preencher com os dados de seu servidor banco de dados MySQL
  
  ### Criação e inserção no banco:
   #### Instalar as dependências necessárias:
    npm install
   #### Criação de tabelas:
    npx sequelize db:migrate
   #### População de tabelas:
    npx sequelize db:seed:all

  ### Endpoints:
   #### Rotas de Médicos:
   ##### rota para listar todos os médicos
      http://localhost:3000/physician/list
   ##### rota para criar médicos
      http://localhost:3000/physician/create
   ##### rota para remover médicos a partir do id
      http://localhost:3000/physician/remove/#id
   ##### rota para atualizar dados de médicos
      http://localhost:3000/physician/update