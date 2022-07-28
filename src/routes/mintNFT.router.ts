import express from 'express';
import mintNFTController from '../controllers/mintNFT.controller';

const router = express.Router();

router.route('/').get(mintNFTController.getAllMintNFTs);
router.route('/user').get(mintNFTController.getUserMintNFT);
router.route('/create').post(mintNFTController.createMintNFT);

export default router;
