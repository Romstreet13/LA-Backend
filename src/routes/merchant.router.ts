import express from 'express';
import merchantController from '../controllers/merchant.controller';

const router = express.Router();

router.route('/').get(merchantController.getAllMerchants);

export default router;
