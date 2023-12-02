import { createMiddleware } from '@mswjs/http-middleware';
import cors from 'cors';
import express from 'express';

import { handlers } from './handlers';

import type { Express } from 'express';

const port = 9090;
const app: Express = express();

app.use(cors({ origin: 'http://localhost:3000', optionsSuccessStatus: 200, credentials: true }));
app.use(express.json());
app.use(createMiddleware(...handlers));

app.listen(port, () => {
  console.log(`Mock server is running on port: ${port}`);
});
