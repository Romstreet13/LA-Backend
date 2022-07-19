import express from 'express';
import NFTIDsController from '../controllers/NFTIDs.controller';

const router = express.Router();

router.route('/').get(NFTIDsController.getAllNFTIDs);

export default router;
