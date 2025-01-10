import prismaClient from "../prisma";

interface EditarColaboradorProps {
    id: number;
    nome?: string;
    cpf?: string;
    data_nascimento?: Date;
    email?: string;
}

export class EditarColaboradorService {
    async execute({ id, nome, cpf, data_nascimento, email }: EditarColaboradorProps) {
        const data: any = {};
        if (nome) data.nome = nome;
        if (cpf) data.cpf = cpf;
        if (data_nascimento) data.data_nascimento = data_nascimento;
        if (email) data.email = email;

        const colaborador = await prismaClient.colaborador.update({
            where: {
                id
            },
            data
        });

        return colaborador;
    }
}