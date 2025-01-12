import { Response, Request } from "express"; // Importando o Request e o Response do express, que são responsáveis por lidar com as requisições e as respostas
import { EditarColaboradorService } from "../service/EditarColaboradorService"; // Importando o serviço de edição de colaborador

export class EditarColaboradorController { // Criando o controller de edição de colaborador
    async handle(req: Request, res: Response) { // Função que será chamada quando a rota for acessada
        const { id, nome, cpf, data_nascimento, email } = req.body; // Pegando os dados do corpo da requisição

        const editarColaboradorService = new EditarColaboradorService(); // Instanciando o serviço de edição de colaborador

        const colaborador = await editarColaboradorService.execute({ // Executando o serviço de edição de colaborador com os dados extraídos da requisição
            id,
            nome,
            cpf,
            data_nascimento,
            email
        });

        return res.json(colaborador); // Retornando a resposta com o colaborador editado
    }
}