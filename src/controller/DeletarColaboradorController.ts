import { Request,Response } from "express";
import { DeletarColaboradorService } from "../service/DeletarColaboradorService";

export class DeletarColaboradorController {
    async handle(req: Request, res: Response) {
        const { id } = req.body as unknown as { id: number };

        const deletarColaboradorService = new DeletarColaboradorService();

        await deletarColaboradorService.execute({ id });

        return res.json({ message: 'Colaborador deletado com sucesso' });
    }
}