import prismaClient from "../prisma"; //Importando a ORM prisma, que é responsável por fazer a conexão com o banco de dados

interface EditarColaboradorProps { //Definindo a interface para a função editarColaborador
    id: number;
    nome?: string;
    cpf?: string;
    data_nascimento?: Date;
    email?: string;
}

export class EditarColaboradorService { //Criando a classe EditarColaboradorService, que será responsável por realizar a ação de editar um colaborador
    async execute({ id, nome, cpf, data_nascimento, email }: EditarColaboradorProps) { //Definindo a função execute, que será responsável por realizar a ação de editar um colaborador e aplicando a interface EditarColaboradorProps
        const data: any = {}; //Criando a variável data, que será usada para armazenar os dados do colabor
        if (nome) data.nome = nome; //Se o nome for fornecido, adiciona-lo à variável data
        if (cpf) data.cpf = cpf; //Se o cpf for fornecido, adiciona-lo à variável data
        if (data_nascimento) data.data_nascimento = data_nascimento; //Se a data de nascimento for fornecida, adiciona-la à variável data
        if (email) data.email = email; //Se o email for fornecido, adiciona-lo à variável data

        const colaborador = await prismaClient.colaborador.update({ //Utilizando a ORM prisma para atualizar o colaborador com o id passado
            where: {
                id
            },
            data
        });

        return colaborador; //Retornando o colaborador atualizado
    }
}