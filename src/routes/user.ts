import express from 'express';

import controller from '../controllers/userController';

const router = express.Router();

router.get('/', controller.getAll);
router.get('/:id', controller.getById);

export default router;
