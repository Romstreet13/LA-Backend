import express from 'express';
import NFTController from '../controllers/NFT.controller';

const router = express.Router();

router.route('/').get(NFTController.getAllNFT);

export default router;
