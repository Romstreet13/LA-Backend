// @ts-nocheck
import express from 'express';
import 'dotenv/config';
import cors from 'cors';
import { Cron } from './services/cron';
import routes from './routes';

const host = process.env.POSTGRES_HOST || 'localhost';
const port = process.env.PORT || 5225;
const app = express();

app.use('*', cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use('/api', routes);

app.listen(port, host, () => Cron({ port, host }));
