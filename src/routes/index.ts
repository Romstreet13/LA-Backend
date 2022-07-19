import express from 'express';
import startBlockRouter from './startBlockRouter';
import testRouter from './testRouter';
import mintNFTRouter from './mintNFT.router';
import NFTIDsRouter from './NFTIDs.router';
import userNFTListRouter from './userNFTList.router';
import merchantListRouter from './merchantList.router';
import usersNFTsListRouter from './usersNFTsList.router';
import transferNFTRouter from './transferNFT.router';

const router = express.Router();

// Main routes:
router.use('/mint-nft', mintNFTRouter);
router.use('/nft-ids', NFTIDsRouter);
router.use('/user-nft-list', userNFTListRouter);
router.use('/merchant-list', merchantListRouter);
router.use('/users-nfts-list', usersNFTsListRouter);
router.use('/transfer-nft', transferNFTRouter);

// Additional routes:
router.use('/start-block', startBlockRouter);
router.use('/test', testRouter);

export default router;
