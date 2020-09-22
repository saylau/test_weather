import { Router } from 'express';

import weatherRouter from './weather';

const routes = Router();

routes.use('/weather', weatherRouter);

export default routes;