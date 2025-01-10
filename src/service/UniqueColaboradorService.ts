import prismaClient from "../prisma";

interface UniqueColaboradorProps {
    id: number;
}

export class UniqueColaboradorService {
    async execute({ id }: UniqueColaboradorProps) {
        const colaborador = await prismaClient.colaborador.findFirst({
            where: {
                id
            }
        });

        return colaborador;
    }
}