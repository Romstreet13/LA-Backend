import express from 'express';
import testController from '../controllers/test.controller';

const router = express.Router();

router.route('/stats').get(testController.getTestStats);

export default router;
