import express from 'express';
import startBlockController from '../controllers/startBlock.controller';

const router = express.Router();

router.route('/').get(startBlockController.getStartBlocks);

export default router;
