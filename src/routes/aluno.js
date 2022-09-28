import { Router } from 'express';
import alunoController from '../controllers/AlunoController';
import login from '../middlewares/login';

const router = new Router();

router.get('/', alunoController.index);
router.post('/', login, alunoController.create);
router.put('/:id', login, alunoController.update);
router.get('/:id', alunoController.show);
router.delete('/:id', login, alunoController.delete);

export default router;
