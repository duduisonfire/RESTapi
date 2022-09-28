import { Router } from 'express';
import PhotoController from '../controllers/PhotoController';
import login from '../middlewares/login';

const router = new Router();

router.post('/', login, PhotoController.store);

export default router;
