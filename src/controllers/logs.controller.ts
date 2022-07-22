import { Request, Response } from 'express';
import logService from '../services/logs.service';

// GET all logs
const getAllLogs = async (req: Request, res: Response) => {
  const allLogs = await logService.getAllLogs();
  res.status(200).send(allLogs);
};

export default {
  getAllLogs,
};
