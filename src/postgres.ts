import pgpromise from 'pg-promise'


const initOptions = {
    // initialization options;
};
const pgp = pgpromise(initOptions);

export const cn = 'postgres://postgres:postgres@postgres:5432/weather_db';
export const db = pgp(cn);