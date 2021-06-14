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
   ##### Listar todos os médicos
      http://localhost:3000/physician/list
   ##### Cadastrar novos médicos
      http://localhost:3000/physician/create
   ##### Remover médicos a partir do id
      http://localhost:3000/physician/remove/#id
   ##### Atualizar dados de médicos
      http://localhost:3000/physician/update

   #### Rotas de Pacientes:
   ##### Listar todos os pacientes
      http://localhost:3000/patient/list
   ##### Buscar paciente a partir do nome
      http://localhost:3000/patient/search/#name
   ##### Buscar pacientes a partir do médico que o antende
      http://localhost:3000/patient/physician/#id
   ##### Cadastrar novos pacientes
      http://localhost:3000/patient/create
   ##### Atualizar dados de paciente
      http://localhost:3000/patient/update

   #### Rotas de Consultas:
   ##### Listar todos as consultas
      http://localhost:3000/appointment/list
   ##### Buscar consulta a partir do id do paciente
      http://localhost:3000/appointment/patient/#id
   ##### Buscar consulta a partir do id do médico
      http://localhost:3000/appointment/physician/#id
   ##### Cadastrar novas consultas
      http://localhost:3000/appointment/create
   ##### Remover consulta a partir do id
      http://localhost:3000/appointment/remove/#id