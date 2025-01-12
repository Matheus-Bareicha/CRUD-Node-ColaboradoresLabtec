import { Router, Request, Response } from 'express'; // Importando o Router, Request e Response do express, que são responsáveis por criar as rotas, as requisições e as respostas

//Importando  os controllers das funções
import {CriarColaboradorController} from './controller/CriarColaboradorController'; 
import { ListarColaboradoresController } from './controller/ListarColaboradoresController';
import { EditarColaboradorController } from './controller/EditarColaboradorController';
import { UniqueColaboradorController } from './controller/UniqueColaboradorController';
import { DeletarColaboradorController } from './controller/DeletarColaboradorController';

const router = Router(); // Criando o router, que é responsavel por estabelecer as rotas

     router.get('/', (req: Request, res: Response) => { 
        res.send('Hello World!');
        });

     router.post('/criar', (req: Request, res: Response) => { // Criando a rota de criar colaborador
        new CriarColaboradorController().handle(req, res);
        });
    
     router.get('/listar', (req: Request, res: Response) => { // Criando a rota de listar colaborador
        new ListarColaboradoresController().handle(req, res);
        });
     router.put('/editar', (req: Request, res: Response) => { // Criando a rota de editar colaborador
        new EditarColaboradorController().handle(req, res);
        });

     router.get('/unique', (req: Request, res: Response) => { // Criando a rota de buscar colaborador
        new UniqueColaboradorController().handle(req, res);
        });

     router.delete('/deletar', (req: Request, res: Response) => { // Criando a rota de deletar colaborador
        new DeletarColaboradorController().handle(req, res);
        });


export default router;
