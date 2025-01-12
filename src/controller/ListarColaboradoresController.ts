import { Request, Response } from 'express'; // Importando o Request e o Response do express, que são responsáveis por lidar com as requisições e as respostas
import {ListarColaboradoresService} from '../service/ListarColaboradoresService'; // Importando o serviço de listar colaboradores

export class ListarColaboradoresController { // Exportando a classe de controle de listar colaboradores
    async handle(req: Request, res: Response) { // Função que será executada quando a rota for chamada
        const listarColaboradoresService = new ListarColaboradoresService(); // Instanciando o serviço de listar colaboradores

        const colaboradores = await listarColaboradoresService.execute(); // Chamando o método execute do serviço de listar colaboradores

        return res.json(colaboradores); // Retornando a resposta com os colaboradores listados
    }
}