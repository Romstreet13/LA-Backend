import express from 'express';
import mintNFTController from '../controllers/mintNFT.controller';

const router = express.Router();

router.route('/').get(mintNFTController.getAllMintNFTs);
router.route('/user-nft').get(mintNFTController.getUserNFT);
router.route('/create').post(mintNFTController.createMintNFT);

export default router;
