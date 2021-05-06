import express from 'express';

import controller from '../controllers/eventController';

const router = express.Router();

router.get('/', controller.getAll);
router.get('/:id', controller.getById);
router.get('/date/:date', controller.getByDate);
router.post('/', controller.add);

export default router;
