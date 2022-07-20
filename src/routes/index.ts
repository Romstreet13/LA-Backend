import express from 'express';
import mintNFTRouter from './mintNFT.router';
import NFTIDsRouter from './NFTIDs.router';
import transferNFTRouter from './transferNFT.router';

const router = express.Router();

router.use('/mint-nft', mintNFTRouter);
router.use('/nft-ids', NFTIDsRouter);
router.use('/transfer-nft', transferNFTRouter);

export default router;
