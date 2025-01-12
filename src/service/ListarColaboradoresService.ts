import prismaClient from "../prisma"; // Importando a ORM prisma, que é responsável por fazer a conexão com o banco de dados

export class ListarColaboradoresService { // Criando uma classe para o serviço de listar colaboradores
    async execute() { // Criando um método para executar a lógica do serviço
        const colaboradores = await prismaClient.colaborador.findMany(); // Utilizando a ORM prisma para buscar todos os colaboradores no banco de dados

        return colaboradores; // Retornando a lista de colaboradores
    }
}