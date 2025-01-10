import { Router, Request, Response } from 'express';

import {CriarColaboradorController} from './controller/CriarColaboradorController';
import { ListarColaboradoresController } from './controller/ListarColaboradoresController';
import { EditarColaboradorController } from './controller/EditarColaboradorController';
import { UniqueColaboradorController } from './controller/UniqueColaboradorController';
import { DeletarColaboradorController } from './controller/DeletarColaboradorController';

const router = Router();

     router.get('/', (req: Request, res: Response) => {
        res.send('Hello World!');
        });

     router.post('/criar', (req: Request, res: Response) => {
        new CriarColaboradorController().handle(req, res);
        });
    
     router.get('/listar', (req: Request, res: Response) => {
        new ListarColaboradoresController().handle(req, res);
        });
     router.put('/editar', (req: Request, res: Response) => {
        new EditarColaboradorController().handle(req, res);
        });

     router.get('/unique', (req: Request, res: Response) => {
        new UniqueColaboradorController().handle(req, res);
        });

     router.delete('/deletar', (req: Request, res: Response) => {
        new DeletarColaboradorController().handle(req, res);
        });


export default router;
