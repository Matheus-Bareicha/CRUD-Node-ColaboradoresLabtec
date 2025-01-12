import { Request,Response } from "express"; // Importando o Request e o Response do express, que são responsáveis por lidar com as requisições e as respostas
import { DeletarColaboradorService } from "../service/DeletarColaboradorService"; // Importando o serviço que irá realizar a ação de deletar um colaborador

export class DeletarColaboradorController { // Criando a classe que irá controlar a ação de deletar um colaborador
    async handle(req: Request, res: Response) { // Criando o método handle que é responsável por lidar com a requisição
        const { id } = req.body as unknown as { id: number }; // Pegando o id do colaborador que será deletado da requisição

        const deletarColaboradorService = new DeletarColaboradorService(); // Instanciando o serviço que irá realizar a ação de deletar um colaborador

        await deletarColaboradorService.execute({ id }); // Chamando o método execute do serviço para deletar o colaborador

        return res.json({ message: 'Colaborador deletado com sucesso' }); // Retornando a resposta com a mensagem de sucesso
    }
}