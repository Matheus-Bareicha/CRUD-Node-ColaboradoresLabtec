import prismaClient from "../prisma";

interface DeletarColaboradorProps {
    id: number;
}

export class DeletarColaboradorService {
    async execute({ id }: DeletarColaboradorProps) {
        console.log(id);
        const colaborador = await prismaClient.colaborador.delete({
            where: {
                id
            }
        });

        return colaborador;
    }
}