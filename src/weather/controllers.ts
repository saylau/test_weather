import {Request, Response } from 'express';
import {db} from '../postgres'

export const getCityWeatherController = async (request: Request, response: Response, next:any):Promise<any> => {
    const city_id = await db.one('select id from cities where name=$1', request.params.city)
        .then((data) => {
            return data.id
        })
        .catch(function (err) {
            return next(err);
        });

    const [today, yesterday, week_avg] = await Promise.all([
        db.one(
            `select temperature from weather 
                where measured_at=current_date 
                and city_id=$1`, city_id
        ).then(data=>data.temperature),
        db.one(
            `select temperature from weather 
                where measured_at=current_date - interval '1 days' 
                and city_id=$1`, city_id
        ).then(data=>data.temperature),
        db.one(
            `select avg(temperature) from weather 
                where measured_at >= date_trunc('week', now())
                and city_id=$1`, city_id
        ).then(data=>data.avg)
    ]).catch(function (err) {
        return next(err);
    })

    return response.status(200).json({today, yesterday, week_avg})
  }