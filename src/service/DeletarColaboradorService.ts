import prismaClient from "../prisma"; // Importando a ORM prisma, que é responsável por fazer a conexão com o banco de dados

interface DeletarColaboradorProps { // Definindo a interface para a função deletarColaborador, para garantir que os dados passados para ela sejam do tipo correto
    id: number;
}

export class DeletarColaboradorService { // Criando a classe DeletarColaboradorService, que será responsável por realizar a ação de deletar um colaborador
    async execute({ id }: DeletarColaboradorProps) { // Definindo a função execute, que será responsável por realizar a ação de deletar um colaborador e aplicando a interface DeletarColaboradorProps
        const colaborador = await prismaClient.colaborador.delete({ // Utilizando a ORM prisma para deletar o colaborador com o id passado
            where: {
                id
            }
        });

        return colaborador; // Retornando o colaborador deletado
    }
}