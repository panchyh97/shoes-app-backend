import cors from 'cors';
import morgan from 'morgan';
import express from 'express';

import config from './config';
import routes from './routes';
import './database';

const app = express();

app.set('port', config.PORT);

app.use(cors());
app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

routes(app);

export default app;