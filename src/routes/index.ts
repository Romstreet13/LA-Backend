import express from 'express';
import mintNFTRouter from './mintNFT.router';
import NFTRouter from './NFT.router';
import transferNFTRouter from './transferNFT.router';

const router = express.Router();

router.use('/mint-nft', mintNFTRouter);
router.use('/nft', NFTRouter);
router.use('/transfer-nft', transferNFTRouter);

export default router;
