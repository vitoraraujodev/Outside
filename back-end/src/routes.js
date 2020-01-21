import { Router } from 'express';

import UserController from './app/controllers/UserController';
import SessionController from './app/controllers/SessionController';
import AttractionController from './app/controllers/AttractionController';

import authMiddleware from './app/middlewares/auth';

const routes = new Router();

routes.get('/', (req, res) => res.json({ message: 'Hello World' }));

routes.post('/sessions', SessionController.store);

routes.get('/attractions', AttractionController.index);
routes.post('/attractions', authMiddleware, AttractionController.store);
routes.put('/attractions/:id', authMiddleware, AttractionController.update);
routes.delete('/attractions/:id', authMiddleware, AttractionController.delete);

routes.post('/users', UserController.store);
routes.put('/users', authMiddleware, UserController.update);

export default routes;
