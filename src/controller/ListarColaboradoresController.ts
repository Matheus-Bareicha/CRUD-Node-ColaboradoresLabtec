import { Request, Response } from 'express';
import {ListarColaboradoresService} from '../service/ListarColaboradoresService';

export class ListarColaboradoresController {
    async handle(req: Request, res: Response) {
        const listarColaboradoresService = new ListarColaboradoresService();

        const colaboradores = await listarColaboradoresService.execute();

        return res.json(colaboradores);
    }
}