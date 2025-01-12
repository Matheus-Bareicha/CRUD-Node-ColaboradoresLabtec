import {PrismaClient} from '@prisma/client' // Importando o PrismaClient da ORM prisma

const prismaClient = new PrismaClient(); // Instanciando o PrismaClient

export default prismaClient; // Exportando o PrismaClient para uso em outras partes do projeto