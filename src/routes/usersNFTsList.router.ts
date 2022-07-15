import express from 'express';
import usersNFTsListController from '../controllers/usersNFTsList.controller';

const router = express.Router();

router.route('/').get(usersNFTsListController.getUsersNFTsList);

export default router;
