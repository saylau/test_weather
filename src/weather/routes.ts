import {Router} from 'express';
import {getCityWeatherController} from "./controllers";

const weatherRouter = Router();

weatherRouter.get('/:city', getCityWeatherController);

export default weatherRouter;