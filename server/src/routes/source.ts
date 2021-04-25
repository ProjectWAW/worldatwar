import express from 'express';

import controller from '../controllers/sourceController';

const router = express.Router();

router.get('/', controller.getAll);
router.get('/:id', controller.getById);
router.post('/', controller.add);

export default router;
