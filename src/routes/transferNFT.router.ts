import express from 'express';
import transferNFTController from '../controllers/transferNFT.controller';

const router = express.Router();

router.route('/').get(transferNFTController.getTransferNFT);

export default router;
