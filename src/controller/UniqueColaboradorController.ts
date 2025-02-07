import { Request,Response } from "express"; // Importando o Request e o Response do express, que são responsáveis por lidar com as requisições e as respostas
import { UniqueColaboradorService } from "../service/UniqueColaboradorService"; // Importando o serviço de colaborador único

export class UniqueColaboradorController { // Criando a classe de controle do colaborador único
    async handle(req: Request, res: Response) { // Criando o método handle para lidar com as requisições
        const { id } = req.query as unknown as { id: number }; // Pegando o id da requisição nos parâmetros

        const uniqueColaboradorService = new UniqueColaboradorService(); // Instanciando o serviço de colaborador único

        const colaborador = await uniqueColaboradorService.execute({ id }); // Chamando o método execute do serviço de colaborador único

        return res.json(colaborador); // Retornando a resposta com o colaborador
    }
}