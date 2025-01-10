import prismaClient from "../prisma";

interface CriarColaboradorProps {
    nome: string;
    cpf: string;
    data_nascimento: Date;
    email: string;
}

export class CriarColaboradorService {
    async execute({ nome, cpf, data_nascimento, email }: CriarColaboradorProps) {
        const colaborador = await prismaClient.colaborador.create({
            data: {
                nome,
                cpf,
                data_nascimento,
                email
            }
        });

        return colaborador;
    }
}