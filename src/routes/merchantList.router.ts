import express from 'express';
import merchantListController from '../controllers/merchantList.controller';

const router = express.Router();

router.route('/').get(merchantListController.getMerchantList);

export default router;
