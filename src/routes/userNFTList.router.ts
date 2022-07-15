import express from 'express';
import userNFTListController from '../controllers/userNFTList.controller';

const router = express.Router();

router.route('/').get(userNFTListController.getUserNFTList);

export default router;
