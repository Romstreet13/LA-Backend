import express from 'express';
import NFTController from '../controllers/NFT.controller';

const router = express.Router();

router.route('/').get(NFTController.getAllNFT);
router.route('/user-nft').get(NFTController.getUserNFT);

export default router;
