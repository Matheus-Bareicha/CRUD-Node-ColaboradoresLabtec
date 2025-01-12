import prismaClient from "../prisma"; // Importando a ORM prisma, que é responsável por fazer a conexão com o banco de dados

interface CriarColaboradorProps { // Definindo a interface para a função criarColaborador, para garantir que os dados passados para ela sejam do tipo correto
    nome: string;
    cpf: string;
    data_nascimento: Date;
    email: string;
}

export class CriarColaboradorService { // Criando a classe CriarColaboradorService, que será responsável por criar um novo colaborador
    async execute({ nome, cpf, data_nascimento, email }: CriarColaboradorProps) { // Definindo a função execute, que será responsável por criar o novo colaborador e aplicando a interface CriarColaboradorProps
        const colaborador = await prismaClient.colaborador.create({ // Criando um novo colaborador no banco de dados
            data: {
                nome,
                cpf,
                data_nascimento,
                email
            }
        });

        return colaborador; // Retornando o colaborador criado
    }
}