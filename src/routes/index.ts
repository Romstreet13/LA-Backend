import express from 'express';
import merchantRouter from './merchant.router';
import mintNFTRouter from './mintNFT.router';
import NFTRouter from './NFT.router';
import transferNFTRouter from './transferNFT.router';
import logRouter from './logs.router';

const router = express.Router();

router.use('/merchants', merchantRouter);
router.use('/mint-nft', mintNFTRouter);
router.use('/nft', NFTRouter);
router.use('/transfer-nft', transferNFTRouter);
router.use('/logs', logRouter);

export default router;
