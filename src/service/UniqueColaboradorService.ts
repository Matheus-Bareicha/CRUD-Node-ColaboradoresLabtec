import prismaClient from "../prisma"; // Importando a ORM prisma, que é responsável por fazer a conexão com o banco de dados

interface UniqueColaboradorProps { // Definindo a interface para a propriedade colaborador
    id: number;
}

export class UniqueColaboradorService { // Criando a classe para o serviço de colaborador único
    async execute({ id }: UniqueColaboradorProps) { // Criando um método para executar a lógica do serviço
        id = Number(id); // Convertendo o id para número
        const colaborador = await prismaClient.colaborador.findFirst({ // Buscando o colaborador pelo id
            where: {
                id
            }
        });

        return colaborador; // Retornando o colaborador encontrado
    }
}