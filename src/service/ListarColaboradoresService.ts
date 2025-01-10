import prismaClient from "../prisma";

export class ListarColaboradoresService {
    async execute() {
        const colaboradores = await prismaClient.colaborador.findMany();

        return colaboradores;
    }
}