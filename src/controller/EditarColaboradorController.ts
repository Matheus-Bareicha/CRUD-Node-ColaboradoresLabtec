import { Response, Request } from "express";
import { EditarColaboradorService } from "../service/EditarColaboradorService";

export class EditarColaboradorController {
    async handle(req: Request, res: Response) {
        const { id, nome, cpf, data_nascimento, email } = req.body;

        const editarColaboradorService = new EditarColaboradorService();

        const colaborador = await editarColaboradorService.execute({
            id,
            nome,
            cpf,
            data_nascimento,
            email
        });

        return res.json(colaborador);
    }
}