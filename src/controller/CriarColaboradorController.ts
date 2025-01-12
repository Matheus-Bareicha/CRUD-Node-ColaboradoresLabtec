import { Request, Response } from "express"; // Importando o Request e o Response do express, que são responsáveis por lidar com as requisições e as respostas
import { CriarColaboradorService } from "../service/CriarColaboradorService"; // Importando o serviço de criar colaborador

export class CriarColaboradorController { // Criando a classe de criar colaborador e exportando ela
    async handle(req: Request, res: Response) { // Criando o método handle que é responsável por lidar com a requisição
        const { nome, cpf, data_nascimento, email } = req.body; // Pegando os dados do corpo da requisição

        const criarColaboradorService = new CriarColaboradorService(); //instanciando o serviço de criar colaborador

        const colaborador = await criarColaboradorService.execute({ // Executando o serviço de criar colaborador com os dados extraídos da requisição
            nome,
            cpf,
            data_nascimento,
            email
        });

        return res.json(colaborador); // Retornando a resposta com o colaborador criado
    }
}
