import { Router } from 'express';
import multer from 'multer';

import UserController from './app/controllers/UserController';
import SessionController from './app/controllers/SessionController';
import AttractionController from './app/controllers/AttractionController';
import FileController from './app/controllers/FileController';

import authMiddleware from './app/middlewares/auth';

import multerConfig from './config/multer';

const routes = new Router();

const upload = multer(multerConfig);

routes.get('/', (req, res) => res.json({ message: 'Hello World' }));

routes.post('/sessions', SessionController.store);

routes.get('/attractions', AttractionController.index);
routes.post('/attractions', authMiddleware, AttractionController.store);
routes.put('/attractions/:id', authMiddleware, AttractionController.update);
routes.delete('/attractions/:id', authMiddleware, AttractionController.delete);

routes.post('/users', UserController.store);
routes.put('/users', authMiddleware, UserController.update);

routes.get('/picture/:id', FileController.show);
routes.post('/files', upload.single('file'), FileController.store);

export default routes;
