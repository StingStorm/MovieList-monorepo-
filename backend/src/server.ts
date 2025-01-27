import express from 'express';
import cors from 'cors';

import { env } from './utils/env';
import { notFoundHandler } from './middlewares/notFoundHandler';
import { errorHandler } from './middlewares/errorHandler';

import router from './routers/index';

const PORT = Number(env('PORT', '3000'));

export const setupServer = () => {
  const app = express();

  app.use(express.json());
  app.use(cors());

  app.use(router);

  app.use('*', notFoundHandler);

  app.use(errorHandler);

  app.listen(3000, (): void => {
    console.log(`Server is running on port ${PORT}`);
  });
};
