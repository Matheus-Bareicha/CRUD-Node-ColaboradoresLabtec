import { Request, Response } from "express";
import { CriarColaboradorService } from "../service/CriarColaboradorService";

export class CriarColaboradorController {
    async handle(req: Request, res: Response) {
        const { nome, cpf, data_nascimento, email } = req.body;

        const criarColaboradorService = new CriarColaboradorService();

        const colaborador = await criarColaboradorService.execute({
            nome,
            cpf,
            data_nascimento,
            email
        });

        return res.json(colaborador);
    }
}
