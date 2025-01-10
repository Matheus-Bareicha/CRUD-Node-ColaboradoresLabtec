import { Request,Response } from "express";
import { UniqueColaboradorService } from "../service/UniqueColaboradorService";

export class UniqueColaboradorController {
    async handle(req: Request, res: Response) {
        const { id } = req.params as unknown as { id: number };

        const uniqueColaboradorService = new UniqueColaboradorService();

        const colaborador = await uniqueColaboradorService.execute({ id });

        return res.json(colaborador);
    }
}