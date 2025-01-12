

# CRUD Node Colaboradores

Este é um projeto de CRUD (Create, Read, Update, Delete) para gerenciar colaboradores usando Node.js, Express, TypeScript e Prisma.

## Requisitos

- Node.js
- MySQL

## Instalação

1. Clone o repositório:

2. Instale as dependências:

```bash
npm install
```

3. Configure o banco de dados:

Crie um banco de dados MySQL.
Atualize a URL do banco de dados no arquivo .env:

```bash
DATABASE_URL="mysql://usuario:senha@host:porta/nome_do_banco"
```
4. Execute as migrações do Prisma para criar as tabelas no banco de dados:

```bash
npx prisma migrate dev --name init
```

5. Gere o cliente Prisma:

```bash
npx prisma generate
```
Uso
Para iniciar o servidor em modo de desenvolvimento com reinício automático em caso de alterações ou erros, use o seguinte comando:

```bash
npm run dev
```

O servidor estará disponível em http://localhost:3001.

Endpoints  
Criar Colaborador  
URL: /criar  
Método: POST  
Corpo da Requisição:  

```bash
{
  "nome": "João Silva",
  "cpf": "12345678901",
  "data_nascimento": "1990-01-01T00:00:00.000Z",
  "email": "joao.silva@example.com"
}
```
Listar Colaboradores  
URL: /listar  
Método: GET  

Editar Colaborador  
URL: /editar  
Método: PUT  
Corpo da Requisição:  
```bash
{
  "id": 1,
  "nome": "João Silva",
  "cpf": "12345678901",
  "data_nascimento": "1990-01-01T00:00:00.000Z",
  "email": "joao.silva@example.com"
}
```
Deletar Colaborador  
URL: /deletar  
Método: DELETE  
Corpo da Requisição:  
```bash
{
  "id": 1
}
```
Unique Colaborador  
URL: /unique  
Método: GET  
Params: id  

Estrutura do Projeto  
src  
&nbsp;controller/  
&nbsp;&nbsp;CriarColaboradorController.ts  
&nbsp;&nbsp;ListarColaboradoresController.ts  
&nbsp;&nbsp;EditarColaboradorController.ts  
&nbsp;&nbsp;DeletarColaboradorController.ts  
&nbsp;&nbsp;UniqueColaboradorController.ts  
&nbsp;service/  
&nbsp;&nbsp;CriarColaboradorService.ts  
&nbsp;&nbsp;ListarColaboradoresService.ts  
&nbsp;&nbsp;EditarColaboradorService.ts  
&nbsp;&nbsp;DeletarColaboradorService.ts  
&nbsp;&nbsp;UniqueColaboradorService.ts  
&nbsp;prisma/  
&nbsp;&nbsp;index.ts  
&nbsp;routes.ts  
&nbsp;server.ts  
